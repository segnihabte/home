import React from 'react'
import { Container, Card,Row,Col,CardGroup } from 'react-bootstrap'
import '../index.css'
import segni from './assets/Main.jpg'

function Home() {
  return (
    
    <div className='text'>
      <Container><h1 className='hello' data-text='Bienvenido'>Bienvenido
      </h1>
      </Container>
      <Row>
        <Col>
          <Container>
            <Card className="text-center1">
              <Card.Body>
                <Card.Title><h3>SEGNI TESHOME</h3></Card.Title>
                <Card.Text></Card.Text>
                <div className="vl" style={{borderBottom: '1px solid green',width: '30rem', 
                                position:'absolute', marginLeft:'0rem' }}></div>
                <muted> | relatable | enthusiastic | Educated | Friendly</muted><br/>
                <Card.Text>
                  
                  <strong>Age:</strong> 24 <br/>
                  <strong>Occupation:</strong> software engineer <br/>
                  <strong>Location:</strong> Addis ababa<br/>
                  <strong>Tier:</strong> Mid Tier<br/>
                  <strong>Education:</strong> Bachelors degree in computer science and enginering<br/>
                </Card.Text>                
              </Card.Body>
            </Card>
          </Container>
          <Col>
            <Container>
            <p style={{opacity:'5%', fontSize:'10rem', zIndex:'100', position:'absolute', color:'black',fontFamily:'Helvetica'}} className='overlay' data-text='welcome'>Skills</p>
              <Card className="text-center11">
              
                <Card.Body>
                <p style={{opacity:'5%', fontSize:'20rem', zIndex:'100', position:'absolute', color:'black', fontFamily:'Helvetica'}} className='overlay' data-text='Bienvenido'>work</p>
                  <Card.Text>
                    Out of the box thinker with ability and interest in practical working environment and experience in
                    Python. React, React-Django, Flutter,
                    And vanilla JavaScript. <br/>
                    With working experience in computer science projects and project management skills. Also good experience and agility in designing a minimalistic and attractive UI for web and mobile.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
          <p style={{fontFamily:'Helvetica', fontSize:'6rem'}}>stay tough</p>
          <CardGroup >
        <Card style={{backgroundColor:'#e0e3e0', color:'black'}}>
          <Card.Body>
            <Card.Text style={{fontSize:'1rem'}}>
              "Anyone who stops learning is old, whether at twenty or eighty. Anyone who stays learning is forever young"
              <strong>  -Henry Ford</strong>
            </Card.Text>
            
          </Card.Body>
        </Card>
      </CardGroup>
        </Col>
        <Col>
          <Container>
            <Card className="photo-holder">
              <Card.Img variant="top" src={segni} />
              <Card.Body >
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>

      <Card style={{ width: '70rem' }}>
        <Card.Body style={{ width: '70rem',height:'30rem', backgroundColor:'#393e35', borderRadius:'0.2rem' }}> 
        <p style={{opacity: '100%', fontSize: '1rem', zIndex: '100', position: 'absolute',fontFamily: 'SF', paddingLeft: '0rem', color:'white'}}className='overlay' data-text='Bienvenido'>
        <Row className='LastRow'>
        <Col><strong>Experience</strong><br/>
        <Container>
        Experience in designing front end Responsive UI for mobile and webapps with and without relevant frameworks<br/>
        Good Working skill in creating API based and Database backends<br/>
        attractive and interactive responsive react Front ends<br/>
        fullstack django and react webapps<br/>
        </Container>
        <strong>Personality</strong>
        <Container>
        Friendly to work with anyone <br/>
        enthusiastic to work on projects of any level and tier<br/>
        Innovative<br/>
        creative and  entrepreneurial mindset<br/>
        </Container>
        <strong>Education and Relevance</strong>
        <Container>
        Bachelors degree in computer science and engineering<br/>
        took my highschool education in addis ababa ethiopia<br/>
        </Container>
        
        </Col>
        <Col><strong>college experience</strong><br/>
        <Container>
          College has been educating and fun. the five years i spent in college have helped me find my self, what i want and
          better my self mentally. the self finding experience has been good and the education has made me love my field more. 
        </Container>
        <strong>works</strong><br/>
        <Container>
        REACT <br/>
        DJANGO <br/>
        HTML CSS <br/>
        UI/UX DESIGN <br/>
        GRAPHICS DESIGN <br/>
        PYTHON NETWORKING AND BACKEND <br/>
        REST AND RESFUL API <br/>
        FULLSTACK WEBSITES<br/>
        GIT AND GITHUB
        </Container>
        </Col>
      </Row>
           </p>
        </Card.Body>
      </Card>
      {/* /////////////////////////////////////////////////////// */}
      <Row>
        <Col></Col>
        <Col><p style={{fontFamily:'Helvetica', fontSize:'3rem'}}>Fast</p>
        <p style={{opacity:'40%', fontSize:'1rem', zIndex:'100', position:'absolute', color:'black',fontFamily:'Helvetica'}} className='overlay' data-text='welcome'>provide you with tmied and fast result </p>
        </Col>
        
      </Row>
      <Row>
        <Col></Col>
        <Col><p style={{fontFamily:'Helvetica', fontSize:'3rem'}}>Agile</p>
        <p style={{opacity:'40%', fontSize:'1rem', zIndex:'100', position:'absolute', color:'black',fontFamily:'Helvetica'}} className='overlay' data-text='welcome'>can quickly adopt to changing requirements and needs</p></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col><p style={{fontFamily:'Helvetica', fontSize:'3rem'}}>Reliable</p>
        <p style={{opacity:'40%', fontSize:'1rem', zIndex:'100', position:'absolute', color:'black',fontFamily:'Helvetica'}} className='overlay' data-text='welcome'>you can rely on my work and time to get the job done</p></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col><p style={{fontFamily:'Helvetica', fontSize:'3rem'}}>Clean
        <p style={{opacity:'40%', fontSize:'1rem', zIndex:'100', position:'absolute', color:'black',fontFamily:'Helvetica'}} className='overlay' data-text='welcome'>provide you with documented, formatted and organized code</p>
        </p>
        </Col>
      </Row>
    </div>

  )
}

export default Home
