import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import image from './assets/preview.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="relative group max-w-sm w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-3xl">
        <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">
          Tendance
        </div>

        <div className="relative">
          <img
            src={image}
            alt="Design card"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30"></div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:underline">
            Carte Ultra Créative
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Une carte designée pour l'inspiration, avec des effets modernes, responsive, et une expérience visuelle dynamique.
          </p>
          <button className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 rounded-full font-semibold shadow-lg transition-all duration-300">
            Explorer <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
