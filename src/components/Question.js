import React from "react";
import Options from "./Options";
import './Question.css';
function Question({question,selectedOption,onOptionChange,submit}){
    return(
        <div className="questionContainer">
            <div className="question">
                <h2 className="styleh2">Question {question.id}</h2>
                <h4 className="styleh4">{question.question}</h4>
                <form onSubmit={submit} >
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <button type="submit" className="submitButton">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Question;