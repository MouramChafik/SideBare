import React, { useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaCog,
  FaSignOutAlt,
  FaChartBar,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-xl flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header: Logo + Toggle Button */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          {isOpen && (
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Sidebar 
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition text-2xl"
            aria-label="Toggle sidebar"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <ul className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaHome className="text-lg" />
              {isOpen && <span className="font-semibold">Accueil</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaUserAlt className="text-lg" />
              {isOpen && <span className="font-semibold">Profil</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaChartBar className="text-lg" />
              {isOpen && <span className="font-semibold">Statistiques</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaCog className="text-lg" />
              {isOpen && <span className="font-semibold">Paramètres</span>}
            </a>
          </li>
        </ul>

        {/* Footer / Logout */}
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center gap-3 w-full text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600 transition font-semibold">
            <FaSignOutAlt className="text-lg" />
            {isOpen && <span>Déconnexion</span>}
          </button>
        </div>
      </nav>

      {/* Contenu principal */}
      <main
        className={`flex-1 p-10 text-gray-800 dark:text-gray-200 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">
          Bienvenue dans l'application
        </h2>
        <p>
          Voici une sidebar moderne, avec ouverture/fermeture extrait de code que vous pouvez lz trouvez sur mon  <br />
          <a
            href="https://github.com/MouramChafik"
            className="text-indigo-600 dark:text-indigo-400 hover:underline "
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <div className="p-4 overflow-x-auto">
          <pre className="bg-gray-800 text-white rounded p-4 w-full max-w-full overflow-x-auto break-words text-xs">
            {`
import React, { useState } from 'react';
import {
  FaHome,
  FaUserAlt,
  FaCog,
  FaSignOutAlt,
  FaChartBar,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <nav
        className={\`fixed top-0 left-0 h-full bg-white dark:bg-gray-800
         shadow-xl flex flex-col transition-all duration-300 \${
          isOpen ? 'w-64' : 'w-16'
        }\`}
      >
        {/* Header: Logo + Toggle Button */}
        <div className="flex items-center justify-between px-4 py-4 
        border-b border-gray-200 dark:border-gray-700">
          {isOpen && (
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              MonApp
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600
             dark:hover:text-indigo-400 transition text-2xl"
            aria-label="Toggle sidebar"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <ul className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300
               hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaHome className="text-lg" />
              {isOpen && <span className="font-semibold">Accueil</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300
               hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaUserAlt className="text-lg" />
              {isOpen && <span className="font-semibold">Profil</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300
               hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaChartBar className="text-lg" />
              {isOpen && <span className="font-semibold">Statistiques</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300
               hover:bg-indigo-600 hover:text-white rounded-lg px-4 py-3 transition"
            >
              <FaCog className="text-lg" />
              {isOpen && <span className="font-semibold">Paramètres</span>}
            </a>
          </li>
        </ul>

        {/* Footer / Logout */}
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <button
            className="flex items-center gap-3 w-full text-red-600 hover:text-red-800
             dark:text-red-400 dark:hover:text-red-600 transition font-semibold"
          >
            <FaSignOutAlt className="text-lg" />
            {isOpen && <span>Déconnexion</span>}
          </button>
        </div>
      </nav>

      {/* Contenu principal */}
      <main
        className={\`flex-1 p-10 text-gray-800 dark:text-gray-200 transition-all duration-300 \${
          isOpen ? 'ml-64' : 'ml-16'
        }\`}
      >
        <h2 className="text-3xl font-bold mb-6">Bienvenue dans l'application</h2>
        <p>
          Voici une sidebar moderne, avec ouverture/fermeture et remplissant toute la hauteur.
        </p>
      </main>
    </div>
  );
}

export default App;
`}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
