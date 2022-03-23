import styles from '../styles/Home.scss';
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { Carousel } from 'react-bootstrap';
import Kepler_1649C from '../lottie/Planet_Kepler_1649C.json';
import Kepler_22B from '../lottie/Planet_Kepler_22B.json';

const lottieOptions1 = {
  animationData: Kepler_1649C,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const lottieOptions2 = {
  animationData: Kepler_22B,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const Home = () => {
  const [isStopped, SetIsStopped] = useState(false);
  const [isPaused, SetIsPaused] = useState(true);

  return (
    <div className="main" style={styles}>
      {/* <div> */}
      <div>
        <Carousel>
          <Carousel.Item>
            <div className='planet-name'>Kepler_1649C</div>
            <Lottie
              options={lottieOptions1}
              isStopped={isStopped}
              isPaused={isPaused}
              isClickToPauseDisabled={false}
              style={{ width: '500px', height: '500px' }} // svg의 부모 div에 적용
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: () => console.log('the animation completed'),
                },
              ]}
            />
          </Carousel.Item>
          <Carousel.Item>
          <div className='planet-name'>Kepler_22B</div>
          <Lottie
              options={lottieOptions2}
              isStopped={isStopped}
              isPaused={isPaused}
              isClickToPauseDisabled={false}
              style={{ width: '500px', height: '500px' }} // svg의 부모 div에 적용
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: () => console.log('the animation completed'),
                },
              ]}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
