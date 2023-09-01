import MyImg from '../img/not-found.jpg'
import React from 'react';

export default function NotFound(){
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  const updateScreenHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateScreenHeight);

    return () => {
      window.removeEventListener('resize', updateScreenHeight);
    };
  }, []);
  return (
    <img src={MyImg} width={'100%'} height={`${screenHeight}px`} alt="" />
  )
}
