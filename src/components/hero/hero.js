import Button from "../button/button";

function Hero({title, subtitle, ctaText, ctaSubText}) {
    return (
        <div className="hero">
            <div className="hero__container container">
                <div className="hero__text">
                    <h2 className="hero__title">
                        {title}
                    </h2>

                    <div className="hero__subtitle">
                        {subtitle}
                    </div>

                    <button href="https://google.com" className="hero__btn btn" size="large" color="White">
                        {ctaText}
                    </button>

                    <div className="hero__under-btn under-btn">
                       {ctaSubText}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;