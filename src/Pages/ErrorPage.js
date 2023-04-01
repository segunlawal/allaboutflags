import React from 'react';
import { ReactComponent as ErrorDoodle } from '../assets/error404.svg';
import Footer from '../components/Footer';

function ErrorPage() {
  return (
    <div className="mt-10">
      <ErrorDoodle className="w-96 mx-auto" />
      <p className="text-white text-4xl -mt-20">PAGE NOT FOUND</p>
      <p className="underline text-white text-xl">
        <a href="/">Return to homepage</a>
      </p>
      <Footer />
    </div>
  );
}

export default ErrorPage;
