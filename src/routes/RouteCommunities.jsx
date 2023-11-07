import React from 'react'
import Leftsec from '../layout/main/Leftsec'
import Communities from '../layout/communication/Communities'
import Rightsec from '../layout/main/Rightsec'
const RouteCommunities = ({notification}) => {
  return (
    <div>
      <div className='sub-container'>
        <Leftsec notification={notification}/><Communities/><Rightsec/>
      </div>
    </div>
  )
}

export default RouteCommunities
