import SuggestionFolks from "../SuggestionFolks";
import { useSelector,useDispatch} from "react-redux";
import { useEffect,useState} from "react";
import {getRecommendedUser} from '../../action/UserAction'
function ExploreRight() {
    const dispatch = useDispatch()
    const {alluser} = useSelector((state) => state.allUser.allUser)
    const {allProfile} = useSelector((state) => state.allUserProfile.allUserProfile)
   
    useEffect(() => {
        dispatch(getRecommendedUser())
    },[dispatch])
    const {newRecommender} = useSelector((state) => state.recommendedUser.recommendedUser)
    const userData = useSelector((state) => state.user.user)
    return (
        <div className="right">
            <div className="rightArea">
                <div style={{ backgroundColor: "#1E2732", padding: "1em", borderRadius: "1.2em", margin: ".5em 0" }}>
                    <div>
                        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: ".5em" }}>Who to follow</p>
                    </div>
                    <div className="folksmain">
                        {newRecommender?.map((data) => {
                            let profileId = allProfile?.find((item) => item._id == data._doc.profileDetails)
                            // let items = (userData?._id == data?._id) ? setCondition(true) : setCondition(false)
                            
                            return <SuggestionFolks
                                        _id={data?._doc._id} 
                                        img={profileId?.Avatar.url} 
                                        name={profileId?.userName} 
                                        tag={data?._doc.email}
                                        userId={userData?._id}
                                        choice={data.type.choice} 
                                    />
                        })}
                    </div>
                </div>
                <div style={{ marginTop: "1.3em", paddingLeft: ".5em" }}>
                    <div className="footerPolicy">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className="footerPolicy">
                        <p>Accessibility</p>
                        <p>Ads info</p>
                        <p>More...</p>
                    </div>
                    <div className="footerPolicy">
                        <p>2023 Twitter, Inc</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExploreRight;