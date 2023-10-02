import { useEffect, useState } from 'react';
import '../../App.css';
import Tweets from '../Tweets';
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux';
import {postTweet,getLatestPost,getAllPost,getAllUser} from '../../action/UserAction'
import toast from 'react-hot-toast';

function Midsec() {
    const dispatch = useDispatch()
    const[tweetTxt,setTweetTxt] = useState('')
    const userData = useSelector((state) => state.user.user)
    const profileData = useSelector((state) => state.profile.user)
    
    const handlerSubmit =  (e) => {
        e.preventDefault()
        try{
            if(tweetTxt === ''){
                return toast.error("Nothing there! ",{
                    style: {
                        borderRadius: '10px',
                        border: "1px solid #38444D",
                        background: '#15202B',
                        color: '#fff',
                    }
                })
            }
            const addPost = dispatch(postTweet(tweetTxt))
            if(addPost){
                toast.success('post successfully created!',{
                    style: {
                        borderRadius: '10px',
                        border: "1px solid #38444D",
                        background: '#15202B',
                        color: '#fff',
                    }
                })
            }
            setTweetTxt('')
        }catch(error){
            toast.error(error,{
                style: {
                    borderRadius: '10px',
                    border: "1px solid #38444D",
                    background: '#15202B',
                    color: '#fff',
                }
            })
        }
    }
    
    useEffect(()=>{
        dispatch(getLatestPost())
        dispatch(getAllUser())
        dispatch(getAllPost())
    },[dispatch])

    const {latestPost} = useSelector((state)=>state.getLatestPost.getLatestPost)
    const {loading} = useSelector((state)=> state.getLatestPost)
    const {allpost} = useSelector((state) => state.allPost.allPost)
    const {alluser} = useSelector((state) => state.allUser.allUser)

    return (
        <div className="Mid">
            <div className="navbar">
                <nav className="nav">
                    <p>Home</p>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244)" }}>
                        <g><path d="M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z"></path></g></svg>
                </nav>
            </div>
            <form className="home-area">
                <div className="add-tweet">
                    {profileData ? (<img src={`${(profileData.details) ? profileData.details.Avatar.url : "https://ionicframework.com/docs/img/demos/avatar.svg"}`} />): (<img src={`https://ionicframework.com/docs/img/demos/avatar.svg`}/>)}
                    <textarea cols="45" rows="1" value={tweetTxt} onChange={(e) => setTweetTxt(e.target.value)} placeholder="What's happening?"></textarea>
                </div>
                <div className="add-tweet-imgs">
                    <div className="tweet-img">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(120, 86, 255)" }}>
                            <g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z">
                            </path></g></svg>

                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(120, 86, 255)" }}>
                            <g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg>

                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(120, 86, 255)" }}>
                            <g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path></g></svg>

                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(120, 86, 255)" }}>
                            <g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path></g></svg>

                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            style={{
                                color: "#7856ff",
                            }}
                        >
                            <path d="M6 3V2h2v1h6V2h2v1h1.5A2.5 2.5 0 0 1 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3A2.5 2.5 0 0 1 2 17.5v-12A2.5 2.5 0 0 1 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z" />
                        </svg>

                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(120, 86, 255)" }}>
                            <g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg>
                    </div>
                    <div className="tweet">
                        <button type='submit' onClick={handlerSubmit}>Tweet</button>
                    </div>
                </div>
            </form>
            {loading ? (
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
                    <Oval
                        height={30}
                        width='100%'
                        color="rgb(120, 86, 255)"
                        secondaryColor="rgb(120, 86, 255)"
                        strokeWidth={3}
                    />
                </div>
             ):(
                <>
                {latestPost?.map((data,index) => {
                    const item  = allpost?.find((val) => val?.Owner == data?.owner)
                    const getMail = alluser?.find((val) => val._id == data?.owner)
                    const email = getMail?.email.split('@')[0]
                    return <Tweets
                            img={item?.Avatar.url}
                            name={item?.userName}
                            mention={email}
                            blog={data?.caption}
                            _id={data?._id} 
                            userLike={data?.likes.length}
                            userLikes={data?.likes}
                            userComment={data?.comments}
                            />
                })}
                </>
            )}
        </div>
    );
}
export default Midsec;