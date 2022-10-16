import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"; 

const Dropdown = ({id, name, content}) => {
    const [open, setOpen] = useState(false);

    // Ouverture et fermeture du dropdown
    const toggleDropdown = (e) => {
        e.preventDefault(); // désactive le comportement par défaut
        setOpen(!open) // set en "open" s'il est différent de open
    };

    return(
        <div className={name}>
            <button className="about-title property-title" onClick={toggleDropdown}>
                <span>{name}</span>
                <span>
                    {/*Si c'est ouvert, alors chevron up, sinon chevron down*/}
                    {open ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                    )}
                </span>
            </button>

            {open && Array.isArray(content) && (
                <ul className="about-content property-content">
                    {content.map((item, id) => (
                        <li key={id} className="about-list property-list">{item}</li>
                    ))}
                </ul>
            )}

            {open && typeof content === "string" && (
                <p key={id} className="about-title">
                    {content}
                </p>
            )}

        </div>
    )
}

export default Dropdown;