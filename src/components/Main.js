import React, { Component } from 'react';
import '../App.css';
import MainAbout from "./MainAbout";
import MainWork from "./MainWork";

class Main extends Component {
    render(){
        function scroll() {
            const el = document.getElementById('mainAbout');
            el.scrollIntoView({behavior: 'smooth'});
        }
        return (
            <div>
            <div className={'grid-container main'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <p>My Portfolio</p>
                        <h1 className={'typewriter'}>Hi, I'm Marcin, Aspiring Web Developer</h1>
                        <div onClick={scroll} className={'arrow'}>&#8595;</div>
                    </div>
                </div>
            </div>
                <MainAbout/>
                <MainWork/>
            </div>
        )
    }
}

export default Main