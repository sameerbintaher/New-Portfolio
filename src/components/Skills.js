import React from "react";

function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              Programming Languages
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Python:</strong> Advanced proficiency in building AI
                models, image processing, and data analysis.
              </li>
              <li>
                <strong>C++:</strong> Strong foundation in algorithms, data
                structures, and performance optimization.
              </li>
              <li>
                <strong>JavaScript:</strong> Skilled in web development,
                including both frontend and backend (MERN stack).
              </li>
            </ul>
          </div>

          {/* Technologies and Tools */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
              Technologies and Tools
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Web Development:</strong> Expertise in the MERN stack
                (MongoDB, Express.js, React.js, Node.js).
              </li>
              <li>
                <strong>CAD Software:</strong> Proficient in AutoCAD and UGNX8.0
                for technical design and analysis.
              </li>
              <li>
                <strong>Data Analysis:</strong> Experience with MATLAB and
                Origin 8.0 for statistical modeling.
              </li>
              <li>
                <strong>Quality Control Tools:</strong> Hands-on knowledge of
                VESTA and fabric analysis systems.
              </li>
            </ul>
          </div>

          {/* Operating Systems */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
              Operating Systems
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Windows:</strong> Proficient in Windows 10 and 11.
              </li>
              <li>
                <strong>macOS:</strong> Skilled in macOS systems for development
                and productivity.
              </li>
              <li>
                <strong>Linux:</strong> Comfortable with Linux for programming,
                system administration, and development workflows.
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">
              Soft Skills
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Leadership:</strong> Effective leader with experience
                managing large-scale dormitory operations.
              </li>
              <li>
                <strong>Teamwork:</strong> Exceptional collaborator, fostering
                connections among diverse groups.
              </li>
              <li>
                <strong>Problem-Solving:</strong> Adept at finding innovative
                solutions to complex challenges.
              </li>
              <li>
                <strong>Communication:</strong> Strong verbal and written
                communication skills in English and Bengali, with developing
                knowledge of Korean.
              </li>
            </ul>
          </div>

          {/* Other Technical Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
              Other Technical Skills
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Productivity Tools:</strong> MS Office (Word, Excel,
                PowerPoint).
              </li>
              <li>
                <strong>Database Management:</strong> Proficient in MongoDB and
                MySQL.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
