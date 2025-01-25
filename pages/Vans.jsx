import React, { useState, useEffect } from 'react'
import VansListing from '../components/VansListing'

export default function Vans() {
    const [listings, setListings] = useState([])

    useEffect(() => {
        async function getListings() {
            try {
                const response = await fetch('/api/vans')
                const { vans } = await response.json()
                setListings(vans)
                
            } 
            catch (err) {
                console.log(err)
            }
        }

        getListings()
    }, [])

    return (
        <section className="listings">
            <h2>Explore our van options</h2>
            <div className="listings__filter">
                <div className="listings__filter-buttons">
                    <button className="listings__filterBtn">Simple</button>
                    <button className="listings__filterBtn">Luxury</button>
                    <button className="listings__filterBtn">Rugged</button>
                </div>
                <span className="listings__filter-clearBtn">Clear filters</span>
            </div>
            { listings.length > 0 && <div className="listings-container">
                {listings.map(item => 
                    <VansListing 
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        type={item.type}
                    />
                )}
            </div>}
        </section>
    )
}