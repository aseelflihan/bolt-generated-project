import React from 'react';

    export const WelcomePage: React.FC<{ onStartQuiz: () => void }> = ({ onStartQuiz }) => {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-purple-100">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Welcome Hero"
            className="w-64 h-64 rounded-full mb-8 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Selamat Datang, Ayuu!</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            "Belajar adalah harta karun yang akan selalu mengikuti pemiliknya."
          </p>
          <button
            onClick={onStartQuiz}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Mulai Kuis
          </button>
        </div>
      );
    };
