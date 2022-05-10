import React from 'react'
import {useState} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import contactUs from './contactUs.jpg';

export const Contact = () => {
  const [fname, fname2] = useState('');
  const [lname, lname2] = useState('');
  const [email, email2] = useState('');

  function Button1() {
    return alert("Thank You " + [fname] + " " + [lname] + " We Will Contact you back shortly at: " + [email] + " You will now be redirected to the home page.")
  }

  function EnteredName(event) {
    fname2(event.target.value);
  }
  function EnteredLName(event) {
    lname2(event.target.value);
  }
  function EnteredEmail(event) {
    email2(event.target.value);
  }
  return (
    <div>
      <Container>
        <form style={{ border: "2px solid black", width: "45%", backgroundColor: 'gray', textAlign: "center", margin: "auto", align: "center" }}>
          <Row> <Col style={{ color: 'darkblue' }}><img src={contactUs} width='80' height='80'></img></Col></Row>
          <Row><Col style={{ color: "darkblue", fontWeight: 'bold' }}>First Name <br></br><input type='text' onChange={EnteredName}></input></Col></Row> <br></br>
          <Row> <Col style={{ color: "darkblue", fontWeight: 'bold' }}>Last Name <br></br><input type='text' onChange={EnteredLName}></input> </Col></Row><br></br>
          <Row><Col style={{ color: "darkblue", fontWeight: 'bold' }}>Email <br></br><input type='email' onChange={EnteredEmail}></input></Col></Row> <br></br>
          <Row><Col style={{ color: "darkblue", fontWeight: 'bold' }}>Please state the reason below for why you wish to contact us </Col></Row><br></br>
          <textarea ></textarea> <br></br>
          <LinkContainer to="/"><span><Button onClick={Button1}>Submit</Button></span></LinkContainer>
        </form>
      </Container>
    </div>
  )
}
