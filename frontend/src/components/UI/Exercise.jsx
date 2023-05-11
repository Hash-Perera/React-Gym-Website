import React from "react";
import '../../styles/Exercise.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercises = ()=>{

    return(
        <section id="schedule">
            <div className="container exercise__container">
                <div className="exercise__top">
                    <h2 className="section__titile">
                        Benifits of <span className="highlights">Exercise</span>
                    </h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Illum quasi deserunt necessitatibus veniam suscipit dolor!</p>

                    
                </div>

                {/* ===========exercise list=============*/}
                <div className="exercise_wapper">
                    
                    <div className="exercise__item">
                        <span className="exercise__icon"><img src={lunges} alt="" /> </span>

                        <div className="exercise__content">
                            <h4>Healthy Life</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            
                        </div>
                    </div>

                    <div className="exercise__item">
                        <span className="exercise__icon"><img src={extended} alt="" /> </span>

                        <div className="exercise__content">
                            <h4>Increased Fleibility</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            
                        </div>
                    </div>

                    <div className="exercise__item">
                        <span className="exercise__icon"><img src={yoga} alt="" /> </span>

                        <div className="exercise__content">
                            <h4>Reducing Blood Presure</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            
                        </div>
                    </div>

                    
                </div>


            </div>
        </section>
    )
}

export default Exercises