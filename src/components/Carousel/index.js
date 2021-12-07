import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './carousel.scss';

function Carousel() {
    return (
      <>
      <Carousel>
                <Carousel.Item className="mx-4 " >
                    <Row >
                        <Col>
                            <Link to="/">
                                <img src="https://bit.ly/3y1V5nG" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item >
                    <Row>
                        <Col>
                            <Link to="/">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/">
                                <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" className="imagem" alt="asdasd" />
                            </Link>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
         </>
    )
}

export default Carousel;