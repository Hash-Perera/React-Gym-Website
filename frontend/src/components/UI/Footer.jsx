import React from "react";
import '../../styles/Footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = ()=>{

    const year = new Date().getFullYear()

    return <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__box">

                    <div className="logo">
                    <div className="logo__img"> <img src={logo} alt=""></img> </div>
                    <h2>FitBody</h2>
                </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error voluptas ducimus quis velit ut. Veniam.</p>

                </div>

                <div className="footer__box">
                    <h4 className="footer__titile">Company</h4>

                    <ul className="footer__links">
                        <li><a href="#">Our Program</a></li>
                        <li><a href="#">Our Plan</a></li>
                        <li><a href="#">Become a member</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__titile">Quick Links</h4>

                    <ul className="footer__links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>


                <div className="footer__box">
                    <h4 className="footer__titile">Company</h4>

                    <ul className="footer__links">
                        <li><a href="#">Our Program</a></li>
                        <li><a href="#">Our Plan</a></li>
                        <li><a href="#">Become a member</a></li>
                    </ul>
                </div>

            </div>

            <p className="copyrights">Copyrights - {year} developed by Hash. All right recieved</p>
        </div>
    </footer>
}

export default Footer