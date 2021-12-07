/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, Carousel, Col, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.scss';


function Home() {
    return (
        <>
            {/* Nome da página */}
            <Helmet>
                <title>CTD Commerce | Home</title>
            </Helmet>

            {/* Navbar */}
            <header className="sticky-top">
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/">CTD Commerce</Navbar.Brand>
                        <Nav className="me-auto">                            
                            <Nav.Link href="/produtos">Produtos</Nav.Link>
                            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
                            <Nav.Link href="#footer.container">Sobre nós</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>


        
        </>
    )
}

export default Home;