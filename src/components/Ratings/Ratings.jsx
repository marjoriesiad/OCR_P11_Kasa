import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Ratings = (star) => {
    const rate = parseInt(star.rate);
    const diff = 5 - rate;

    return(
        <>
        {Array.from(Array(rate), (e, i) => {
            return(
                <FontAwesomeIcon icon={faStar} className="star star--full" key={i} />
            );
        })}

        {Array.from(Array(diff), (e, i) => {
            return <FontAwesomeIcon icon={faStar} className="star star--empty" key={i} />
        })}
        </>
    );
};

export default Ratings;