const Banner = ({image, title, alt}) => {
    return (
        <div className="banner">
            <h1 className="banner__title">{title}</h1>
            <img className="banner__image" src={image} alt={alt} />
        </div>
    )
}

export default Banner;