import Leftsec from '../layout/main/Leftsec'
import Notification from '../layout/notification/Notification'
import Rightsec from '../layout/main/Rightsec'
import { useEffect, useRef, useState } from 'react'
const RouteNotification = () => {

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
        <div className='sub-container'>
        <Leftsec/><Notification showNav={showNav}/><Rightsec/>
        </div>
    </div>
  )
}

export default RouteNotification
