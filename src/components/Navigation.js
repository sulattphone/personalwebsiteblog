import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import navIconImg from '../images/navIcon.png';
import navCloseIcon from '../images/navCloseIcon.png';
import '../index.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }

    openMenu() {
        var side = document.getElementById("sideBar");
        side.classList.remove("sideNavHide");
        var navIcon = document.getElementById("navIconClick");
        navIcon.classList.add("display-none");
        this.setState({menuOpen: true});
    }

    closeMenu() {
        var side = document.getElementById("sideBar");
        side.classList.add("sideNavHide");
        var navIcon = document.getElementById("navIconClick");
        navIcon.classList.remove("display-none");
        this.setState({menuOpen: false});
    }

    toggleMenu() {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    render() {
        return(
            <div>
                <img className="navIcon" id="navIconClick" src={navIconImg} onClick={this.openMenu} />
                <div className="sideNav sideNavHide" id="sideBar">
                    <img className="navCloseIcon" src={navCloseIcon} onClick={this.closeMenu} />
                    <div className="navItemsDiv">
                        <ul className="navItemsList">
                            <NavLink to='/' className="menu-item" onClick={this.closeMenu}>
                                <li  className="menu-item">Home</li>
                            </NavLink>
                            <NavLink to='/about' className="menu-item" onClick={this.closeMenu}>
                                <li  className="menu-item">About</li>
                            </NavLink>
                            <NavLink to='/experiences' className="menu-item" onClick={this.closeMenu}>
                                <li  className="menu-item">Experiences</li>
                            </NavLink>
                            <NavLink to='/projects' className="menu-item" onClick={this.closeMenu}>
                                <li  className="menu-item">Projects</li>
                            </NavLink>
                            <NavLink to='/blog' className="menu-item" onClick={this.closeMenu}>
                                <li  className="menu-item">Blog</li>
                            </NavLink>
                            
                        </ul>
                    </div>
                </div>
            </div>

        );
        
    }
}

export default Navigation;