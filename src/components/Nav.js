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
                            <Link to='/' className={'strike'}>HOME</Link>
                            <Link to='/about' className={'strike'}>ABOUT</Link>
                            <Link to='/contact' className={'strike'}>CONTACT</Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav