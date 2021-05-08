import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p className={classes.AboutDetail}> My name is Nawaporn Eamsaard I'm Graduated with a Bachelor's Degree in Software Engineer, Burapha University. Work experience 1.9 year in development Windows And Web Application (C# .Net). I've always enjoyed exploring new technologies, now I'm interested in developing Web Applications in my core skills, starting over with React.</p>
                        {/* <p className={classes.br}>I've always enjoyed exploring new technologies, now I'm interested in developing Web Applications in my core skills, starting over with React.
                        </p> */}
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;