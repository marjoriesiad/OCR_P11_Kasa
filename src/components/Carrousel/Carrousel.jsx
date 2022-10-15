import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Carrousel = ({pictures}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const previous = () => {
        setActiveIndex((index) => 
        index - 1 < 0 ? pictures.length : index - 1
        );
    }

    const next = () => {
        setActiveIndex((index) =>
        index + 1 > pictures.length - 1 ? 0 : index + 1
        );
    };

    return (
        <section className="carrousel">
            <FontAwesomeIcon icon={faChevronLeft} className={`carrousel__left`} onClick={previous} />
            <img src={pictures[activeIndex]} alt="Logement" className="carrousel__image" />
            <FontAwesomeIcon icon={faChevronRight} className={`carrousel__right`} onClick={next} />
            <p className="carrousel__index">{activeIndex + 1}/{pictures.length}</p>
        </section>
    )
}

export default Carrousel;