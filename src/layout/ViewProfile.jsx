import Tweets from './Tweets';
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function ViewProfile() {
    const navigation = useNavigate()
    const viewUser = useSelector((state) => state.viewProfile.viewUser)
    
    const handleBack = () => {
        navigation(-1)
    }


    if(!viewUser.user?.email){
        return null
    }

    const getEmail = viewUser.user.email?.split('@')[0]

    return (
        <div className={`Mid`}>
            <div className="explore" style={{ height: "100%", borderBottom: "1px solid #15202B" }}>
                <div className="navbar">
                    <nav className="nav" style={{ justifyContent: "flex-start",height:'100%'}}>
                        <div onClick={handleBack}>
                            <svg viewBox="0 0 24 24" className='back-btn' aria-hidden="true" style={{ color: "rgb(239, 243, 244)",width:"40px",height: "40px" }}>
                                <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                        </div>
                        <div style={{ margin: "0", padding: "0", marginLeft: "20px" }}>
                            {viewUser && (<p style={{ margin: "0", padding: "0", fontSize: "17px" }}>{(viewUser.profile) ? viewUser.profile?.userName : "unknown"}</p>)}
                            {viewUser ? (<p style={{ margin: "0", padding: "0", fontSize: "12px", color: "#8B98A5" }}>{`${viewUser.postArr?.length} Tweets`}</p>):(<p style={{ margin: "0", padding: "0", fontSize: "12px", color: "#8B98A5" }}>0 Tweets</p>)}
                        </div>
                    </nav>
                </div>
                <div>
                    <div>
                        {viewUser && (<img src={`${(viewUser.profile) ? viewUser.profile.bannerImg.url : "https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16856.jpg"}`} style={{ height: "199px", width: "548px",objectFit: "cover"}} />)}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ position: "relative",width:"150px"}}>
                            {viewUser && (<img src={`${(viewUser.profile) ? viewUser.profile.Avatar.url : "https://ionicframework.com/docs/img/demos/avatar.svg"}`} className="profileimg" />)}
                        </div>
                    </div>
                    <div style={{ marginTop: "5em", marginLeft: "1.5em", display: "flex", flexDirection: "column" }}>
                        {viewUser && (<span style={{ fontSize: "20px", fontWeight: "700" }}>{(viewUser.profile) ? viewUser.profile?.userName : "unknown"}</span>)}
                        {viewUser ? ( <span style={{ fontSize: "15px", color: "#8B98A5", marginTop: "-5px" }}>{`@${getEmail}`}</span>):(<span style={{ fontSize: "15px", color: "#8B98A5", marginTop: "-5px" }}>@gmail.com</span>)}
                    </div>
                    <div style={{ marginLeft: "1.5em", marginTop: ".7em" }}>
                        {viewUser && (<span style={{ fontWeight: "400" }}>{(viewUser.profile) ? viewUser.profile.bio : ""}</span>)}
                    </div>
                    <div style={{ marginTop: ".5em", marginLeft: "1.5em" }}>
                        <p style={{ color: "#8B98A5" }}>Joined Oct 2023</p>
                    </div>
                    <div style={{ display: "flex", marginTop: ".5em", marginLeft: "1.5em" }}>
                        <div style={{ marginRight: "1.5em" }}>
                            {viewUser &&<span style={{ marginRight: ".3em", fontSize: "14px", fontWeight: "700" }}>{(viewUser) ? viewUser.user.following.length : '0'}</span>}
                            <span style={{ color: "#8B98A5", fontSize: "15px" }}>Following</span>
                        </div>
                        <div>
                            {viewUser && <span style={{ marginRight: ".3em", fontSize: "14px", fontWeight: "700" }}>{(viewUser) ? viewUser.user.followers.length : '0'}</span>}
                            <span style={{ color: "#8B98A5", fontSize: "15px" }}>Followers</span>
                        </div>
                    </div>
                    <div style={{ marginTop: "2em", borderBottom: "1px solid #38444D" }}>
                        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1.5em" }}>
                            <p style={{ fontSize: "14px", fontWeight: "700" }}>Tweets</p>
                            <p style={{ fontSize: "14px" }}>Tweets & replies</p>
                            <p style={{ fontSize: "14px" }}>Media</p>
                            <p style={{ fontSize: "14px" }}>Likes</p>
                        </div>
                    </div>
                </div>
                {viewUser.postArr?.map((data,index) => {
                    return <Tweets key={index} 
                                img={(viewUser?.profile) ? viewUser.profile?.Avatar.url : ''}
                                name={(viewUser?.profile) ? viewUser.profile?.userName : ''}
                                mention={getEmail}
                                blog={data?.caption}
                                _id={data?._id} 
                                userLike={data?.likes.length}
                                userLikes={data?.likes}
                                userComment={data?.comments}
                                postUser={data?.owner}
                                user_id={viewUser.user?._id}
                            />
                })}
            </div>
        </div>
    );
}
export default ViewProfile;
