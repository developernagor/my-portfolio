import React from 'react';
import { Link } from 'react-router-dom';

function Project({project}) {
    const {_id,title,image,description} = project;
    return (
        <div  className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <figure>
              <img
                src={image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>

            <div className="card-actions justify-center p-4">
              <Link
                to={`/projects/${_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                View More / Details
              </Link>
            </div>
          </div>
    );
}

export default Project;