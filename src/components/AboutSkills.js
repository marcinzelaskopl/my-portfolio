import React, { Component } from 'react';
import '../App.css';

class AboutSkills extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'none',
            display1: 'block',
            display2: 'none',
            display22: 'block'
        }
    }
    handleMouseEnter = (event) => {
        this.setState({
            display: 'block',
            display1: 'none'
        });
    };
    handleMouseLeave  = (event) => {
        this.setState({
            display: 'none',
            display1: 'block'
        })
    };
    handleMouseEnter2 = (event) => {
        this.setState({
            display2: 'block',
            display22: 'none'
        });
    };
    handleMouseLeave2  = (event) => {
        this.setState({
            display2: 'none',
            display22: 'block'
        })
    };
    render(){
        function scroll() {
            const el = document.getElementById('about');
            el.scrollIntoView({behavior: 'smooth'});
        }
        return (
            <div id={'aboutSkills'} className={'grid-container aboutSkills'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h1>Technologies that I know</h1>
                        <ul>
                            <li onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}><span style={{display: this.state.display}}>Confident</span><span style={{display: this.state.display1}}>HTML/CSS</span></li>
                            <li onMouseLeave={this.handleMouseLeave2} onMouseEnter={this.handleMouseEnter2}><span style={{display: this.state.display2}}>Good</span><span style={{display: this.state.display22}}>JavaScript</span></li>
                            <li>jQuery</li>
                            <li>React.js</li>
                            <li>Bootstrap</li>
                            <li>GIT</li>
                        </ul>
                        <div onClick={scroll} className={'arrow'}>&#8593;</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutSkills