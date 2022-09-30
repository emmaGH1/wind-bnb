import React from 'react'


import { Star } from '../assets/index'

const SearchResults = ({ apiData, staysLength, setStaysLength }) => {

  return (
    <div className='font-montserrat'>
      <div className='flex justify-between mt-10'>
        <h3 className='text-2xl font-bold mb-6'>Stays in Finland</h3>
        <div className='text-custom1 font-medium'>{staysLength >= 11 ? '12+ stays' : `${staysLength} stays`}</div>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 grid-flow-row'>
       {
        apiData.map(({ beds, rating, photo, city, country, superHost, title, type}, i) => (
          <div key={i} className='mb-10'>
              <div className='overflow-hidden rounded-3xl '>
                <img src={photo} 
                  className=' w-full h-64 object-cover md:hover:scale-[1.2] hover:transition ease-out hover:transform hover:duration-1000'
                />
              </div>
              <div className='flex mt-4 justify-between text-custom1'>
                <div className='flex '>
                  <div className=''>{superHost && 
                   <button 
                   className='uppercase border-black text-black border-2 px-2 py-1 rounded-2xl text-xs font-bold mr-2'
                   >super host</button>}
                  </div>
                  <div>{`${type} ${beds ? '.': ''}`}</div>
                  <div className='ml-[2px]'>
                    {beds} {beds && `bed${beds > 1 ? 's' : ''}`}
                  </div>
                </div>
                <div className='flex items-center '>
                  <img src={Star} 
                    className='w-6 h-6 md:h-4 md:w-4 mr-2'
                  /> {rating}
                </div>
              </div>
              <div className='text-custom1 text-sm'>{city}, {country}</div>
              <div className='mt-3 font-bold'>{title}</div>
          </div>
        ))
       }
      </div>
    </div>
  )
}

export default SearchResults