import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
// import {  FiExternalLink } from 'react-icons/fi';
import logo from '../images/logo.jpg'



class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //ทำตอนเรียก Component
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

   
    render() {

        return (
            
            <div className="sidebar">
                  <h4>{this.state.date.toLocaleTimeString()}</h4>
               
                
                <img src={logo} />
                <h1><Link smooth to="/#start" className="h1_links">Nawaporn E.</Link></h1>
                <h3 classname="gmail"> Nawaporneam@gmail.com </h3>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                </ul>
               
            </div>
        )
    }
}

export default Sidebar