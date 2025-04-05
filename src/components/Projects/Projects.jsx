import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import { useQuery } from "@tanstack/react-query";

function Projects() {
    // const [projects, setProjects] = useState([])

    const {isLoading, data:projects, error} = useQuery({
        queryKey: ['projects'],
        queryFn: async()=> {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
            // console.log(res)
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }
    });
    

    if(isLoading){
        return 'loading......'
    }
    if (error) {
        return `Error: ${error.message}`;
    }


  return (
    <section className="container mx-auto py-16 px-8" id="projects">
      <h2 className="text-4xl text-center font-bold text-blue-600 mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => 
        <Project key={project._id} project={project}></Project>
        )}
        </div>
        </section>
  )
}


export default Projects;
