import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../country.css'

const Country = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch(`https://restcountries.com/v3/name/${name}`)
            const country = await response.json();
            setCountry(country)
            // console.log(country)
        }

        fetchCountries()
    }, [])
    return (
        <>
            <section className="country">
                <Link to="/" className="btn btn-light"><i className="fas fa-arrow-left"></i>Back Home</Link>
                {country.map((c) => {
                    const { numericCode, flags, name, population, region, subregion, capital, languages, borders } = c
                    return (<article key={numericCode}>
                        <div className="country-inner">
                                <div className="flag">
                                    <img src={flags[1]} alt={name} />
                                </div>

                                <div className="country-details">
                                    <div>
                                        {/* <h2>{name}</h2> */}
                                        <h4>Population: <span>{population}</span></h4>
                                        <h4>Region: <span>{region}</span></h4>
                                        <h4>Subregion: <span>{subregion}</span></h4>
                                        <h4>Capital: <span>{capital}</span></h4>
                                        {/* <h4>Languages: <span>{languages[0].name}</span></h4> */}
                                    </div>
                                </div>
                                <div>
                                

                                <div>
                                    <h3>Border Countries: </h3>
                                    <div className="borders">
                                        {borders.map((border) => {
                                            return (
                                                <ul key={border}>
                                                    <li>{border}</li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </article>
                    )
                })}
            </section>
        </>
    )
}

export default Country
