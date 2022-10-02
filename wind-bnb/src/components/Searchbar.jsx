import React, { useState, forwardRef} from 'react'

import { Search } from '../assets'

const Searchbar = ({
  apiData, setApiData, searchTerms, setSearchTerms, isLocation, 
  setIsLocation, isGuests,setIsGuests
  }) => {
  const handleClick = (location) => {
    setSearchTerms(true)
    setIsLocation(location)
    setIsGuests(!location)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
        <div className='font-mulish w-[90%] flex shadow-custom border-2 border-[#f2f2f2] shadow-black/10 rounded-2xl 
          mt-8 mx-auto md:mt-0 md:w-[40%] md:mx-0 text-sm hover:shadow-lg hover:transition-all'
          onSubmit={handleSubmit}
        >
          <div
          className='h-full border-r-4 border border-[#f2f2f2] p-2 py-2 md:p-4 w-full md:w-[45%] rounded-l-2xl text-[#BDBDBD]'
          onClick={() => handleClick(true)}
          >Add Location</div>
          <div className='h-full border-r-4 border-[#f2f2f2] p-2 py-2 md:p-4 w-full md:w-[35%] text-[#BDBDBD]'
          onClick={() => handleClick(false)}
          >Add Guests</div>
          <button type='submit' className='w-2/5 md:w-1/5 rounded-r-2xl '>
            <img src={Search} 
            className='w-7 h-7 mx-auto'
            />
          </button>
        </div> 
  )
}

export default Searchbar