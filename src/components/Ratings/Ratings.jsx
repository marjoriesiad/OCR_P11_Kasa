import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ratings.css";

const Ratings = (star) => {
    const rate = parseInt(star.rate);
    const diff = 5 - rate;

    return(
        <>
        {Array.from(Array(rate), (e, i) => {
            return(
                <FontAwesomeIcon icon={faStar} className="star full" key={i} />
            );
        })}

        {Array.from(Array(diff), (e, i) => {
            return <FontAwesomeIcon icon={faStar} className="star empty" key={i} />
        })}
        </>
    );
};

export default Ratings;