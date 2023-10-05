import { useDispatch } from "react-redux";
import { followUser,followOtherUser} from "../action/UserAction";
import { useState } from "react";

function SuggestionFolks({_id,img,name,tag,userId}) {
    const dispatch = useDispatch()
    const [followOrUnfollow,setCondition] = useState(false)
    const mention = tag.split('@')[0]
    const followUnfollow = () => {
        dispatch(followUser({_id}))
        dispatch(followOtherUser({_id}))  
    }
    // let items = (userId == _id) ? setCondition(true) : setCondition(false)
    return (
        <>
        <div className="folksids">
            <div style={{display:"flex"}}>
                    <div>
                        <img src={img ? img : 'https://ionicframework.com/docs/img/demos/avatar.svg'}/>
                    </div>
                    <div style={{marginLeft:".8em"}}>
                        <p>{name ? name : 'Unknown'}</p>
                        <p style={{color:"#8898A5"}}>@{mention}</p>
                    </div>
            </div>
                <div className="folksbtn" onClick={followUnfollow}>
                    <button className="left-tweet-btn" style={{color:'#000'}}>Follow</button>
                </div>
        </div>
        </>
    );
}
export default SuggestionFolks;

// {`${condition ? "UnFollow" : "Follow"}`}