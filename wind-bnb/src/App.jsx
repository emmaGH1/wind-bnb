import React, {useState, useRef} from 'react'

import { windApi } from './assets'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'
import SearchTerms from './components/SearchTerms'

const App = () => {
  const [apiData, setApiData] = useState(windApi)
  const [searchTerms, setSearchTerms] = useState(false)
  const [staysLength, setStaysLength] = useState(12)
  const locationRef = useRef(null)


  return (
    <div className={`overflow-hidden ${searchTerms ? 'bg-custom1' : 'bg-white'}`}>
        <SearchTerms searchTerms={searchTerms} setSearchTerms={setSearchTerms} ref={locationRef} apiData={apiData} setApiData={setApiData} setStaysLength={setStaysLength}
        />
        <div className='w-[95%] mx-auto my-0 md:w-[85%]'>
            <Navbar apiData={apiData} 
             setApiData={setApiData} 
             searchTerms={searchTerms} 
             setSearchTerms={setSearchTerms}   
             locationRef={locationRef}      
            />
            <SearchResults apiData={apiData} setStaysLength={setStaysLength} staysLength={staysLength} />
        </div>
        
    </div>
 
  )
}

export default App