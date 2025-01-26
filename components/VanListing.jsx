import { Link } from "react-router-dom"

export default function VanListing({ id, name, price, imageUrl, type }) {
    return (
        <article className="listing">
            <Link to={`/vans/${id}`} className="listing__link">
                <img className="listing__image" src={imageUrl} alt="Some URL" />
                <div className="listing__name-price">
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
                <div className="listing__type-wrapper">
                    <div className={`listing__type listing__type--${type}`}>{`${type[0].toUpperCase()}${type.slice(1)}`}</div>
                    <span>/day</span>
                </div>
            </Link>    
        </article>
    )
}