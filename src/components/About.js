import { position } from 'dom-helpers'
import React from 'react'
import { Badge,Modal, Button, Card} from 'react-bootstrap'

export const About = () => {
  return (
    <div>
      <h1 class='m-4'>
    About Us <Badge bg="danger">New!</Badge>
  </h1>
  <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Who are we?</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>We are a group of humber students who love to code</p>
  </Modal.Body>
</Modal.Dialog>
<center>
<Card style={{ width: '18rem' }} class='m-4' className='cent'>
  <Card.Body>
    <Card.Title>Hafid Ali</Card.Title>
    <Card.Text>
    Resilient  worker and never stops till the job is done 
    </Card.Text>
  
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} class='m-4'>
  <Card.Body>
    <Card.Title>Luca Fusco</Card.Title>
    <Card.Text>
      A passsionate developer with a knack for using API
    </Card.Text>
  
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} class='m-4'>
  <Card.Body>
    <Card.Title>Jason Ng</Card.Title>
    <Card.Text>
      Brilliant designer and master team lead
    </Card.Text>
  
  </Card.Body>
</Card>
</center>
    </div>
    )}
