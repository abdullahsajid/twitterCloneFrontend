import './App.css';
import Leftsec from './layout/main/Leftsec';
import {useEffect } from 'react';
import Midsec from './layout/main/Midsec';
import Rightsec from './layout/main/Rightsec';
import { useDispatch,useSelector } from 'react-redux';
import { getProfile,getDetail,getAllProfile,getAllUser,setSocket} from './action/UserAction';



function App({socket,notification}) {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.user)
  const profileData = useSelector((state) => state.profile.user)
  

  useEffect(() => {
        dispatch(getProfile())
        dispatch(getAllProfile())
        dispatch(getAllUser())
        if(userData.profileDetails){
          dispatch(getDetail(`${userData._id}`))
        }     

        if(profileData?.details){
          let userName = profileData.details?.userName
          let id = profileData.details?.Owner
          let avatar = profileData.details?.Avatar.url
          socket?.emit('addUser',{id,userName,avatar})
        }
        
  },[dispatch,userData.profileDetails])
  
  return (
    // container mx-auto
    <div className="">
      <div className='sub-container'>
        <Leftsec notification={notification}/><Midsec socket={socket}/><Rightsec/>
      </div>
    </div>
  );
}


export default App;

