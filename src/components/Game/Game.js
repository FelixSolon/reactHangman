import React, { Component } from 'react';
import WordDisplay from '../WordDisplay';
import './Game.css';
const wordList = ["test", "array", "plz", "ignore"]
const chosenWord = wordList[Math.floor(Math.random() * wordList.length)];


class Game extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <WordDisplay foo={chosenWord}/>
            </div>
        )
    }
}

export default Game;