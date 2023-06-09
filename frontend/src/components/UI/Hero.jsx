import React from "react";
import heroImg from "../../assets/img/gym-02.png"
import dumbleIcon from "../../assets/img/dumble.png"
import '../../styles/Hero.css'

const Hero = ()=>{

    return <section id="home">
        <div className="container">
            <div className="hero__wrapper">

                {/*=============== hero content ===========*/}
                <div className="hero__content">
                    <h2 className="section__title">Exersize is he key to a <span className="highlights">Healthy</span> Lifestyle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
                        Laudantium ducimus placeat nesciunt sit, enim libero.</p>

                        <div className="hero__btns">
                            <div className="register__btn">Get Started</div>
                            <button className="watch__btn"><span><i class="ri-play-line"></i></span>Watch Vidio</button>
                        </div>
                </div>


                {/*=============== hero image ===========*/}
                <div className="hero__img">
                    <div className="hero__img__wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src={heroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heart__rate">
                            <h5>Heart Rate</h5>
                            <span><i class="ri-heart-pulse-fill"></i></span>
                            <h6>2567 BPM</h6>
                        </div>

                        <div className="gym__location">
                            <span><i class="ri-map-pin-2-fill"></i></span>
                            <h5>Find a new gym <br />near you</h5>
                        </div>

                        <div className="dumble__icon">
                            <img src={dumbleIcon} alt="" />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>
}

export default Hero