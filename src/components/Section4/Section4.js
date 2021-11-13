import React from "react";
import { Container } from "react-bootstrap";
import '../../Assets/styles/Styles.css'
import { Accordion } from "react-bootstrap";


export default function Section4(){
  return(
    <Container>
      <section class="services" id="services">
        <div class="imagen_acordeon"></div>
         <div id="acordeon">
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Sed ut perspiciatis</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br/> 
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br/>
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita <br/>
    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Ut enim ad minima veniam</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Sit amet, consectetur, adipisci</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>
    </section>
        </Container>

    )
}