import React, { useState } from 'react'

import { Search2, Location } from '../assets'


const SearchTerms = ({
  searchTerms, setSearchTerms, apiData, setApiData, setStaysLength, isLocation,
  setIsLocation, isGuests, setIsGuests
  }) => {
   const [fetchedData, setFetchedData] = useState(apiData)
   const [filteredData, setFilteredData] = useState(apiData)
   const [bgColor, setbgColor] = useState(false)
   const [noOfAdultGuests, setNoOfAdultGuests] = useState(0)
   const [noOfChildrenGuests, setNoOfChildrenGuests] = useState(0)
   
   const cities = [ "Helsinki", "Turku", "Vaasa", "Oulu" ]
   const totalGuests = noOfAdultGuests + noOfChildrenGuests
   
  const handleClick = (city, index) => {
      setbgColor(index)
      setFilteredData(fetchedData.filter((item) => {
        return item.city.includes(city)
     }))
      setIsLocation(false)
    }

  const handleSubmit = () => {
      setApiData(filteredData.filter((item) => item.maxGuests >= totalGuests))
      
      setStaysLength((filteredData.filter((item) => item.maxGuests >= totalGuests)).length)
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
          <div className={`flex flex-col border ${isLocation && 'border-black'} rounded-lg  sm:w-full sm:rounded-none py-2 sm:py-[4px]  pl-5 text-[#BDBDBD] text-sm`}
           onClick={() => setIsLocation(true)}>
            <span className='text-[9px] font-bold uppercase mt-[1px] text-black'>location</span> Add Location
          </div>
          <div className={`flex flex-col border ${!isLocation && 'border-black'} rounded-lg sm:w-full sm:rounded-none py-2 sm:py-[4px] pl-5 text-[#BDBDBD] text-sm`}
           onClick={() => setIsLocation(false)}>
            <span className='text-[9px] font-bold uppercase mt-[1px] text-black'>guests</span> 
            {totalGuests <= 0 ? 'Add Guests' : <div className='text-black'>{totalGuests}</div>}
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
        <div className='flex'>
          {
            isLocation ? 
          <div className='mt-10 ml-10 sm:ml-28 flex flex-col text-[#4F4F4F] text-sm'>
          {
            cities.map((city, index) => (
              <div className={`py-4 flex hover:bg-black/5 w-80 ${bgColor === index ? 'border-2 border-[#BDBDBD]' : ''}`} onClick={() => handleClick(city, index)} key={city} >
                <img src={Location} className='w-6 h-6 mr-2'/> {city}, Finland
              </div>
            ))
          }
          </div> :
          <div className='flex flex-col text-sm mt-10 ml-10 md:ml-[470px]'>
            <div>
              <h3 className='font-bold '>Adults</h3>
              <p className='text-[#4F4F4F]'>Ages 13 or above</p>
              <div className='flex justify-between w-24 mt-2'>
                <button className='border border-black px-2 hover:bg-gray-200'
                 onClick={() => setNoOfAdultGuests((prev) => prev < 0 ? prev - 1 : 0)}>-</button>
                <div>{noOfAdultGuests}</div>
                <button className='border border-black px-2 hover:bg-gray-200'
                 onClick={() => setNoOfAdultGuests(prev => prev + 1)}>+</button>
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='font-bold'>Children</h3>
              <p className='text-[#4F4F4F]'>Ages 2-12</p>
              <div className='flex justify-between w-24 mt-2'>
                <button className='border border-black px-2 hover:bg-gray-200'
                 onClick={() => setNoOfChildrenGuests((prev) => prev < 0 ? prev - 1 : 0)}>-</button>
                <div>{noOfChildrenGuests}</div>
                <button className='border border-black px-2 hover:bg-gray-200'
                 onClick={() => setNoOfChildrenGuests(prev => prev + 1)}>+</button>
              </div>
            </div>
          </div>
          }
        </div>
        <div className='flex sm:hidden border-0 justify-center sm:w-full rounded-lg mt-5 sm:mt-20 '>
            <button type='submit' className='flex justify-center items-center bg-[#EB5757] text-white rounded-2xl p-4 px-7 '
             onClick={handleSubmit}
            >
                <img src={Search2} className='w-5 h-5 mx-auto mr-2'/> 
                Search
            </button>
          </div>
    </div>
  )
}

export default SearchTerms