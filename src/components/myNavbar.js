import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavBar=()=>
{
    return (
        <Navbar collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand href="/">Sliver Of Wren</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="chatroom">Chatroom</Nav.Link>
                    <Nav.Link href="code">Site-Code</Nav.Link>
                    <NavDropdown title="Slivers" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="code">Coding</NavDropdown.Item>
                    <NavDropdown.Item href="painting">Painting</NavDropdown.Item>
                    <NavDropdown.Item href="making">Making</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="others">Others</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>Coming Soon</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default MyNavBar;