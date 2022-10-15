import logoFooter from "../../assets/logo-white.svg";


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__img">
                <img src={logoFooter} alt="Logo Kasa" />
            </div>
            <p className="footer__copyright">© 2022 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;