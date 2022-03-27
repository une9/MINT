import styles from '../styles/Home.scss';
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { Carousel } from 'react-bootstrap';
import Kepler_1649c from '../lottie/Planet_Kepler_1649C.json';
import Kepler_22b from '../lottie/Planet_Kepler_22B.json';
import Proxima_B from '../lottie/Planet_Proxima-b.json';
import Ross_128b from '../lottie/Planet_Ross_128B.json';
import Teegarden_b from '../lottie/Planet_Teegarden_B.json';
import axios from 'axios';

const Home = () => {
  const [planetList, setPlanetList] = useState();
  const planetName = [
    Teegarden_b,Ross_128b,Kepler_1649c,Kepler_22b,Proxima_B
  ];
  const [isStopped, SetIsStopped] = useState(false);
  const [isPaused, SetIsPaused] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + '/api/planets', {})
      .then((res) => {
        const planetData = res.data.planet;
        setPlanetList((prevState) => ({
          ...prevState,
          planetData,
        }));
      });
  }, []);

  const movepage = () => {};

  return (
    <div className="main" style={styles}>
      {/* <div> */}
      <div>
        <Carousel>
          {planetList!==undefined &&
            planetList.planetData.map((planet,index) => (
              <Carousel.Item>
                <div className="planet-name" >{planet.name}</div>
                <Lottie
                  options={{
                    animationData: planetName[index],
                    loop: true,
                    autoplay: true,
                    rendererSettings: {
                      className: 'add-class', // svg에 적용
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  isStopped={isStopped}
                  isPaused={isPaused}
                  onClick={movepage}
                  style={{ width: '500px', height: '500px' }} // svg의 부모 div에 적용
                  eventListeners={[
                    {
                      eventName: 'complete',
                      callback: () => console.log('the animation completed'),
                    },
                  ]}
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
