import React from "react";
import logo from  "../../Assets/imagenes/top-logo.svg";
//import dataSlider from "./dataSlider";
import '../../Assets/styles/Styles.css'

export default function Header(){
{/*const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="header">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                         <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}/>
                    </div>
                )
            })}
            <div className="header__section">
                <img className="header__section--toplogo" src= {logo} alt="logo 25 watts" />
                <nav> 
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#product2">Product</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className = "home">
                <h1 className="h1">Sed ut perspiciatis <br />
                unde omnis iste natus
                </h1>
                <p className="subtitulo__h1">
                    Sed ut perspiciatis unde omnis iste natus error <br />
                    sit voluptatem accusantium doloremque.
                </p>
            </div>
            <button className="button">Read more</button>
            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}*/ }
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
