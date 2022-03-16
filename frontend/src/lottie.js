import React, { useState } from 'react';
import Lottie from 'react-lottie';
import ThumbsUp from './lottie/Mint_Logo_Long_Font.json';

const lottieOptions = {
  animationData: ThumbsUp,   
  loop: false,        
  autoplay: false,   
  rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const ThumbsUpComponent = () => {
	const [isStopped, SetIsStopped] = useState(false);
	const [isPaused, SetIsPaused] = useState(true);

	const onStop = () => {
		SetIsStopped(!isStopped)
	};

	const onPause = () => {
		SetIsPaused(!isPaused)
	};

	return (
		<div className="thumbs-up">
			<Lottie
				options={{loop:true}}
				isStopped={isStopped}
				isPaused={isPaused}
				isClickToPauseDisabled={false}
				style={{width: '300px', height: '300px'}} // svg의 부모 div에 적용
				eventListeners={[
					{
						eventName: 'complete',
						callback: () => console.log('the animation completed'),
					},
				]}
			/>
			<button onClick={onPause}>Play/Pause</button>
		</div>
	)
}

export default ThumbsUpComponent;