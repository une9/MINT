const planetID = {
    "Teegarden_b": 9,
    "Kepler_1649c": 10,
     "Ross_128b": 11,
     "Kepler_22b": 12,
     "Proxima_B": 13
}

const TileInfoGenerator = (planetCode, planetId, blocks, largeTiles) => {
    let res = "";
    let tiles = {};
    for (let i=0; i < blocks.length; i++) {
        const blockName = String.fromCharCode(65 + i);
        for (let j=0; j < blocks[i]; j++) {
            tiles[`${planetCode}-${blockName}-${String(j+1).padStart(3,'0')}`] = [1, 0.01, planetId]
        }
        // const tileIds = new Array(blocks[i]).fill("").map((tile, idx) => `${planetCode}-${blockName}-${String(idx+1).padStart(3,'0')}`);
    }

    for (const tile of largeTiles) {
        const [tid, n, pid] = tile;
        console.log(tid, n, pid, tiles[tid])
        tiles[tid][0] = n**2;
        tiles[tid][1] *= n**2;
    }

    for (const tid in tiles) {
        res += `INSERT INTO Tile(tile_id, area, price, planet_id) VALUES(${tid}, ${tiles[tid][0]}, ${tiles[tid][1]}, ${tiles[tid][2]}); `
    }
    return res
}

const TileInfo = () => {
    console.log(
        `${TileInfoGenerator("KepC", 10, [12, 3, 1, 4, 5], [
        ["KepC-B-001", 2],
        ["KepC-C-001", 3],
        ["KepC-D-001", 2],
        ["KepC-D-002", 2],
        ["KepC-E-001", 2],
    ])}
    
    ${TileInfoGenerator("TG", 9, [7, 6, 5, 3, 3, 1], [
        ["TG-A-001", 2],
        ["TG-C-001", 2],
        ["TG-D-003", 2],
        ["TG-E-001", 2],
        ["TG-F-001", 3],
    ])}`)

    return (
        <div>
        </div>
    )
}

export default TileInfo;