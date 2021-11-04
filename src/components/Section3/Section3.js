import React from "react";
import logo2 from "../../Assets/imagenes/Icon feather-arrow-left-circle.png";
import logo3 from "../../Assets/imagenes/Icon feather-arrow-right-circle.png"; 


export default function Section3() {
    return(
        <section id="products" class="seccion3">
        <div class="contenedor2"></div>
        <div class="imgcabaña"></div>
            <div class="recuadronaranja">
            <p class="pchico">Sed ut perspiciatis</p>
            <h2 class="tituloh2">Nemo Enim</h2>
            <p class="pgrande">Sed ut perspiciatis unde omnis iste natus error sit <br/>
               voluptatem accusantium doloremque laudantium, <br/> totam rem aperiam.</p>
            <div id="flechas">  
              <img className="imgflechaizq" src={logo2} alt="flechaizq"/>
              <img className="imgflechader" src= {logo3} alt="flechader"/>
            </div>
          </div>
        </section>
        );
}