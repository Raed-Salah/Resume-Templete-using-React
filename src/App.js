import React, { Component }  from 'react';
import Navbar from './Components/Navbar/NavbarIndex';
import MainHome from './Components/MainHome/MainHome';
import Contact from './Components/Contact/ContactIndex';
import {BrowserRouter ,Route} from 'react-router-dom';
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={MainHome}></Route>
        <Route path="/Contact" component={Contact}></Route>
      </BrowserRouter>
    )
  }
}
export default App;
