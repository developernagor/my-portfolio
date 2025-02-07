import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    console.log(projects)
  

  return (
    <section className="container mx-auto py-16 px-8" id="projects">
      <h2 className="text-4xl text-center font-bold text-blue-600 mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => 
        <Project key={project.id} project={project}></Project>
        )}
        </div>
        </section>
  )
}


export default Projects;
