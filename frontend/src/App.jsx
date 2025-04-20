import './App.css'
import React from 'react';
import Lottie from 'lottie-react';
import soccerAnimation from './assets/soccer.json';
import formAnimation from './assets/loading.json';
import AuthForm from './components/AuthForm';


function App() {

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-300"
    >
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <Lottie animationData={soccerAnimation} loop={true} className="w-56 h-56 mb-4" />
        <h1 className="text-green-600 font-bold text-7xl mb-4">HAGZ</h1>
        <p className="text-xl text-black text-center font-semibold max-w-md">
          HAGZ helps you find and book football fields to play with friends, anytime, anywhere.
        </p>
      </div>

      <div className="h-100 w-1 bg-green-600 mx-4"></div>

      <AuthForm />
    </div>

  )
}

export default App
