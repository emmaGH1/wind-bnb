import React from 'react'

import Searchbar from './Searchbar'

import { Logo } from '../assets/index'
const Navbar = ({
  apiData, 
  setApiData, 
  searchTerms, 
  setSearchTerms, 
  isLocation,
  setIsLocation,
  isGuests,
  setIsGuests
  }) => {
  return (
  <>
    <div 
    className='mt-8 flex flex-col md:flex-row md:justify-between '
    >
      <div><img src={Logo} /></div>
      <Searchbar apiData={apiData} setApiData={setApiData} searchTerms={searchTerms} setSearchTerms={setSearchTerms} 
        isLocation={isLocation} setIsLocation={setIsLocation}
        isGuests={isGuests} setIsGuests={setIsGuests}
      />
    </div>
    <div>

    </div>
  </>
  )
}

export default Navbar