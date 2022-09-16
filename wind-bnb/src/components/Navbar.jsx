import React from 'react'

import Searchbar from './Searchbar'

import { Logo } from '../assets/index'
const Navbar = ({apiData, setApiData, location, setLocation, guests, setGuests}) => {
  return (
    <div 
    className='mt-8 flex flex-col md:flex-row md:justify-between '
    >
      <div><img src={Logo} /></div>
      <Searchbar apiData={apiData} setApiData={setApiData} 
      location={location} setLocation={setLocation} guests={guests} setGuests={setGuests}/>
    </div>
  )
}

export default Navbar