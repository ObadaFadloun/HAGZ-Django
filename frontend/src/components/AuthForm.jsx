import React, { useState } from 'react';

function AuthForm() {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div className='w-2/5 flex flex-col justify-center items-center'>
            <form className="w-full flex flex-col justify-center items-center">
                <div className="bg-gray-200 p-8 rounded-xl shadow-lg w-3/4 max-w-md">
                    <h1 className='font-bold text-3xl text-center mb-6 text-green-600'>{isSignUp ? 'Create an account' : 'Welcome back!'}</h1>
                    {isSignUp && (
                        <input
                            type="text"
                            placeholder="Full name"
                            className="block w-full mb-4 p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-green-600"
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email address"
                        className="block w-full mb-4 p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-green-600"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="block w-full mb-4 p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-green-600"
                    />

                    {isSignUp && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="block w-full mb-4 p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-green-600"
                        />
                    )}

                    <button className="text-white bg-green-600 font-bold py-3 px-4 rounded w-full hover:bg-green-700 transition-all">
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </button>
                </div>
            </form>
            <p className="mt-4 text-center text-sm">
                {isSignUp ? 'Already have an account?' : 'Need an account?'}{' '}
                <button
                    onClick={toggleForm}
                    className="text-green-600 underline font-medium hover:text-green-800 cursor-pointer"
                >
                    {isSignUp ? 'Log In' : 'Sign Up'}
                </button>
            </p>
        </div>
    );
}

export default AuthForm;
