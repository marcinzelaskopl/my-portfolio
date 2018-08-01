import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'


class MainAbout extends Component {
    render(){
        return (
            <div id={'mainAbout'} className={'grid-container mainAbout'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <Slide left>
                        <h6>ABOUT ME</h6>
                        <p>Hi, I'm Marcin, wannabe dev from Wrocław, Poland.</p>
                        <p>I love coding, design and video games!</p>
                        <div className={'more'}>
                        <p><Link to='/about'>LEARN MORE <span>&#8594;</span></Link></p>
                        </div>
                        </Slide>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainAbout