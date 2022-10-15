import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import Footer from "../components/Footer/Footer";
import { housing } from "../data/housing";
import bannerHome from "../assets/banner_home.png";

const Home = () => {
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Banner image={bannerHome} alt="Paysage de montagne" title="Chez vous, partout et ailleurs" />
                <div className="gallery">
                    {housing.map((housing) => (
                        <Thumbnail key={housing.id} link={`/property/${housing.id}`} title={housing.title} cover={housing.cover} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;