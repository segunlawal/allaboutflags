import { Button } from '@mui/material';

function Home() {
  return (
    <div className="">
      <div className="home flex section-1 sm:h-auto sm:h-screen h-128 ">
        <div className="lg:w-1/2 my-auto">
          <p className="pl-10 text-left text-white text-left text-3xl font-bold lg:w-3/5 leading-7 sm:pl-20">
            Get to know about flags of all countries in the world
          </p>
          <p className="pl-10 text-left text-white text-left text-sm lg:w-3/5 leading-5 font-thin pt-4 sm:pl-20">
            Search for any flag in the world by country.
          </p>
          <p className="pl-10 text-left text-white text-left text-sm lg:w-3/5 leading-5 font-thin  sm:pl-20">
            Guess random flags.
          </p>
          <p className="pl-10 text-left text-white text-left text-sm lg:w-3/5 leading-5 font-thin pb-4 sm:pl-20">
            Take a quiz to test your flag knowledge.
          </p>
          <div className="pl-10 sm:pl-20 pt-3 flex gap-3">
            <a href="/findtheflag">
              <Button variant="contained">Search</Button>
            </a>
            <a href="/guesstheflag">
              <Button variant="contained">Guess</Button>
            </a>
            <a href="/flagquiz">
              <Button variant="contained">Quiz</Button>
            </a>
          </div>
        </div>

        <div className="w-1/2 pl-20 my-auto">
          <img
            className="lg:w-96 lg:visible invisible"
            src={require('../assets/imgbin_national-flag-tree-png.png')}
            alt="flags-tree"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
