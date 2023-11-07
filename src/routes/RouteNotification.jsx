import Leftsec from '../layout/main/Leftsec'
import Notification from '../layout/notification/Notification'
import Rightsec from '../layout/main/Rightsec'
import { useEffect, useRef, useState } from 'react'
const RouteNotification = ({socket,notification}) => {

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
        <Leftsec notification={notification}/><Notification showNav={showNav} socket={socket} notification={notification}/><Rightsec/>
        </div>
    </div>
  )
}

export default RouteNotification
