import React, { Component } from 'react';
import '../App.css';
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

class Nav extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 nav'}>
                        <ul>
                            <li className={'strike'}>HOME</li>
                            <li className={'strike'}>WORK</li>
                            <li className={'strike'}>ABOUT</li>
                            <li className={'strike'}>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav