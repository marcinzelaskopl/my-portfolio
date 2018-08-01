import React, { Component } from 'react';
import '../App.css';
import Slide from 'react-reveal/Slide';
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'


class MainWork extends Component {
    render() {
        return (
            <div className={'grid-container mainWork'}>
                <div className={'row'}>
                    <Slide right>
                    <div className={'col-12'}>
                        <h5>MY WORK</h5>
                        <a target={'_blank'} href={'http://ugliest-quilt.surge.sh/'}><p className={'work-item'}>Simple webpage that shows my favourite books!</p></a>
                        <a target={'_blank'} href={'http://rural-pigs.surge.sh/'}><p className={'work-item'}>Short page made for my girlfriend, cause she loves Raccoons.</p></a>
                        <a target={'_blank'} href={'http://abusive-push.surge.sh/'}><p className={'work-item'}>Page about my favourite League of Legends Champion, LeBlanc.</p></a>
                    </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default MainWork