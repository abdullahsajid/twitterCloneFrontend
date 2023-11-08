import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {postLike,gettingTweets,getAllPost,getAllUser,getLatestPost,deletePost,ViewProfile} from '../action/UserAction'
import { useNavigate } from "react-router-dom";


function Tweets({_id,user_id,img,name,mention,blog,userLike,userLikes,userComment,postUser,socket,userImg}) {

  const navigation = useNavigate()
  const dispatch = useDispatch()
  const[toggleDelete,setDeletePost] = useState(false)
  const [likes,setlikes] = useState(userLike)
  const [ActiveLike, setActiveLike] = useState(userLikes?.includes(user_id));
  const userData = useSelector((state) => state.user.user)
  const profileData = useSelector((state) => state.profile.user)
  // const socket = useSelector((state)=>state.socket.socket)

  const likesCount = async (e) => {
    e.preventDefault()
    try{
      let loginUserName = profileData.details?.userName
      const likeData = await dispatch(postLike(_id)) 
      socket?.emit('like',user_id)
      if(likeData.payload.message == "post like!"){
        socket?.emit("sendNotification",{receiverName:name,senderName:loginUserName,img:userImg,type:1})
      }
    }catch(error){
      console.log(error)
    }
    
  }

  const handleCommentComponent = () => {
    navigation('/comments',{state:{_id,user_id,img,name,mention,blog,userLike,userLikes,userComment,userImg}})
    dispatch(getAllPost())
    dispatch(getAllUser())
  }
  
  const toggleDeleteHandler = () => {
    setDeletePost(!toggleDelete)
  }
  const deletedPost = () => {
    dispatch(deletePost({_id}))
    setDeletePost(!toggleDelete)
    dispatch(gettingTweets())
  }
  const verifyUser = userData && userData.posts?.includes(_id)
  // const userr = useSelector((state) => state.viewProfile.viewUser.data)
  const profileHandler = () => {
    dispatch(ViewProfile({_id}))
    navigation(`/ViewProfile`)
  }

  useEffect(() => {
    setlikes(userLike)
  },[userLike])

  useEffect(() => {
    setActiveLike(userLikes?.includes(user_id));
  },[userLikes, user_id])

  useEffect(() => {    
    socket?.on(`like:${_id}`,({data,condition})=>{
      setlikes(data)
      setActiveLike(condition)
    })
    
    return () => {
      socket?.off(`like:${_id}`)
    }
  },[socket])
  
  
  return(
        <div className="tweet-feed">
            <div className="tweet-feed-img" onClick={profileHandler}>
              {img ? <img src={img} alt={name} /> : <img src={`https://ionicframework.com/docs/img/demos/avatar.svg`}/>}
            </div>
            <div className="feed-details">
              <div className="profile-details">
                {name ? <a className="name" onClick={profileHandler}>{name}</a> : <a className="name" onClick={profileHandler}>unknown</a>}
                <p className="mention" onClick={handleCommentComponent}>@{mention}</p>
              </div>
              <div className="tweet-blog" onClick={handleCommentComponent}>
                <p>
                    {blog}
                </p>
              </div>
            </div>
            {(toggleDelete && verifyUser)  && <div className='delete-area' onClick={deletedPost}>Delete</div>}
            <div className="pro-dot dot-dot" onClick={toggleDeleteHandler}>
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-vlxjld r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                >
                <g>
                  <path
                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  ></path>
                </g>
              </svg>
            </div>  
            <div className="feed-links">
                <div className="reply">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                  {userComment  ? <p>{userComment.length}</p>:<p>0</p>}
                </div>
                <div className="retweet" onClick={profileHandler}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                  <p>7</p>
                </div>
                <div className={`${ActiveLike ? "activeLike like": "like"}`} onClick={likesCount}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                  <p>{likes}</p>
                </div>
            </div>
      </div>
    );
}
export default Tweets;