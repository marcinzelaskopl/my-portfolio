import React, { Component } from 'react';
import '../App.css';
import AboutEmail from "./AboutEmail";
import AboutSkills from "./AboutSkills";

class About extends Component {
    render(){
        function scroll() {
            const el = document.getElementById('aboutEmail');
            el.scrollIntoView({behavior: 'smooth'});
        }
        return (
            <div>
            <div id={'about'} className={'grid-container about'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h1>ABOUT</h1>
                        <h2>MARCIN ZELASKO</h2>
                        <h5>WROCLAW, POLAND</h5>
                        <p>Hello. Great that you are on my site!</p>
                        <p>I'm Marcin, self-taught developer. I started coding last year and I loved it from the beginning.</p>
                        <p>I also finished React Javascript Developer Bootcamp some time ago. </p>
                        <p>Currently I'm looking for a job, as a Junior Frontend Developer.</p>
                        <div onClick={scroll} className={'arrow'}>&#8595;</div>
                    </div>
                </div>
            </div>
                <AboutEmail/>
                <AboutSkills/>
            </div>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default About