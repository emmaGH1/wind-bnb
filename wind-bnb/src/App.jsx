import React, {useState} from 'react'

import { windApi } from './assets'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'

const App = () => {
  const [apiData, setApiData] = useState(windApi)
  const [location, setLocation] = useState('')
  const [guests, setGuests] = useState(Number)

  return (
    <div className='w-[95%] mx-auto my-0 md:w-[85%]'>
      <Navbar apiData={apiData} setApiData={setApiData} 
      location={location} setLocation={setLocation}
      guests={guests} setGuests={setGuests}
      />
      <SearchResults apiData={apiData}  />
    </div>
  )
}

export default App