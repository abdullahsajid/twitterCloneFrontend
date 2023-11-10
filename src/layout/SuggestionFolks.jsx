import { useDispatch } from "react-redux";
import { followUser,followOtherUser,ViewProfile} from "../action/UserAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SuggestionFolks({_id,img,name,tag,choice,userId}) {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [followOrUnfollow,setCondition] = useState(false)
    const mention = tag.split('@')[0]
    const followUnfollow = () => {
        dispatch(followUser({_id}))
        dispatch(followOtherUser({_id}))  
    }
    // let items = (userId == _id) ? setCondition(true) : setCondition(false)
    // const profileHandler = () => {
    //     dispatch(ViewProfile({_id}))
    //     navigation(`/ViewProfile`)
    // }

    return (
        <>
        <div className="folksids">
            <div style={{display:"flex"}}>
                    <div>
                        <img src={img ? img : 'https://ionicframework.com/docs/img/demos/avatar.svg'}/>
                    </div>
                    <div style={{marginLeft:".8em"}}>
                        <p className="name">{name ? name : 'Unknown'}</p>
                        <p style={{color:"#8898A5"}}>@{mention}</p>
                    </div>
            </div>
                <div className="folksbtn" onClick={followUnfollow}>
                    <button className="left-tweet-btn" style={{color:'#000',display:"block"}}>{choice}</button>
                </div>
        </div>
        </>
    );
}
export default SuggestionFolks;

// {`${condition ? "UnFollow" : "Follow"}`}