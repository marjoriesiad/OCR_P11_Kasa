import React from "react";
import { housing } from "../data/housing";
import Header from "../components/Header/Header";
import Carrousel from "../components/Carrousel/Carrousel";
import Tags from "../components/Tags/Tags";
import Ratings from "../components/Ratings/Ratings";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Property = () => {
    const param = useParams();
    const [house, setHouse] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        const matchHouse = housing.find((house) => house.id === param.id);
        if(!matchHouse){
            navigate("/error");
        } else{
            setHouse(matchHouse);
        }
    }, [navigate, param.id]);

    return(
        <div>
            <Header />
            {house != null && (
                <>
                <Carrousel pictures={house?.pictures} />
                <section className="property">
                    <div className="property__content">
                        <h2 className="property__title">{house?.title}</h2>
                        <h5 className="property__location">{house?.location}</h5>

                        <div className="property__tags">
                            {house?.tags.map((tag) => (
                                <Tags name={tag} key={tag} />
                            ))}
                        </div>
                    </div>


                    <div className="host">
                        <div className="host__infos">
                            <p className="host__name">{house?.host.name}</p>
                            <img className="host__image" src={house?.host.picture} alt={house?.host.name} />
                        </div>

                        <div className="host__rating">
                            <Ratings rate={house?.rating} />
                        </div>
                    </div>
                </section>

                <section className="dropdowns">
                    <Dropdown type="equipements" name="Description" content={[house?.description]} />
                    <Dropdown type="equipements" name="Equipement" content={[house?.equipements]} />
                </section>
                </>
            )}

            <Footer />
        </div>
    )
}

export default Property;