function Results({ userAnswers, questionBank, restartQuiz }) {
  //distructuring

  function getScore() {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  }
  const score = getScore();
  return (
    <div>
      <h2 className="text-center font-semibold text-red-500">Quiz Completed</h2>
      <p>
        Your Score: {score}/{questionBank.length}
      </p>
      <button
        className="px-5 py-2 rounded-md text-base transition-colors duration-300 bg-blue-500 text-white hover:bg-blue-600"
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
    </div>
  );
}
export default Results;
