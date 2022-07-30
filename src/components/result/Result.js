import React, { useLayoutEffect, useState } from "react";
import useQuestionStore from "../store";
import "./Result.scss";

const Result = () => {
    const { score } = useQuestionStore();
  return (
    <div className="result-container">
      <h1>Congratulations</h1>
      <p>You've answered {score} out of 5 questions correctly</p>
    </div>
  );
};

export default Result;
