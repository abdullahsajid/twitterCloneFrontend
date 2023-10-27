import React, { useState,useRef,useEffect } from 'react'
import Leftsec from '../layout/main/Leftsec'
import Leftprofile from '../layout/profile/Leftprofile'
import Comments from '../layout/Comments/Comment'

const RouteComment = ({socket}) => {

  let windowWidth = useRef(window.innerWidth)
  const[showNav,setShowNav] = useState(windowWidth.current < 520)
  const handleResize = () => {
      setShowNav(window.innerWidth < 520);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <div className='sub-container relative z-0'>
            <Leftsec/>
            <Comments showNav={showNav} socket={socket}/>
            <Leftprofile/>
        </div>
    </div>
  )
}

export default RouteComment



