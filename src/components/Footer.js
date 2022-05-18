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
                Linkedin: https://www.linkedin.com/in/segni-teshome-5811b3217
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                Github: https://github.com/segnihabte
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                Instagram: https://www.instagram.com/__segni_/
              </Form.Text></Col>
            </Row>
            <Row>
              <Col><Form.Text className="text-muted">
                Facebook:segniThabte
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                gmail: segnih36@gmail.com
              </Form.Text></Col>
              <Col><Form.Text className="text-muted">
                <li>Telegram: https://t.me/segni47</li>
                
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