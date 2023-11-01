import React from "react";
import "../styles.css"; 


const HomePage = ({ startQuiz }) => {
  return (
    <div>
      <h1 className="heading">Welcome to the Trivia Quiz Game</h1>
      <button className="startButton" onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default HomePage;