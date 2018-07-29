import React, { Component } from 'react';
import '../App.css';

class MainAbout extends Component {
    render(){
        return (
            <div id={'mainAbout'} className={'grid-container mainAbout'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h6>ABOUT ME</h6>
                        <p>Hi, I'm Marcin, wannabe dev from Wrocław, Poland.</p>
                        <p>I love coding, design and video games!</p>
                        <div className={'more'}>
                        <p>LEARN MORE <span>&#8594;</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainAbout