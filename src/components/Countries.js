import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const url = "https://restcountries.com/v2/all";

const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries);
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

    const removeCountry = (numericCode) =>{
        const newCountry = countries.filter((country)=> country.numericCode !== numericCode)
        setCountries(newCountry)
    }

    return (
        <>
            <section className="grid">
                {countries.map((country) => {
                    const { numericCode, name, population, region, capital, flags, subregion,borders,languages } = country

                    return <article key={numericCode}>
                        <div>
                            <img src={flags[1]} alt={name} />
                            <div className="details">
                                <h3 className="country-name"> {name}</h3>
                                <h4>Population: <span>{population}</span></h4>
                                <h4>Region: <span>{region}</span></h4>
                                <h4>Capital: <span>{capital}</span></h4>
                                <h4>Subregion: <span>{subregion}</span></h4>
                                {/* <p>borders: <p>{borders + ""}</p></p> */}
                                <h4>Languages: <span>{languages[0].name}</span></h4> 
                                <div className="buttons">
                                <Link to={`/countries/${name}`} className="btn">Learn more</Link> 
                                <button className="btn" onClick={()=> removeCountry(numericCode)}>Remove Country</button>
                                {/* passing name as variable in the Link as name of the country is different */}
                                </div>
                            </div>
                        </div>
                    </article>
                })}
            </section>

        </>
    )
}

export default Countries
