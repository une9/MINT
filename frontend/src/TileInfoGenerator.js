const planetID = {
    "Teegarden_b": 9,
    "Kepler_1649c": 10,
     "Ross_128b": 11,
     "Kepler_22b": 12,
     "Proxima_B": 13
}

const TileInfoGenerator = (planetCode, blocks, largeTiles) => {
    let res = "";
    for (let i=0; i < blocks.length; i++) {
        const blockName = String.fromCharCode(65 + i);
        const tileIds = new Array(blocks[i]).fill("").map((tile, idx) => `${planetCode}-${blockName}-${idx+1}`);
        // const insertStr = tileIds.map((id, idx) => `INSERT INTO Tile(tile_id, area, price, planet_id) VALUES(${}, ${}, ${}, ${})`);
        // res += insertStr
    }
}

const TileInfo = () => {

    return (
        <div>

        </div>
    )
}

export default TileInfo;