import React from 'react';
import './PlayerScreen.css';

function PlayerScreen(props) {
    return(
        <div className="playerBox">
            <h2>props.question</h2>
            <ul>
                <li>props.ans1</li>
                <li>props.ans2</li>
                <li>props.ans3</li>
                <li>props.ans4</li>
            </ul>
        </div>
    )
} 

export default PlayerScreen;