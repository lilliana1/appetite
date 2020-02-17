import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Lilliana Ramos',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/About'},
        { title: 'Contact', path: '/Contact'},
      ],
      home: {
        title: 'Full Stack Web Developer & Information Technology',
        subTitle: 'Portfolio'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }
  render() {
    return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Lilliana Ramos</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>

          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} /> } />
        <Route path="/about" render={() => <About title={this.state.about.title} /> } />
        <Route path="/contact" render={() => <Contact title={this.state.contact.title} /> } />

        <Footer/>
      </Container>
    </Router>
  );
  }
  
}

export default App;
