import React, { Component } from 'react';
import '../index.css';
import logoImg from '../images/personalWebsiteLogo.png';

class Logo extends Component {
    render() {
        return(
            <div>
                <a href="/">
                    <img className="logo-img" src={logoImg} alt="logo" />
                </a>
            </div>
        );
    }
}

export default Logo;