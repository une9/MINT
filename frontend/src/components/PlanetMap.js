import { useState } from "react";
import styles from "../styles/PlanetMap.module.scss";

// versions
// 1. detail (상세, 선택 셀 색깔 민트색)
// 2. purchase (구매과정, 선택 셀 색깔 민트색)
// 3. admin (관리자 페이지, 선택 셀(구매 완료된 셀들) 색깔 빨간색)

const PlanetMap = ({ version, planetName, tiles, selectedTileId, setSelectedTileId }) => {
    console.log(planetName)
    // console.log(selectedTileId)

    const onClickTile = (targetTileId) => {
        if (version !== "detail") return;
        console.log(targetTileId)
        setSelectedTileId(targetTileId);
    }

    const tileGenerator = (planetId, blockId, totalTileNum) => {
        return new Array(totalTileNum).fill("").map((tile, idx) => {
                const tileId = `${planetId}-${blockId}-${String(idx+1).padStart(3,'0')}`;
                return (
                    <li key={`grid-item-${idx}`}
                        className={`${styles.planetMapGridItem} 
                            ${styles[tileId]}
                            ${tileId === selectedTileId ? styles['planetMapGridItem--selected'] : ""}`}
                        onClick={() => onClickTile(tileId)}
                    >
                    </li>
                )
            })
    }

    const blockGenerator = (tilesInBlock, planetId) => {
        return tilesInBlock.map((tileNum, idx) => {
            const blockName = String.fromCharCode(65 + idx);
            const blockId = `${planetId}-${blockName}`;
            return (
                <div className={styles[blockId]} key={`block-${blockId}`}>
                    { tileGenerator(planetId, blockName, tileNum) }
                </div>
            )
        })
    }

    return(
        <article className={`${styles.PlanetMap} ${styles[version]}`}>
            <img src={`../../../planetMap/${planetName}.svg`} 
                alt={`planet map - ${planetName}`} className={styles.planet2DMap} />
            <ul className={`${styles.planetMapGrid} ${styles[planetName]}`}>
                {
                    planetName === "kepler-1649c"
                    &&
                    blockGenerator([12, 3, 1, 4, 5], "KepC")
                }
                {
                    planetName === "teegarden"
                    &&
                    blockGenerator([7, 6, 5, 3, 3, 1], "TG")
                }
            </ul>
        </article>
    );
}
export default PlanetMap;