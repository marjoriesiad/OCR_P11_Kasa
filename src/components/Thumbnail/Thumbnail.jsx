import { Link } from "react-router-dom";

const Thumbnail = ({link, cover, title}) => {
    return(
        <article className="card">
            <Link to={link} className="card__link">
                <img className="card__image" src={cover} alt={title} />
                <div className="card__title">
                    <h3>{title}</h3>
                </div>
            </Link>
        </article>
    )
}

export default Thumbnail;