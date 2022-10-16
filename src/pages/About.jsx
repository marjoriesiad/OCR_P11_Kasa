import React from "react";
import Header from "../components/Header/Header";
import bannerAbout from "../assets/banner_about.png";
import Banner from "../components/Banner/Banner";
import {about} from "../data/about";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";

const About = () => {
    return (
        <>
            <Header />
            <main>
                <Banner image={bannerAbout} type="About" />
                <section className="about">
                    {about.map(({name, content}) => (
                        <Dropdown key={content} name={name} content={[content]} />
                    ))}
                </section>
            </main>

            <Footer />
        </>
    )
}

export default About;