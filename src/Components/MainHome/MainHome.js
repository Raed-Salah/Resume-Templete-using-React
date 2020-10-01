import React, { Component } from 'react';
import Home from './../Home/HomeIndex';
import Portfolio from './../Portfolio/PortfolioIndex';
import Profile from './../Profile/ProfileIndex';
import Social from './../Social/SocialIndex';
import Work from './../Work/WorkIndex';
import Footer from './../Footer/FooterIndex';
import About from './../About/AboutIndex';

import './MainHome.css';

class MainHome extends Component{
    render(){
        return(
            <div>
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <Social />
                <Footer />
            </div>
        )
    }
}

export default MainHome;