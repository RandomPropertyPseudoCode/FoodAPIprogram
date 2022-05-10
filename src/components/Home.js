import React from 'react'
import { Card, CardGroup,Alert, } from 'react-bootstrap'
import watermelon from './watermelon.gif'
import runner from './wegotarunner.gif'
import info from './informed .gif'
export const Home = () => {

  return (

        <div class="FHHFHFHF"> 
             <div class="container-fluid  " >
    <div class="row flex-nowrap bg-dark text-white"   >
        <div class="col-auto px-0 m-4">
            <div id="sidebar" class=" collapse collapse-horizontal show border-end"  >
                <div id="sidebar-nav" class="list-group border-50 rounded-300 text-sm-start min-vh-100 margin:50px ">
                    <a href="./Contact" class="list-group-item border-end-200 d-inline-block text-truncate t bg-dark text-white  " data-bs-parent="#sidebar" ><i class="bi bi-bootstrap "></i>
                     <span>Contact</span> </a>
                    <a href="./About" class=" list-group-item border-end-50 d-inline-block text-truncate  bg-dark text-white " data-bs-parent="#sidebar"><i class="bi bi-film"></i>
                     <span>About Us!</span></a>
                    <a href="./Foodlist" class="list-group-item border-end-50 d-inline-block text-truncate  bg-dark text-white" data-bs-parent="#sidebar"><i class="bi bi-heart"></i> 
                    <span>Food Fun Facts</span></a>
                    <a href="./Calculate" class="list-group-item border-end-50 d-inline-block text-truncate " data-bs-parent="#sidebar"><i class="bi bi-bricks"></i>
                     <span>Calculate</span></a>
                    </div>
            </div>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class="page-header pt-3">
                <h2>World Cookbook! </h2>
            </div>
            <p class="lead">The best food book in the world.</p>
            <br/>
            <div class="row">
                <div className="part1">
     <p>Here you will find recipes from different regions of the world,
      this will include food and drinks as-well as snacks from various cultures as-well as
      cooking and serving guides for how each dish is prepared by the people who live there thus giving you the closest approximation for what it would be like to be in a whole different country enjoying a new dish
      exactly how the locals would have prepared it.</p>
      <ul>
      <header>What we provide: </header>
     <li>Find what you love to eat</li>
     <li>Practice your cooking skills</li>
     <li>Manage your calorie intake</li>
     </ul>
      <Alert variant="warning" className='alert'>
  <Alert.Heading>ALERT! </Alert.Heading>
  <p>
   We are using a free API so please bring a spare key just in case
  </p>
  <hr />
  <p className="mb-0">
    We hope you enjoy our site :)  
  </p>
  
</Alert>
                </div>
            </div>
        </main>
    </div>
</div>
<Card className='bg-dark'>
  <Card.Body className='text-muted'>What do we do here?</Card.Body>
</Card>
       
        <CardGroup className= 'cards' class=" d-flex  position-absolute top-30 start-20 translate-left text-white  "  >
 <br/>
  <Card class='   '>
    <Card.Img variant="top" src={info}  className='cardimg'/>
    <Card.Body  class=' bg-dark'>
      <Card.Title>Stay informed</Card.Title>
      <Card.Text>
        There is alot of bad health infromation out there and guru's ready to shill the newest "miracle".
        We here at World Cookbook™ have your back with factual infromation! 
      </Card.Text>
    </Card.Body >
    <Card.Footer class='bg-secondary '>
      <small className="text-light">My IQ test results just came in and I'm really relieved. Oh Thank God it's negative...</small>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top" src={runner}  className='cardimg'/>
    <Card.Body  class=' bg-dark'>
      <Card.Title>Stay fit</Card.Title>
      <Card.Text>
        Eating well is the first step to being well. Just like the coding saying "Garbage in garbage out" , 
        we believe in putting the best you forward.
      </Card.Text>
    </Card.Body >
    <Card.Footer class='bg-secondary '>
      <small className="text-light">Good health is merely the slowest possible rate at which one can die.</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src= {watermelon}  className='cardimg'/>
    <Card.Body  class=' bg-dark'>
      <Card.Title>Stay healthy</Card.Title>
      <Card.Text>
        It can be hard to stay healthy but with our food list you can see the foods you should be eating 
        and the ones you should have been staying away from. 
      </Card.Text>
    </Card.Body>
    <Card.Footer class='bg-secondary '>
      <small className="text-light">Doctor: Your body has run out of magnesium. <br/>Patient: 0mg!</small>
    </Card.Footer>
  </Card>
</CardGroup>
 </div>
 
   
  );
}
