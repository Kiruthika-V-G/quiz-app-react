import React from "react";
import './Score.css';
function Score({score}){
    return(
        <div className="scoreStyle">
            <div className="scoreContainer">
                <h2>Results</h2>
                <h4>Your score is {score}!</h4>
            </div>
        </div>
    )
}

export default Score;