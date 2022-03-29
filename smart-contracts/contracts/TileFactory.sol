// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./TileNFT.sol";

contract TileFactory is TileNFT {
    uint256 public totalTileIds;

    struct Tile {
        uint256 tileId;
        address payable tileOwner;
        string galaxyName;
        string planetName;
        uint256 price;
        string issuer;
        bool assurance;
    }

    mapping(uint256 => uint256) conIds;
    mapping(uint256 => Tile) tileInfo;

    event LogTileNFT(
        uint256 _tileId,
        address _tileOwner,
        string _galaxyName,
        string _planetName,
        uint256 price,
        string _issuer,
        uint256 _time,
        bool _assurance
    );

    function create(
        uint256 _tileId,
        string memory _galaxyName,
        string memory _planetName,
        string memory _issuer,
        uint256 _price
    ) public {
        //함수 호출자가 0 주소 계정이 아닌지 확인
        require(msg.sender != address(0));
        //_tileId가 존재하는지 확인
        require(!_exists(_tileId));

        //토큰 발행
        mint(_tileId);
        conIds[totalTileIds] = _tileId;
        totalTileIds++;

        //새로운 타일(구조체)를 생성하고 새로운 값 전달
        Tile memory newTile = Tile(
            _tileId,
            payable(msg.sender),
            _galaxyName,
            _planetName,
            _price,
            _issuer,
            true
        );

        tileInfo[_tileId] = newTile;
    }

    function buy(uint256 _tileId) public payable {
        require(
            msg.sender != address(0),
            "The caller must not have an address of 0."
        );
        require(_exists(_tileId), "tileId does not exist.");

        //현재 tileId의 owner;
        address currentOwner = ownerOf(_tileId);

        require(
            currentOwner != address(0),
            "CurrentOwner must not have an address of 0."
        );
        require(
            currentOwner != msg.sender,
            "TileOwner should not be a caller."
        );

        //tileId에 해당하는 Tile 구조체 가져오기
        Tile memory currentTile = tileInfo[_tileId];

        require(
            msg.value >= currentTile.price,
            "price sent in to buy should be equal to or more than the token's price"
        );

        //토큰 전송 및 지불
        _transfer(currentTile.tileOwner, msg.sender, _tileId);
        currentTile.tileOwner.transfer(msg.value);

        //tileOwner 수정 및 tileInfo 정보 수정
        currentTile.tileOwner = payable(msg.sender);
        tileInfo[_tileId] = currentTile;

        emit LogTileNFT(
            _tileId,
            msg.sender,
            currentTile.galaxyName,
            currentTile.planetName,
            currentTile.price,
            currentTile.issuer,
            block.timestamp,
            true
        );
    }

    function getAllTile() public view returns (Tile[] memory) {
        uint256 idx = 0;

        Tile[] memory result = new Tile[](totalTileIds);
        for (uint256 i = 0; i < totalTileIds; i++) {
            result[idx] = tileInfo[conIds[i]];
            idx += 1;
        }

        return result;
    }

    function getMyTile() public view returns (Tile[] memory) {
        uint256 totalIds = 0;
        uint256 idx = 0;

        for (uint256 i = 0; i < totalTileIds; i++) {
            if (tileInfo[conIds[i]].tileOwner == msg.sender) {
                totalIds += 1;
            }
        }

        Tile[] memory result = new Tile[](totalIds);
        for (uint256 i = 0; i < totalTileIds; i++) {
            if (tileInfo[conIds[i]].tileOwner == msg.sender) {
                result[idx] = tileInfo[conIds[i]];
                idx += 1;
            }
        }

        return result;
    }

    function getTileId(uint256 _tileId) public view returns (Tile memory) {
        return tileInfo[_tileId];
    }
}
