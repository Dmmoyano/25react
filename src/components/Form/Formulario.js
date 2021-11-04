import React from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";


export default function Formulario(){
    return(
 <div>
   <Form>
    <Form.Control type="text" placeholder="Normal text" />
    <br/>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Control size="lg" type="text" placeholder="Large text" />
    <br/>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
   </Form>
   </div>
    );
}