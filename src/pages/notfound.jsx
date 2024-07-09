// import React from 'react';
import Notfoundhero from "../assets/Notfound assets/Frame 171.png"
import Button from "../common/Buttons/button"

function ErrorPage() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center my-20 mx-2 ">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">Ooops...</h1>
        <h2 className="text-8xl font-bold text-gray-700 mb-8">404</h2>
        <h2 className="text-5xl font-medium text-gray-700 mb-8">Page not found</h2>
        <p className="text-gray-500 mb-8 sm:text-2xl text-xl my-5 lg:w-[600px] md:w-[500px]">
          The page you are looking for doesn&apos;t exist or under construction, go
          back to home page
        </p>
        <Button to="/">
          Go Back
        </Button>
      </div>
      <div className=" my-12">
        <img
          src={Notfoundhero}
          alt="404 error"
          className="w-96 sm:w-auto mx-auto "
        />
      </div>
    </div>
  );
}

export default ErrorPage;