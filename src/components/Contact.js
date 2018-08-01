import React, { Component } from 'react';
import '../App.css';
import githubLogo from '../images/github-logo.png'
import linkedinLogo from '../images/linkedin-logo.png'

class Contact extends Component {
    render(){
        return (
            <div className={'grid-container contact'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h3>SAY HI</h3>
                        <h1><a href={'mailto:marcinzelaskov@gmail.com'}>marcinzelaskov@gmail.com</a></h1>
                        <p>If you are interested in hiring me.</p>
                        <p>Or you just wanna talk :)</p>
                        <h3 className={'contact-info'}>YOU CAN FIND ME ON</h3>
                        <a target={'_blank'} href={'https://github.com/marcinzelaskopl'}><img src={githubLogo} alt={''}/></a>
                        <a target={'_blank'} href={'https://www.linkedin.com/in/marcinzelaskov/'}><img src={linkedinLogo} alt={''}/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact