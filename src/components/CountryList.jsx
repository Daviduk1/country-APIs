

const CountryList = ({list}) => {
    return (
        <div className="country-list">
                   {
                       list?.length?
                       (
                            list.map(country => {
                                return (
                                    <div className="country-card"key={country.name}>
                                        <figure>
                                            <img src={country.flag} alt={country.name} />
                                        </figure>
                                        <div className="details">
                                            <h3>{country.name}</h3>
                                            <p>
                                                <span>Population:</span>
                                                <span>{country.population}</span>
                                            </p>
                                            <p>
                                                <span>Region:</span>
                                                <span>{country.region}</span>
                                            </p>
                                            <p>
                                                <span>Capital:</span>
                                                <span></span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                       ) :
                       (
                            <div className="no-content">
                                <h1>Oops!</h1>
                                <p>We coundn't fine your country</p>

                            </div>
                       )
                    }   
                   
               </div>
    )
}

export default CountryList
