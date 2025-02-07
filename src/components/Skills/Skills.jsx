import React from "react";
import Card from "../Card/Card";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";

function Skills() {
  return (
    <div className="container mx-auto py-16 px-8" id="skills">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
        🚀 Skills & Technologies
      </h1>

      {/* Description */}
      <h3 className="text-xl text-center text-gray-600 mb-8">
        The skills, tools, and technologies I work with:
      </h3>

      {/* Skills Grid */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card title="HTML" subtitle="The foundation of web pages" Icon={FaHtml5} />
        <Card title="CSS" subtitle="Styling the web beautifully" Icon={FaCss3Alt} />
        <Card title="Tailwind CSS" subtitle="Utility-first CSS framework" Icon={SiTailwindcss} />
        <Card title="JavaScript" subtitle="Dynamic and interactive web development" Icon={SiJavascript} />
        <Card title="React" subtitle="Building user interfaces efficiently" Icon={FaReact} />
        <Card title="Express.js" subtitle="Fast and minimalist web framework" Icon={SiExpress} />
        <Card title="MongoDB" subtitle="NoSQL database for modern apps" Icon={SiMongodb} />
        <Card title="Firebase" subtitle="Seamless Authentication & Backend with Firebase" Icon={SiFirebase} />
      </div>
    </div>
  );
}

export default Skills;
