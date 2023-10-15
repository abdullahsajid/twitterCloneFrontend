import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector } from 'react-redux';

const BottomNavbar = () => {
    const userData = useSelector((state) => state.user.user)
  return (
    <div className='bottom-navbar'>
            <div className='navbar-inner'>
                <Link to='/home' style={{ textDecoration: "none",display:"flex",alignItems:"center" }}>
                    <div className="nav-links bottom-nav-items">
                        <div className="nav-svg" style={{paddingRight:"0"}}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g></svg>
                        </div>
                    </div>
                </Link>
                <Link to="/notification" style={{ textDecoration: "none" }}>
                    <div className="nav-links bottom-nav-items">
                        <div className="nav-svg" style={{paddingRight:"0"}}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg>
                        </div>
                    </div>
                </Link>
                <Link to='/bookmark' style={{ textDecoration: "none" }}>
                    <div className="nav-links bottom-nav-items">
                        <div className="nav-svg" style={{paddingRight:"0"}}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                        </div>
                    </div>
                </Link>
                {userData &&  (
                <Link to={`/profile/${userData._id}`} style={{ textDecoration: "none" }}>
                    <div className="nav-links bottom-nav-items">
                        <div className="nav-svg" style={{paddingRight:"0"}}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                        </div>
                    </div>
                </Link>)}
            </div>
        </div>
  )
}

export default BottomNavbar
