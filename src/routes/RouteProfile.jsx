import React, { useState,useRef,useEffect} from 'react'
import Leftsec from '../layout/main/Leftsec'
import Profile from '../layout/profile/Profile'
import Leftprofile from '../layout/profile/Leftprofile'
import EditProfile from '../layout/profile/EditProfile'
import Comments from '../layout/Comments/Comment'

const RouteProfile = ({socket,notification}) => {
  const[edit,setEdit] = useState(false)
  const[showCommentsCompon,setCompon] = useState(false)

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
            {edit && <EditProfile setEdit={setEdit} edit={edit}/>}
            <Leftsec edit={edit} notification={notification}/>
            {showCommentsCompon ? <Comments/> :
              <Profile showNav={showNav} setEdit={setEdit} edit={edit} compon={showCommentsCompon} setCompon={setCompon} socket={socket}/>} 
            <Leftprofile edit={edit}/>
        </div>
    </div>
  )
}

export default RouteProfile



