import React from "react";
import {Container, Form} from "react-bootstrap";
import {Button} from "react-bootstrap";


export default function Formulario(){
    return(
    /*  <Container>
  <section id="contact" className="contact">
    <div>
    <h2 id="h2__contact">Get in Touch <br/> <b> we are Hiring </b></h2>
   </div>
    <div className="contenedor3"></div>
    <div className="imagen__contact" ></div>
    <Form className= "contenedor__contact">
    <Form.Control type="text" placeholder="Normal text" />
    <br/>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Control size="lg" type="text" placeholder="Large text" />
    <br/>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
   </Form>
   </section>
   </Container>*/  <div id="contact" className="contact">
     <div className="contenedor3"></div>
      <div className="imagen__contact">
      </div>
      <div id="h2_contact"> 
        <h2>Get in touch <br/><b>We are hiring!</b></h2>
      </div>
      <div className="contenedor__contact">
        <Form>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter Number Phone" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div> 
      <button className="button_contact">Send</button>
    </div>
   
    );
}