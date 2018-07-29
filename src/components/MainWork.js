import React, { Component } from 'react';
import '../App.css';

class MainWork extends Component {
    render() {
        return (
            <div className={'grid-container mainWork'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <h5>MY WORK</h5>
                        <a target={'_blank'} href={'http://ugliest-quilt.surge.sh/'}><p className={'work-item'}>Simple webpage that shows my favourite books!</p></a>
                        <p className={'work-item'}>Short page made for my girlfriend, cause she loves Raccoons.</p>
                        <p className={'work-item'}>Page about my favourite League of Legends Champion, LeBlanc.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainWork