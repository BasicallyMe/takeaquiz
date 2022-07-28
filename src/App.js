import React, { useEffect } from "react";
import QuizBlock from "./components/QuizBlock";
import "./App.scss";

const App = () => {
  async function getQuizData() {
    try {
      const response = await fetch(
        "https://the-trivia-api.com/api/questions?categories=science&limit=5&difficulty=easy"
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getQuizData();
  }, []);
  return (
    <div className="container">
      <QuizBlock />
    </div>
  );
};

export default App;
