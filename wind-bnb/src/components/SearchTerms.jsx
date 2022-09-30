import React, { useState, forwardRef} from 'react'

import { Search2, Location } from '../assets'


const SearchTerms = ({searchTerms, setSearchTerms, apiData, setApiData}, ref) => {
   
   const cities = [ "Helsinki", "Turku", "Vaasa", "Oulu" ]
   
   const fetchedData = apiData
   let filteredData
   
  const handleClick = (city) => {
      
      
      filteredData = fetchedData.filter((item) => {
        return item.city.includes(city)
     })

    }

  const handleSubmit = () => {
      setApiData(filteredData)
      setSearchTerms(false)
  }
   
  return (
    <div className={` absolute w-full bg-white top-0 h-[70vh] sm:h-[85vh] font-mulish z-[1000] ${searchTerms ? 'block' : 'hidden'}`}>
        <div className='flex justify-between'>
            <p className='pt-5 pl-3 font-bold'>Edit your search</p>
            <div className='mr-3 mt-2 cursor-pointer' onClick={() => setSearchTerms(prev => !prev)}>X</div>
        </div>
        <div className='flex flex-col sm:flex-row w-[90%] mx-auto sm:mt-10 mt-5
        shadow-none border-2 border-[#f2f2f2] shadow-black/10 rounded-2xl sm:justify-between'>
          <div className='flex flex-col focus:border-blue-400 rounded-lg sm:border-0 sm:w-full sm:rounded-none py-2 sm:py-[4px]  ml-5 sm:border-r text-[#BDBDBD] text-sm'
           ref={ref}
          >
            <span className='text-[9px] font-bold uppercase mt-[1px] text-black'  >location</span> Add Location
          </div>
          <div className='flex flex-col focus:border-blue-400 border-t-[1px] sm:border-0 sm:w-full sm:rounded-none py-2 sm:py-[4px] ml-5 sm:border-r text-[#BDBDBD] text-sm'
            
          >
            <span className='text-[9px] font-bold uppercase mt-[1px] text-black'>guests</span> Add Guests
          </div>
          <div className='hidden sm:flex border-0 justify-center sm:w-full rounded-lg '>
            <button type='submit' className='flex justify-center items-center bg-[#EB5757] text-white rounded-2xl px-10'
              onClick={handleSubmit}
            >
                <img src={Search2} className='w-5 h-5 mx-auto mr-2' /> 
                Search
            </button>
          </div>
        </div>
        <div className='mt-10 ml-10 sm:ml-28 flex flex-col text-[#4F4F4F] text-sm'>
         {
          cities.map((city) => (
            <div className={`py-4 flex hover:bg-black/10 w-80 `} onClick={() => handleClick(city)} key={city} >
              <img src={Location} className='w-6 h-6 mr-2'/> {city}, Finland
            </div>
          ))
         }
    
        </div>
        <div className='flex sm:hidden border-0 justify-center sm:w-full rounded-lg mt-5 sm:mt-20 '>
            <button type='submit' className='flex justify-center items-center bg-[#EB5757] text-white rounded-2xl p-4 px-7 '
             onClick={handleSubmit}
            >
                <img src={Search2} className='w-5 h-5 mx-auto mr-2' loading='lazy'/> 
                Search
            </button>
          </div>
    </div>
  )
}

export default forwardRef(SearchTerms)