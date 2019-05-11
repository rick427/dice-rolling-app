import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render(){
        return (
            <div className="Die">
                <i className={`fas fa-dice-${this.props.face} ${this.props.isrolling ? "jiggleAnimation" : ""} `}/>
            </div>
        )
    }
}

export default Die;