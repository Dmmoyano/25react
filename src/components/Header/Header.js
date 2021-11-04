import React from "react";
import Styles from "../../Assets/styles/Styles.css";
import logo from  "../../Assets/imagenes/top-logo.svg";

export default function Header(){
    return(
        
        <header className="header">
        <section className="header__section">
          <img className="header__section--toplogo" src={logo} alt="logo 25 watts" />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact"> Contact</a></li> 
                </ul> 
            </nav> 
        </section>
            <section id="home">
            <h1 className="h1">Sed ut perspiciatis<br/> unde omnis iste natus</h1>
            <p className="subtitulo__h1">
              Sed ut perspiciatis unde omnis iste natus error <br/>
              sit voluptatem accusantium doloremque.
            </p>
            <button className="button">
                Read More
            </button>
        </section>
    </header>
    );
}
