import { Navbar, Container, Carousel } from 'react-bootstrap';
import './footer.scss';

function Footer() {
    return (
      <>
          <Container>
          <Navbar fixed="bottom" expand="lg" variant="white" bg="dark">
          <Container>
          <Navbar.Brand href="#">Projeto de um e-commerce de eletrônicos desenvolvido em React e Bootstrap com ♥ pelos alunos do Certified Tech Developer by Digital House.</Navbar.Brand>
          </Container>
          </Navbar>
          </Container>
      </>
    )
}

export default Footer;