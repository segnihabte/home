// css and external imports
import './App.css';
import './index.css'

// module import
import { Container } from 'react-bootstrap';
import {HashRouter as Router, Route,Routes } from 'react-router-dom'

// file import
import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <Header/>
    <div className="vl" style={{borderLeft: '5px solid green',height: '123rem', position:'absolute', marginLeft:'3rem'}}></div>
    <Container style={{overflow:'hidden',minSize:'min-content'}}>
      <p style={{opacity: '20%', fontSize: '10rem', zIndex: '100', 
    position: 'absolute',fontFamily: 'Helvetica', paddingLeft: '0.5vw', color:'#053621'
    ,wordWrap:'break-word'
}}
    className='overlay' data-text='Bienvenido'>WELCOME</p></Container>
    <main>
      <Container>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<works />}></Route>
        <Route path="/contact" element={<contact />}></Route>
        <Route path="/services" element={<services />}></Route>
        </Routes>
      </Container>
    </main>
    {/* <div className="vl" style={{borderBottom: '5px solid green',width: '74rem', position:'absolute', marginLeft:'3rem'}}></div> */}
    <Footer />
  </Router>  
  );
}

export default App;
