import Quiz from './Quiz';

function BeginQuiz(props) {
  const { allcountries } = props;

  const allthecountries = allcountries?.map(onecountry => ({
    name: onecountry.name.common,
    value: onecountry.name.common,
    flag: onecountry.flags.png,
    continent: onecountry.continents[0],
  }));

  // Create a copy of allthecountries array
  const allthecountriesCopy = [...allthecountries];

  // Generate ten countries for quiz
  const questions = [];
  for (let i = 0; i < 10; i += 1) {
    const randomIndex = Math.floor(Math.random() * allthecountriesCopy.length);
    questions.push(allthecountriesCopy?.splice(randomIndex, 1)[0]);
  }

  // Array of country names
  const countryNames = allthecountries.map(onecountry => onecountry.name);

  // Questions array
  const quizQuestions = questions?.map(country => {
    const randomNum = () => Math.floor(Math.random() * 200) + 1;
    const choices = [
      country?.name,
      countryNames[randomNum()],
      countryNames[randomNum()],
      countryNames[randomNum()],
    ];
    // Ensure the first three elements are unique
    while (choices[1] === choices[0]) choices[1] = countryNames[randomNum()];
    while (choices[2] === choices[0] || choices[2] === choices[1])
      choices[2] = countryNames[randomNum()];
    while (
      choices[3] === choices[0] ||
      choices[3] === choices[1] ||
      choices[3] === choices[2]
    )
      choices[3] = countryNames[randomNum()];
    // Shuffle the array
    choices.sort(() => Math.random() - 0.5);

    return {
      question: country.flag,
      choices,
      correctAnswer: country.name,
    };
  });

  return (
    <div className="text-white">
      <Quiz quizQuestions={quizQuestions} />
    </div>
  );
}

export default BeginQuiz;
