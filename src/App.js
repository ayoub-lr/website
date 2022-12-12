import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Index from './component/Index'
import Contact  from './component/Contact';
import Nav from './component/Nav'
import Footer from './component/Footer'

class App extends Component{
  render(){
  return (
    <div className="App">
    <BrowserRouter>
            <Nav />
            <Routes>
            <Route exact path="/" element={<Index/>} />
            <Route path="/Contact" element={<Contact/>} />
            </Routes>
            <Footer />
           
    </BrowserRouter>
  </div>
  );
}
}

export default App;
