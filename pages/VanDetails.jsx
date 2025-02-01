import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function VanDetails() {
    const [van, setVan] = useState(null)
    const params = useParams()

    useEffect(() => {
        async function getVanDetails() {
            const response = await fetch(`/api/vans/${params.id}`)
            const { vans: van } = await response.json()
            setVan(van)
            console.log(van)
        }

        getVanDetails(params.id)
    }, [params.id]) 

    return (
        <>
            { van ? <section className="van-details">
                        <Link className="van-details__return-link" to='/vans'>Back to all vans</Link>
                        <img className="van-details__image" src={van.imageUrl} alt={`Image of ${van.name}`} />
                        <div className={`van-details__type van-details__type--${van.type}`}>{`${van.type[0].toUpperCase()}${van.type.slice(1)}`}</div>
                        <h2>{van.name}</h2>
                        <p><span className="van-details__price">${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="van-details__select-btn">Rent this van</button>
                    </section>
                :
                    <h2>Loading...</h2>
            }
        </>
    )
}