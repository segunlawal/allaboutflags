function Result(props) {
  const { quizQuestions, result } = props;
  //   console.log(quizQuestions);
  const centScored = (result.score / quizQuestions.length) * 100;
  return (
    <div>
      <h3>Result</h3>
      <p>You scored {centScored}%!</p>
      <p>
        You got {result.score} out of {quizQuestions.length} questions
      </p>
    </div>
  );
}

export default Result;
