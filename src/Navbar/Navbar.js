import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget';



//navbar//
function Navbar () {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <h1 className='logo'>RP</h1>
      <img src={logo} width="60" alt="logo"/>
      <Nav.Item as="li">
        <Nav.Link href="/home">Buscar</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Farmacos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
  <CartWidget/>
    </Nav>
  );
}

export default Navbar

