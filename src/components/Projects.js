import React from "react";

function Projects() {
  const projects = [
    {
      title: "To-Do with PySide6",
      description:
        "A modern task management application built with Python and PySide6, featuring a clean user interface and efficient task organization capabilities.",
      tech: ["Python", "PySide6", "SQLite"],
      github: "https://github.com/sameerbintaher/to-do-with-pyside6",
      category: "Desktop Application",
    },
    {
      title: "Document Scanner",
      description:
        "Python-based document scanning application with image processing capabilities for enhanced document digitization.",
      tech: ["Python", "OpenCV", "Image Processing"],
      github: "https://github.com/sameerbintaher/document-scanner",
      category: "Image Processing",
    },
    {
      title: "Sam Motors",
      description:
        "Full-stack MERN application for a car dealership with user authentication, product management, and order processing.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/sameerbintaher/sam-motors-client",
      category: "Web Development",
    },
    {
      title: "Sam Hospital",
      description:
        "Healthcare management system built with modern web technologies, featuring appointment scheduling and patient management.",
      tech: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/sameerbintaher/sam-hospital",
      category: "Web Development",
    },
    {
      title: "Sam Travel",
      description:
        "Travel booking platform with dynamic package selection and booking management system.",
      tech: ["MERN Stack", "REST API"],
      github: "https://github.com/sameerbintaher/samtravel-client",
      category: "Web Development",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A collection of my recent work in web development, desktop
            applications, and image processing.
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:translate-y-[-4px] transition duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="px-4 py-1.5 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full mb-3 inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300 group"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>View Repository</span>
                    </a>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/sameerbintaher?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <span>Explore All Projects</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;