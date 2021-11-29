import { useState, useEffect } from "react"
import CountryList from "./components/CountryList"
import Navbar from "./components/Navbar"
import { getAllCountries } from "./requests"




const App = () => {
    const [countries, setCountries] = useState([])
    const [countryList, setCountryList] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentMode, setCurrentMode] = useState('light')
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('seacrh by region')

    const getRegions = () => {
        let regions= countries.map(country => country.region)
        let uniqueRegions = []
        for (let index = 0; index < regions.length; index++) {
            if (!uniqueRegions.includes(regions[index])) {
                uniqueRegions.push(regions[index])
            }
        }

        uniqueRegions.unshift('search by region')
        return uniqueRegions
    }

    const handleSearch = (searchTerm) => {
        let newList = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCountryList(newList)
    }

    const handleFilter = (filter) => {
        let newList = countries.filter(country => country.region === filter)
        setCountryList(newList)

    }

    const chooseOption = (Option) => {
        setSelectedOption(Option)
        setIsOpen(false)
        handleFilter(Option)
    }

    useEffect(() =>{
        getAllCountries().then(data => {
            setCountries(data)
            setCountryList(data)
            setLoading(false)
        })
    }, [])

    return (
        <div className={`App ${currentMode}`}>
            {loading && <h1>Loading...din..</h1>}
           <Navbar getCurrentMode={setCurrentMode} />

           <main>
               <div className = "top">
                   <div id = "search-area">
                       <input type="text"placeholder = "search for a country.." onChange={(e) =>handleSearch(e.target.value)} />

                   </div>
                   <div id="select-area">
                       <button onClick={() =>setIsOpen(!isOpen)}>{selectedOption}</button>
                      {isOpen && 
                      <ul>
                            {
                                getRegions().map((region, index) => {
                                    return (
                                        <li key={index} onClick={() => chooseOption(region)}>{region}</li>

                                    )
                                })
                            }

                           {/* <li onClick={() =>setSelectedOption('Africa')}>Africa</li>
                           <li onClick={() =>setSelectedOption('America')}>America</li>
                           <li onClick={() =>setSelectedOption('Asia')}>Asia</li>
                           <li onClick={() => selectedOption('Europe')}>Europe</li>
                           <li onClick={() =>selectedOption('Oceania')}>Oceania</li> */}
                       </ul>
                       }
                   </div>
               </div>
               <CountryList list={countryList} />
           </main>
        </div>
    )
}

export default App
