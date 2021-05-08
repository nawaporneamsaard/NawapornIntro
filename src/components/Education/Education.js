import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdGrade, MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';



class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>MY CARREER PATH</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Higher Education  <span>2012-2015</span></h2>
                                                <p>I have completed my higher education from the demonstration school of thepsatri rajabhat university with major subjects as Math & Sci</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                       <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Undergraduation at Burapha <span>2015-2018</span></h2>
                                                <p>I'm currently completing my undergraduation in  <a href='https://www.informatics.buu.ac.th/2020/?page_id=181' target="_blank">Software Engineer from Burapha University</a>. </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <MdGrade></MdGrade>
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Internship</h2>
                                                <p>Completed six month Internship in Windows Application and Web service in Smart Reception project with C.S.I Groups</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdWork />     
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Software Delveloper in C.S.I Groups <span>2019-2021</span></h2>
                                                    <p>I'm got work in <a href='https://www.csigroups.com/th/profile/' target="_blank">C.S.I Groups</a>. I have worked in factory software development with Mitsubishi Motor, Ajinomoto, Siam Denso, MK Restaurants and Siam Makro for about 7 projects, both Windows Application and Web Application.</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;
