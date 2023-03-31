import { Button } from '@mui/material';

function Result(props) {
  const { quizQuestions, result, userChoice } = props;
  const centScored = (result.score / quizQuestions.length) * 100;

  const correctionsMade = quizQuestions.map((oneQuestion, index) => (
    <div key={oneQuestion.correctAnswer} className="mx-auto">
      <img src={oneQuestion.question} alt="flag" className="w-60" />

      {oneQuestion.choices.map(answer => (
        <ul>
          <li key={answer} className="border-b-2 border-x-2">
            <span className="flex justify-center gap-3">
              {answer}
              {answer === quizQuestions[index].correctAnswer && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 bg-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
              {answer !== quizQuestions[index].correctAnswer &&
                answer === userChoice[index] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 bg-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
            </span>
          </li>
        </ul>
      ))}
    </div>
  ));

  return (
    <div className="py-5">
      <h3 className="text-xl font-bold">RESULT</h3>
      <p className="font-semibold text-lg text-yellow-400">
        You scored {centScored}%!
      </p>
      <p className="font-semibold text-lg text-yellow-400">
        You got {result.score} out of {quizQuestions.length} questions
      </p>
      <Button
        variant="contained"
        type="submit"
        onClick={() => {
          window.location.reload();
        }}
        className="px-3 rounded-sm"
      >
        End Quiz
      </Button>
      <div className="mt-5 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {correctionsMade}
      </div>
    </div>
  );
}

export default Result;
