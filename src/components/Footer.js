import React from 'react'
import {Container,Row, Col, Card, Button, Form} from 'react-bootstrap'
import '../index.css'

function Footer() {
  return (
    <footer style={{  backgroundColor: '#e0e3e0'
    }}>
      <Container>
        <Row>
          <Container>
            <Row>
              <Col><Form.Text className="text-muted">
                Linkedin
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                Github
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                Instagram
              </Form.Text></Col>
            </Row>
            <Row>
              <Col><Form.Text className="text-muted">
                Facebook
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                gmail
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                Telegram
              </Form.Text></Col>
            </Row>
        </Container>
        <Form.Text className="text-muted2">
          This portofolio website was created using REACT framework
            </Form.Text>
        </Row>
      </Container> 
      <Col className='text-center py-3'>Copyright &copy; Segni </Col>
    </footer>)
}

export default Footer