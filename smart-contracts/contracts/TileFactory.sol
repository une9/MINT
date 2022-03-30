// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./TileNFT.sol";

contract TileFactory is TileNFT {
    uint256 public tileIds;
    address payable owner;

    constructor(address payable _ownerAddress) {
        owner = _ownerAddress;
    }

    struct Tile {
        uint256 tileId;
        address payable tileOwner;
        string galaxyName;
        string planetName;
        string tileName;
        uint256 price;
        string issuer;
        bool assurance;
    }

    mapping(uint256 => Tile) tileInfo;

    event nftPurchase(uint256 indexed tileId, uint256 indexed purchaseTime);

    function currentTileId() public view returns (uint256) {
        return tileIds;
    }

    function createAndBuy(
        string memory _galaxyName,
        string memory _planetName,
        string memory _tileName,
        uint256 _price
    ) public payable {
        tileIds++;

        require(
            msg.sender != address(0),
            "The caller must not have an address of 0."
        );
        require(!_exists(tileIds), "already exists token");

        require(
            owner != address(0),
            "CurrentOwner must not have an address of 0."
        );
        require(owner != msg.sender, "TileOwner should not be a caller.");

        require(
            msg.value >= _price,
            "price sent in to buy should be equal to or more than the token's price"
        );

        //토큰 전송 및 지불
        owner.transfer(msg.value);

        //토큰 발행
        mint(tileIds);

        Tile memory newTile = Tile(
            tileIds,
            payable(msg.sender),
            _galaxyName,
            _planetName,
            _tileName,
            msg.value,
            "MINT",
            true
        );

        tileInfo[tileIds] = newTile;

        emit nftPurchase(tileIds, block.timestamp);
    }

    function getAllTile() public view returns (Tile[] memory) {
        uint256 idx = 0;

        Tile[] memory result = new Tile[](tileIds);
        for (uint256 i = 1; i <= tileIds; i++) {
            result[idx] = tileInfo[i];
            idx += 1;
        }

        return result;
    }

    function getMyTile() public view returns (Tile[] memory) {
        uint256 totalIds = 0;
        uint256 idx = 0;

        for (uint256 i = 1; i <= tileIds; i++) {
            if (tileInfo[i].tileOwner == msg.sender) {
                totalIds += 1;
            }
        }

        Tile[] memory result = new Tile[](totalIds);
        for (uint256 i = 1; i <= tileIds; i++) {
            if (tileInfo[i].tileOwner == msg.sender) {
                result[idx] = tileInfo[i];
                idx += 1;
            }
        }

        return result;
    }

    function getTileId(uint256 _tileId) public view returns (Tile memory) {
        return tileInfo[_tileId];
    }
}
