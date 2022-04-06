import styles from '../styles/Description.module.scss';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const Description= ( ) => {
    // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(0, 1000), Sticky());
    // const FadeUp = batch(FadeIn(), Sticky(), MoveOut(0, -200));

    return(
        <main className={styles.Description}>
            <header>
                <h1 className={styles.mint}> MINT </h1>
                <div className={styles.header__subWrapper}>
                    <p className={`${styles.header__sub} ${styles.header__meaning}`}>
                        <strong>M</strong>inistry of <strong>IN</strong>terstellar <strong>T</strong>rade
                    </p>
                    <p className={`${styles.header__sub} ${styles.header__slogan}`}>
                        Buy and own a planet where future humans can settle!
                    </p>
                </div>
            </header>
            <ScrollContainer>
                 <ScrollPage page={0}>
                    <Animator animation={FadeUp}>
                        {/* <span style={{ fontSize: "3em" }}>Let't me show you scroll animation 😀</span> */}
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={FadeUp}>
                    <span style={{ fontSize: "3em" }}>I'm FadeUp ⛅️</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                </ScrollPage>
                <ScrollPage page={3}>
                    <Animator animation={batch(Fade(), Sticky())}>
                    <span style={{ fontSize: "3em" }}>Done</span>
                    <span style={{ fontSize: "3em" }}>
                        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                    </span>
                    </Animator>
                </ScrollPage>
    
            </ScrollContainer>
            <div className={styles.Description}>
                <header>
                     <h1 className={styles.mint}> MINT </h1>
                     <div className={styles.header__subWrapper}>
                         <p className={`${styles.header__sub} ${styles.header__meaning}`}>
                             <strong>M</strong>inistry of <strong>IN</strong>terstellar <strong>T</strong>rade
                         </p>
                         <p className={`${styles.header__sub} ${styles.header__slogan}`}>
                             Buy and own a planet where future humans can settle!
                         </p>
                     </div>
                </header>
    
                <article className={styles.article}>
                    <section>
                        <h2>
                             Why, <span className={`${styles.mint} ${styles.mint__h2}`}>MINT</span> ?
                        </h2>
    
                        <blockquote>
                             "인류 멸망을 원치 않는다면 향후 200년 안에 지구를 떠나야 한다."
                             - 천재 과학자 스티븐 호킹의 유언
                        </blockquote>
    
                        <blockquote>
                         "언젠가 찾아올 인류 최후의 날의 대안은 우주 문명을 건설하고 인류가 다행성 거주 종이 되는 것"
                         - 일론 머스크 (민간 우주 탐사 기업 스페이스 X의 CEO)
                        </blockquote>
    
                        <p>
                         스티븐 호킹은 인류가 외계 행성에 영구 거주할 수 있도록 지금 준비에 나서야 한다고 말해왔습니다. 
                         인류란 존재는 머지않아 멸종에 가까운 대재앙의 희생물이 될 것으로 판단했기 때문입니다. 
                         대표적 예가 소행성의 충돌 같은 것이지만, 호킹 박사는 이 외에도 인공지능(AI)과 기후변화, 핵전쟁, 변종 바이러스, 인구폭발 등도 잠재적 위협이 될 것으로 봤습니다.
                        </p>
    
                        <p>
                         2016년 4월, 호킹은 일명 '브레이크스루 스타샷 (Breakthrough starshot)'프로젝트를 발표했습니다.
                         지구와 가까운 항성계인 프록시마 계와 프록시마 B를 탐사하기 위해 초소형 우주선을 띄우는 것이 이 프로젝트의 목적입니다.
                         복사압을 이용하여 광속의 15%~20%의 속도로 2~30년만에 프록시마에 도달하여 4년에 걸친 탐사를 통해 프록시마의 환경, 생명체 거주 가능성, 대기 등을 확인하려는 계획을 가지고 있습니다.
                         이 프로젝트는 NASA에서 진행되어 2036년 발사된다는 구체적인 계획까지 완성된 상태입니다.
                        </p>
    
                        <p>
                         최초로 민간 유인 우주 왕복선 발사에 성공한 우주 탐사 기업 스페이스 X의 CEO 일론 머스크는 '다행성종족'(multi-planetary species)이라는 개념을 제시했습니다.
                         다행성 종족이란 여러 행성에 거주하는 생명체를 일컫습니다. 
                         머스크는 미래와 인류의 지속가능성에 대해 고민하며 인간이 궁극적으로 다른 행성으로 이주할 수 있는 다행성 종족이 돼야 한다고 강조해왔습니다. 
                         그는 실제로 2030년 경 화성 유인 탐사를 목표로 로켓 개발과 우주 탐사에 박차를 가하고 있습니다.
                        </p>
    
                        <p>
                         미국 항공우주국 NASA는 2022년 3월 22일자로 태양계 너머에서 확인된 외계 행성만 5000개를 넘어섰다고 밝혔습니다.
                         그 중 인간이 살아갈 수 있는 환경을 지닌 제 2의 지구가 되어줄 '유사 지구' 후보로 거론되고 있는 외계 행성 역시 현재까지 51개나 되며, 매일 새롭게 발견되고 있습니다.
                        </p>
    
                        <p>
                         이처럼 지구는 더이상 유일한 거주지로서의 안정성을 보장해주지 못하고, 
                         인류는 타행성으로의 이주를 바라보고 있습니다.
                         빠르게 발달하고 있는 우주 기술은 그리 멀지 않은 시점에 제 2의 지구로의 이주를 가능하게 할 것으로 기대됩니다.
                        </p>
                    </section>
    
                    <section>
                        <h2>
                             우주 부동산 거래 플랫폼, <span className={`${styles.mint} ${styles.mint__h2}`}>MINT</span>
                        </h2>
    
                        <p>
                         우주 부동산 거래 플랫폼 MINT는 이러한 미래 인류의 행성 이주에 대비해 여러 유사 지구의 가상 부동산 거래를 중개합니다.
                         당신은 MINT를 통해 향후 거주하게 될 행성의 토지를 선점할 수 있습니다. 
                         거래는 이더리움(ethereum) 기반의 NFT를 이용해 영구히 기록됩니다. 당신은 해당 토지에 대한 전적인 소유권을 가지게 되며, 해당 사실을 공적으로 인정받을 수 있습니다.
                        </p>
    
                        <p>
                         마음에 드는 토지를 구매하고 각종 건물 및 시설의 건축 계획을 미리 세워보세요!
                        </p>
                    </section>
    
                     <div className={styles.cites}>
                         <p>자료 출처</p>
                         <cite>https:ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%80%EC%83%B7</cite>
                         <cite>https:youtu.be/IXJnJl_I1XI</cite>
                         <cite>https:www.joongang.co.kr/article/22456045#home</cite>
                         <cite>https:www.sedaily.com/NewsVIew/263K08FUSB</cite>
                         <cite>https:www.hani.co.kr/arti/science/science_general/783860.html</cite>
    
                     </div>
                </article>
    
             </div>
        </main>
    );
}
export default Description;