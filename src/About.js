import React from 'react';
import AboutImage from './img/about.JPG';

export default function About() {
    return (
        <div className='about' id='about'>
            <h1>About</h1>
            <img className='about-image' src={AboutImage} alt="Jared Tjahjadi" />
            <div id="about-text">
                My name is Jared Tjahjadi. I am an undergraduate student from Queens, NY, currently studying Computer Science at Stony Brook University.<br />
                In my free time, I enjoy listening to music, going to the gym, and taking walks.
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}