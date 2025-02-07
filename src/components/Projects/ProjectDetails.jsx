import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  const projectData = useLoaderData();

  // Find the project that matches the id from URL
  const project = projectData.find((item) => item.id === parseInt(id));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <section className="container py-16 mx-auto px-4">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-8">{project.title}</h2>

      <div className="w-full flex justify-center mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-xl w-full max-w-4xl"
        />
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Technologies Used:</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {project.techStack.map((tech, index) => (
            <li key={index} className="text-lg text-gray-700 bg-blue-50 p-2 rounded-lg shadow-sm">{tech}</li>
          ))}
        </ul>

        <p className="text-lg text-gray-800 mb-6">{project.description}</p>

        <p className="text-lg text-gray-800 mb-6">
          <strong className="font-semibold">Challenges Faced:</strong> {project.challenges}
        </p>

        <p className="text-lg text-gray-800 mb-8">
          <strong className="font-semibold">Future Plans:</strong> {project.futurePlans}
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Live Project
          </a>
          <a
            href={project.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            GitHub Repo (Client)
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
