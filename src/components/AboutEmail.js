import React, { Component } from 'react';
import '../App.css';

class AboutEmail extends Component {
    render(){
        function scroll() {
            const el = document.getElementById('aboutSkills');
            el.scrollIntoView({behavior: 'smooth'});
        }
        return (
            <div id={'aboutEmail'} className={'grid-container aboutEmail'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h3>Contact Me</h3>
                        <h1><a href={'mailto:marcinzelaskov@gmail.com'}>marcinzelaskov@gmail.com</a></h1>
                        <h1>If you are interested in hiring me.</h1>
                        <h1>Or you just wanna talk :)</h1>
                        <div onClick={scroll} className={'arrow'}>&#8595;</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutEmail