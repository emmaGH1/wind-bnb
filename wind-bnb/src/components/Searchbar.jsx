import React, { useState} from 'react'

import { Search } from '../assets'

const Searchbar = ({apiData, setApiData, location, setLocation, guests, setGuests}) => {

  const [updatedList, setUpdatedList] = useState(apiData)

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
      const filteredData = updatedList.filter(({city, country, maxGuests}) => {
        return (city.toLowerCase().includes(e.target.value.toLowerCase())
        ||
        country.toLowerCase().includes(e.target.value.toLowerCase())) 
   
      })

      setApiData(filteredData)
    }

  const handleGuestsChange = (e) => {
    setGuests(e.target.value)
      const filteredData = updatedList.filter(({maxGuests}) => {
        console.log(guests);
      })

      setApiData(filteredData)
    }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='font-mulish max-w-[90%] flex shadow-custom border-2 border-[#f2f2f2] shadow-black/10 rounded-2xl mt-8 mx-auto
     md:mt-0 md:w-[40%] md:mx-0
    '
    onSubmit={handleSubmit}
    >
      <input type='search' 
       placeholder='Location'
       className='h-full border-r-4 border border-[#f2f2f2] p-4 w-[45%] rounded-l-2xl '
       value={location}
       onChange={handleLocationChange}
      />
      <input type='number' 
       placeholder='Add guests'
       className='h-full border-r-4 border-[#f2f2f2] p-4 w-[35%] '
       value={guests}
       onChange={handleGuestsChange}
      />
      <button type='submit'
       className='w-1/5 rounded-r-2xl '
       >
        <img src={Search} 
         className='w-7 h-7 mx-auto'
        />
       </button>
    </form>
  )
}

export default Searchbar