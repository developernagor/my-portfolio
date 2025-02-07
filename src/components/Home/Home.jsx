import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

function Home() {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
}

export default Home;