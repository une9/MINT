const TileInfoGenerator = (planetCode, blocks, largeTiles) => {
    let res = "";
    for (let i=0; i < blocks.length; i++) {
        const blockName = String.fromCharCode(65 + i);
        const tileIds = new Array(blocks[i]).fill("").map((tile, idx) => `${planetCode}-${blockName}-${idx+1}`);
        // res += tileIds.map((id, idx) =.)
    }
}

const TileInfo = () => {

    return (
        <div>

        </div>
    )
}

export default TileInfo;