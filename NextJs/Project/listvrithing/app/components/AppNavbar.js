import {
    Navbar,
    Nav,
    Container,
    Row,
    Col
} from 'react-bootstrap';

const AppNavbar = () => {
    return (  
        <Navbar expand="md" variant="light" bg="light">
            <Container>
                <Row className="w-100 align-items-center">
                    <Col>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    </Col>
                    <Col lg="auto" className="align-items-center justify-content-end">
                        <Nav className="d-inline-flex">
                            <Nav.Item>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/list">List Todo</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
 
export default AppNavbar;