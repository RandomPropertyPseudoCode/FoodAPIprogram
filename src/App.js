import './App.css'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Foodlist } from './components/Foodlist';
import { Calculate } from './components/Calculate';
import pic from './components/imgrec.webp'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to= '/' ><img src={pic} class="w-25"></img></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to= '/'>Home</Nav.Link>
      <Nav.Link  as={Link} to= '/about'>About</Nav.Link>
      <Nav.Link  as={Link} to= '/contact'>Contact</Nav.Link>
      <Nav.Link  as={Link} to= '/foodlist'>Food Fun Facts</Nav.Link>
      <Nav.Link  as={Link} to= '/calculate'>Calculate</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
<div>
<Routes>
<Route path ='/about' element ={<About/>}/>
<Route path ='/contact' element ={<Contact/>}/>
<Route path ='/' element ={<Home />}/>
<Route path ='/foodlist' element ={<Foodlist />}/>
<Route path ='/calculate' element ={<Calculate />}/>
</Routes>
</div>
    </div>
   </BrowserRouter>
  );
}

export default App;
