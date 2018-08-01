import React, { Component } from 'react';
import '../App.css';
import githubLogo from '../images/github-logo.png'
import linkedinLogo from '../images/linkedin-logo.png'

class Footer extends Component {
    render(){
        function scroll() {
            const el = document.getElementById('main');
            el.scrollIntoView({behavior: 'smooth'});
        }
        return (
            <div className={'grid-container footer'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <a target={'_blank'} href={'https://github.com/marcinzelaskopl'}><img src={githubLogo} alt={''}/></a>
                        <a target={'_blank'} href={'https://www.linkedin.com/in/marcinzelaskov/'}><img src={linkedinLogo} alt={''}/></a>
                        <span onClick={scroll} className={'arrow-up'}>&#8593;</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer