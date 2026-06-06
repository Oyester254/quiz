import { useState } from "react";
import Results from "./results";

function Quiz() {
  const questionBank = [
    {
      question: "When did Kenya attain independence?",
      options: [1923, 1904, 1963, 1922],
      answer: 1963,
    },
    {
      question: "Who was the first president of Kenya?",
      options: ["Kenyatta", "Kibaki", "Nyerere", "Moi"],
      answer: "Kenyatta",
    },
    {
      question: "Which is the largest river in Kenya?",
      options: ["Athi", "Nairobi", "Tana", "Chania"],
      answer: "Tana",
    },
    {
      question: "Which is a plateau within a plateau?",
      options: ["Chalbi", "Nyika", "Loita", "Yatta"],
      answer: "Nyika",
    },
    {
      question: "When was the new constitution adopted?",
      options: [2012, 2002, 2024, 2010],
      answer: 2010,
    },
  ];
  const initialAnswers = [null, null, null, null];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const selectedAnswer = userAnswers[currentQuestion];
  function handleSelectedOption(option) {
    const newUserAnswers = [...userAnswers]; //copy of the userAnswers array so that we can mutate/change it using newUserAnswers
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers); //updating the initial answers array we have selected the option for this secific question
  }
  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function goToPrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }
  function restartQuiz() {
    //resetting the states
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }
  if (isQuizFinished) {
    return (
      <Results
        userAnswers={userAnswers}
        questionBank={questionBank}
        restartQuiz={restartQuiz}
      />
    ); //we have used a prop userAnswers to pass content of quize component to a child named result component
  }
  return (
    <div className="text-left">
      <h1 className="text-center font-semibold text-green-500 mb-[10px] text-left">
        Question {currentQuestion + 1}
      </h1>
      <p className=" mb-[20px]">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option) => (
        <button
          className={
            "block w-full px-3 py-3 my-2 border-2 rounded-md text-left transition-colors duration-300 " +
            (selectedAnswer === option
              ? "bg-blue-300 border-blue-500 font-semibold"
              : "bg-slate-200 border-transparent hover:bg-slate-300")
          }
          onClick={() => handleSelectedOption(option)}
        >
          {option}
        </button>
      ))}
      <div className="flex justify-between mt-5">
        <button
          className="px-5 py-2 rounded-md text-base transition-colors duration-300 bg-blue-500 text-white hover:bg-blue-600 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
          onClick={goToPrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="px-5 py-2 bg-blue-500 text-white rounded-md text-base transition-colors duration-300 hover:bg-blue-600 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
          onClick={goToNext}
          disabled={selectedAnswer === null}
        >
          {currentQuestion === questionBank.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
export default Quiz;
