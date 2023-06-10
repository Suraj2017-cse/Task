import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    // navigate to the page
    const navigate = useNavigate();
    const handleHomeClick = () => {
    navigate('/')
    }

    const handleProductClick = () => {
    navigate('/products')
    }

     const handleAboutClick = () => {
    navigate('/about')
    }

     const handleContactClick = () => {
    navigate('/contact')
    }


return (
<>
    <Navbar bg="light" expand="md">
        <Container fluid>
            <Navbar.Brand className='text-uppercase'onClick={handleHomeClick}>litekart</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbarLabel-expand-md"
                placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" className='text-capitalize'>
                        menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>
                        <Nav.Link onClick={handleProductClick}>Product</Nav.Link>
                        <Nav.Link onClick={handleAboutClick}>About Us</Nav.Link>
                        <Nav.Link onClick={handleContactClick}>Contact Us</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
</>
);
}

export default Header;