import React, { useState } from 'react'
import Leftsec from '../layout/main/Leftsec'
import Profile from '../layout/profile/Profile'
import Leftprofile from '../layout/profile/Leftprofile'
import EditProfile from '../layout/profile/EditProfile'
import Comments from '../layout/Comments/Comment'
import ViewProfile from '../layout/ViewProfile'

const RouteViewProfile = () => {
  const[edit,setEdit] = useState(false)
  const[showCommentsCompon,setCompon] = useState(false)

  return (
    <div>
        <div className='sub-container relative z-0'>
            <Leftsec edit={edit}/>
                {/* {showCommentsCompon ? <Comments/> :
                <Profile setEdit={setEdit} edit={edit} compon={showCommentsCompon} setCompon={setCompon}/>}  */}
              <ViewProfile/>
            <Leftprofile edit={edit}/>
        </div>
    </div>
  )
}

export default RouteViewProfile