import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {

  const { loginWithRedirect,isAuthenticated , logout, user } = useAuth0()

  return (
    <Navbar expand="lg" className='bg-dark'  >
      <Container>
        <Navbar.Brand href="#home" className='text-white fw-bold fs-3'> <i>All in One Store</i> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  ">
             <Link className='Nav.Link p-2 text-white text-decoration-none' to="/">Home</Link>
             
          

          {

isAuthenticated && 

<li> <b>
<p className='text-primary  mx-3 align-items-center'>{user.name}</p>
</b></li>
}


          
          
           {
           isAuthenticated ? (

            <button  className='Nav.Link  text-white btn btn-success align-items-center rounded-pill  '  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>

           )

           :

           (

            <button className='Nav.Link  text-white btn btn-success align-items-center mx-2 rounded-pill  ' onClick={() => loginWithRedirect()}>Log In</button>
           

           )
           
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;