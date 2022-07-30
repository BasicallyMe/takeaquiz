import React, { useState } from "react";
import OptionButton from "./OptionButton";
import useQuestionStore from "./store";
import "./QuizBlock.scss";

const QuizBlock = () => {
  const { questions, updateScore, changeComplete } = useQuestionStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const MAXQUESTIONS = questions.length;

  function handleOptionClick(option, index) {
    setSelectedOption({option: option, index: index});
  }

  function handleSubmitClick() {
    if(Object.keys(selectedOption).length === 0) {
      console.log('empty');
    } else {
      setShowAnswer(true)
      if(selectedOption.option.isCorrect === true) updateScore()
      setTimeout(() => {
        setShowAnswer(false);
        if(currentIndex < MAXQUESTIONS - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          changeComplete();
        }
        setSelectedOption({});
      }, 1500);
    }
  }

  return (
    <div className="quiz-block">
      <div className="progress-bar">
        <div className="progress-bar-inner"></div>
      </div>
      <div className="content">
        <div className="question-number">
          <h5>
            Question {currentIndex + 1} out of {MAXQUESTIONS}
          </h5>
        </div>
        <div className="current-question">
          <h1>{questions[currentIndex].question}</h1>
        </div>
        <div className="question-category">
          <h5>{questions[currentIndex].category}</h5>
        </div>
      </div>
      <div className="options">
        {questions[currentIndex].options.map((option, index) => (
          <OptionButton
            key={option.option}
            index={index}
            showAnswer={showAnswer}
            currentOption={selectedOption.index}
            handleOptionClick={() => handleOptionClick(option, index)}
            optionNumber={`${String.fromCharCode(65 + index)}`}
            option={option}
          />
        ))}
      </div>
      <button onClick={handleSubmitClick} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default QuizBlock;
