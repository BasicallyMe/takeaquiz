import React from "react";

const OptionButton = (props) => {
  const {
    optionNumber,
    option,
    index,
    currentOption,
    handleOptionClick,
    showAnswer,
  } = props;
  return (
    <button
      onClick={handleOptionClick}
      className={`option-button ${index === currentOption ? "active" : null} ${
        showAnswer === true
          ? option.isCorrect === true
            ? "correct"
            : index === currentOption
            ? "wrong"
            : null
          : null
      }`}
    >
      <span className="option-number">{optionNumber}. </span>
      <span className="option-text">{option.option}</span>
    </button>
  );
};

export default OptionButton;
