import React, { useEffect, useState } from 'react'
import { postEditProfile,UpdateProfile } from '../../action/UserAction'
import { useDispatch,useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const EditProfile = ({ setEdit, edit }) => {
    const[name,setNickname] = useState('')
    const[bio,setBio] = useState('')
    const[bannerImg,setBannerImg] = useState(null)
    const[Avatar,setAvatarImg] = useState(null)
    const dispatch = useDispatch()
    const {details} = useSelector((state) => state.profile.user)
    // console.log(details)
    const handleBannerImg = (e) => {
        const selectfile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectfile)
        reader.onload = () => {
            if(reader.readyState === 2){
                setBannerImg(reader.result)
            }
        }
    }

    const handleAvatarImg = (e) => {
        const selectfile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(selectfile)
        reader.onload = () =>{
            if(reader.readyState === 2){
                setAvatarImg(reader.result)
            }
        }
    }

    const editProfile = () => {
        setEdit(!edit)
    }
    const handleEdit = async (e) => {
        e.preventDefault()
        if(name === '' || bio === ''){
            return toast.error("nothing there!",{
                style: {
                  borderRadius: '10px',
                  border: "1px solid #38444D",
                  background: '#15202B',
                  color: '#fff',
                },
              })
        }else{
            dispatch(postEditProfile(name,bio,bannerImg,Avatar))
            toast.success("Profile detials Added!",{ 
                style: {
                  borderRadius: '10px',
                  border: "1px solid #38444D",
                  background: '#15202B',
                  color: '#fff',
            }})
            setEdit(!edit)
        }
    }

    

    useEffect(() => {
        if(details && details.bannerImg){
            const imgBanner = new Image()
            const avatarImg = new Image()
            imgBanner.src = details.bannerImg.url
            avatarImg.src = details.Avatar.url
            imgBanner.onload = () => {
                setBannerImg(details.bannerImg.url)  
            }
            avatarImg.onload = () => {
                setAvatarImg(details.Avatar.url)
            }
            setNickname(details.userName)
            setBio(details.bio)
        } 
    },[details])

    const updateProfileHandler = async (e) => {
        e.preventDefault()
        const updateData = await dispatch(UpdateProfile({name,bio,bannerImg,Avatar}))
        if(updateData.payload.success){
            toast.success("Profile detials Added!",{ 
                style: {
                  borderRadius: '10px',
                  border: "1px solid #38444D",
                  background: '#15202B',
                  color: '#fff',
            }})
            setEdit(!edit)
        }else{
            toast.error("nothing there!",{
                style: {
                  borderRadius: '10px',
                  border: "1px solid #38444D",
                  background: '#15202B',
                  color: '#fff',
                },
            })
            setEdit(!edit)
        }
    }

    return (
        <div className='fixed top-0 z-10'>
            <form className='flex justify-center items-center w-screen h-screen'>
                <div className='edit-profile'>
                    <div className='flex px-4 cursor-pointer' style={{ maxWidth: "600px", height: "53px", width: "100%" }}>
                        <div className='flex self-stretch items-start items-center shrink cursor-pointer' onClick={editProfile} style={{ minWidth: "56px", minHeight: "32px" }}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ stroke: "rgb(239, 243, 244)", width: "20px", height: "20px" }}><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
                        </div>
                        <div className='h-full flex items-center justify-content-center self-stretch shrink grow cursor-auto'>
                            <div className='items-start'>
                                <h1 className='font-bold text-xl'>Edit Profile</h1>
                            </div>
                        </div>
                        <div className='flex self-stretch items-end shrink items-center' style={{ minWidth: "56px", minHeight: "32px" }}>
                            <button onClick={details ? updateProfileHandler : handleEdit} type='submit' className='cursor-pointer' style={{ backgroundColor: "rgb(239, 243, 244)", color: '#000', borderRadius: '999px', padding: '4px 15px' }}>
                                <span className='text-black'>{`${details ? "Update" : "Save"}`}</span>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-col justify-center overflow-hidden relative' style={{ minHeight: '200px',maxHeight: '200px',border:'1px solid #fff'}}>
                            <div className='w-full h-full relative'>
                                <img className='bannerImage' src={bannerImg} />
                            </div>
                            <div className='flex justify-center items-center w-full h-full absolute top-0'>
                                <div className='flex flex-row justify-center items-center'>
                                    <label htmlFor='imageInput' className='flex justify-center items-center' style={{backdropFilter:'blur(4px)', backgroundColor: 'rgba(15, 20, 25, 0.75)', minWidth: '44px', minHeight: '44px', borderRadius: '999px' }}>
                                        <input type="file"
                                            style={{display:'none'}}
                                            accept='image/*' 
                                            id='imageInput'
                                            onChange={handleBannerImg}
                                        />
                                        
                                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '22px', height: '22px', fill: '#fff' }}>
                                            <g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path>
                                            </g>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center relative avatar-img'>
                            <div className='flex flex-col justify-center items-center absolute top-0 w-full h-full'>
                                <div className='flex flex-row justify-center items-center'>
                                    <label htmlFor='avatarImg' className='flex justify-center items-center' style={{ backgroundColor: 'rgba(15, 20, 25, 0.75)', minWidth: '44px', minHeight: '44px', borderRadius: '999px' }}>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '22px', height: '22px', fill: '#fff' }}>
                                            <g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path>
                                            </g>
                                        </svg>
                                    </label>
                                    <input id="avatarImg" type="file" className='absolute'
                                     style={{ width: '0.1px', height: '0.1px', zIndex: '-1', opacity: '0' }}
                                     onChange={handleAvatarImg}
                                     />
                                </div>
                            </div>
                            <div style={{height:'130px', maxWidth: '8rem'}}>
                                <img src={Avatar} style={{ borderRadius: '999px', borderWidth: '2px', borderColor: 'rgb(21, 32, 43)',height:'100%',width:'100%' }} />
                            </div>
                        </div>
                        <div className='w-full p-3'>
                            <label htmlFor="name">Name:</label>
                            <input id='name' value={name} onChange={(e) => setNickname(e.target.value)} className='border border-slate-300 rounded-md px-1 py-2 w-full shadow-sm focus:outline-none mt-2' style={{ background: "none" }} type="name" />
                        </div>
                        <div className='w-full p-3'>
                            <label htmlFor="bio">Bio:</label>
                        
                            <textarea id='bio' value={bio} onChange={(e) => setBio(e.target.value)} className='border border-slate-300 rounded-md px-1 py-2 w-full shadow-sm focus:outline-none mt-2' style={{ background: "none" }} type="name" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfile
