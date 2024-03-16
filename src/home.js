import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import ft from './img.png'
import { FaLock } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import icones from './icones.png'
import { IoPeople } from "react-icons/io5";
import { BsChat } from "react-icons/bs";


function Home() {
  return (
    <Container fluid>
        <Row className='all '>
            <Col className=' d-flex align-items-center justify-content-space-between barraMsg'>
                <IoMdContact size={50} style={{ color:'grey'}}/>
                <Row className='icons'md={12}>
                    <img className='img-icones' src={icones}/>
                </Row>
                <Row md={12}>
                    <h1></h1>
                </Row>
            </Col>
            <Col className='imgInicial d-flex justify-content-center'md={9}>
                <Row className=' logo d-flex justify-content-center align-items-center' >
                    <Col className='img 'md={12}> 
                        <img src={ft}/>
                    </Col>
                    <Col className='img ' md={12}>
                        <h6 className='letras display-6 titulo'>Baixar o WhatsApp para o Windowns</h6>
                    </Col>
                    <Col className='img ' md={12}>
                        <h6 className='letras text-center'style={{ opacity: 0.5 }}>Baixe o novo app para Windowns para fazer ligações,
                         usar o compartilhamento de tela e ter uma esperiência de uso mais rápida</h6>
                    </Col>
                    <Col className='img' md={12}>
                        <button className='btn'>Baixar o app</button>
                    </Col>
                    <Col className='img textoBaixo' md={12}>
                        <FaLock style={{ opacity: 0.5 }} className='cadeado'/>
                        <h6 className='letras'style={{ opacity: 0.5 }}>Suas mensagens pessoais são protegidas
                            com criptografia de ponta a ponta.
                        </h6>
                    </Col>

                </Row>
            </Col>

        </Row>
    </Container>
  );
}

export default Home;