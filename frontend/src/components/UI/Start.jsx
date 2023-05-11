import React from "react";
import '../../styles/Start.css'
import trainerImg from '../../assets/img/trainer.png'

const Start =  ()=>{

    return <section id="classes">
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg}/>
                </div>

                <div className="start__content">
                    <h2 className="section__titile">
                        Ready to make a <span className="highlights">change ?</span>
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi amet ad ab excepturi, hic libero vel sunt corrupti, eos voluptatem debitis autem odit! Debitis tempore maiores cum ab velit!</p>

                    <button className="register__btn">Get Started</button>

                </div>
            </div>
        </div>
    </section>
}

export default Start