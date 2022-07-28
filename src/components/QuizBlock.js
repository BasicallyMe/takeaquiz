import React from "react";
import OptionButton from "./OptionButton";
import './QuizBlock.scss';

const QuizBlock = () => { 
    return (
        <div className="quiz-block">
            <div className="progress-bar">
                <div className="progress-bar-inner"></div>
            </div>
            <div className="content">
                <div className="question-number">
                    <h5>Question 1 out of 5</h5>
                </div>
                <div className="current-question">
                    <h1>In which city of Germany is the largest port ?</h1>
                </div>
            </div>
            <div className="options">
                <OptionButton optionNumber="A" optionText="Port Bremen" />
                <OptionButton optionNumber="B" optionText="Port Wilhelmshaven" />
                <OptionButton optionNumber="C" optionText="Port Duisburg" />
                <OptionButton optionNumber="D" optionText="Port Hamburg" />
            </div>
            <button className="submit-button">Submit</button>
        </div>       
    )
}

export default QuizBlock;