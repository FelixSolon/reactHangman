import React, { Component } from 'react';
import './WordDisplay.css';

class WordDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render(props) {
    return (
            <div>
                {this.props.foo.map((item, i)=>{
                    return (item + " ");
                    })
                }   
            </div>
        )
    }
}

export default WordDisplay;