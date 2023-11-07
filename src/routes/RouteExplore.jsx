import React from 'react'
import Explore from '../layout/explore/Explore'
import Leftsec from '../layout/main/Leftsec'
import ExploreRight from '../layout/explore/ExploreRight'
const RouteExplore = ({notification}) => {
  return (
    <div>
      <div className='sub-container'>
        <Leftsec notification={notification}/><Explore/><ExploreRight/>
      </div>
    </div>
  )
}

export default RouteExplore
