import React, {useState, useRef} from 'react'

import { windApi } from './assets'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults'
import SearchTerms from './components/SearchTerms'

const App = () => {
  const [apiData, setApiData] = useState(windApi)
  const [searchTerms, setSearchTerms] = useState(false)
  const locationRef = useRef(null)


  return (
    <div className={`overflow-hidden ${searchTerms ? 'bg-custom1' : 'bg-white'}`}>
        <SearchTerms searchTerms={searchTerms} setSearchTerms={setSearchTerms} ref={locationRef} apiData={apiData} setApiData={setApiData} 
        />
        <div className='w-[95%] mx-auto my-0 md:w-[85%]'>
            <Navbar apiData={apiData} 
             setApiData={setApiData} 
             searchTerms={searchTerms} 
             setSearchTerms={setSearchTerms}   
             locationRef={locationRef}      
            />
            <SearchResults apiData={apiData} />
        </div>
        
    </div>
 
  )
}

export default App