import React, { useState } from "react";
import "./App.css";
//components
import QuestionCard from "./Components/QuestionCard";
import { fetchQuestions, Difficulty, QuestionState } from "./Api";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
};

function App() {
  const startTrivia = async () => {
    setLoading(true);
    setQuizOver(false);

    const newQuestions = await fetchQuestions(
      totalQuestions,
      Difficulty.easy
    ).catch((err) => {
      console.log(err.message);
    });

    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [quizOver, setQuizOver] = useState(true);
  const [score, setScore] = useState(0);

  let totalQuestions = 10;
  return (
    <div className="App">
      <h1>React Quiz</h1>
      {quizOver || userAnswers.length === totalQuestions ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!quizOver ? <p className="score">Score</p> : null}
      {loading ? <p>Loading Questions...</p> : null}
      {!loading && !quizOver ? (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={totalQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      ) : null}
      {!loading &&
      !quizOver &&
      userAnswers.length === number + 1 &&
      number !== totalQuestions - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;
