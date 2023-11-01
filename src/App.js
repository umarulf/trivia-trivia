import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import quizData from "./quizData.json";
import "./App.css"
import "./styles.css"

function App() {
  const [page, setPage] = useState("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0); 

  const startQuiz = () => {
    setPage("quiz");
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };


  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      {page === "home" && <HomePage startQuiz={startQuiz} />}
      {page === "quiz" && currentQuestion < quizData.length && (
        <QuizPage 
          question={quizData[currentQuestion]}
          nextQuestion={nextQuestion}
          updateScore={updateScore} 
        />
      )}
      {page === "quiz" && currentQuestion === quizData.length && (
        <div>
          <h2>Your Score: {score} out of 5</h2>
          <button className="restartButton" onClick={() => window.location.reload()}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;