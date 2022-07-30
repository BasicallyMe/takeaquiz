import React, { useEffect } from "react";
import _, { shuffle } from 'underscore';
import LoadingScreen from "./components/loading/LoadingScreen";
import QuizBlock from "./components/QuizBlock";
import Result from "./components/result/Result";
import useQuestionStore from './components/store';
import "./App.scss";

const App = () => {
  const { questions, setQuestions, isReady, changeReadyState, isComplete } = useQuestionStore();
  async function getQuizData() {
    try {
      const response = await fetch(
        "https://the-trivia-api.com/api/questions?categories=science&limit=5&difficulty=easy"
      );
      const data = await response.json();
      formatQuestions(data);
    } catch (err) {
      console.log(err);
    }
  }
  function formatQuestions(data) {
    const questions = [];
    data.map((item) => {
      const options = [];
      item.incorrectAnswers.forEach((answer) => {
        options.push({ option: answer, isCorrect: false });
      });
      options.push({ option: item.correctAnswer, isCorrect: true });
      questions.push({
        question: item.question,
        options: _.shuffle(options),
        category: item.category,
      });
    });
    setQuestions(questions);
    changeReadyState();
  }
  useEffect(() => {
    getQuizData();
  }, []);
  
  return (
    <div className="container">
      {isReady === false ? <LoadingScreen /> : isComplete === false ? <QuizBlock /> : <Result />}
    </div>
  );
};

export default App;
