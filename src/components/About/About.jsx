import React from "react";
import aboutMePhoto from '../../assets/profile-pic.png'

function About() {
  return (
    <div className="container mx-auto py-16 px-8" id="about-me">
      <h2 className="text-4xl text-center font-bold text-blue-600 mb-4">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={aboutMePhoto}
            alt="Mehedi Hassan"
            className="rounded-2xl shadow-lg w-72"
          />
        </div>

        {/* Right: About Me Content */}
        <div className="w-full lg:w-2/3">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hello! I’m <strong>Mehedi Hassan</strong>, a passionate frontend developer with a love for creating beautiful, user-friendly websites. My journey in programming began back in 2018 when I first stumbled upon web development during a computer science class. What started as curiosity soon turned into an obsession, and I found myself deep in the world of <strong>React</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I thrive on solving problems and building dynamic websites that provide both functionality and aesthetic value. My approach to development is rooted in creating seamless user experiences—making sure everything looks great and works flawlessly. I enjoy collaborating with others on full-stack projects and am particularly fond of working with <strong>TailwindCSS</strong> and <strong>React</strong> to make code more maintainable and user interfaces more beautiful.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Beyond coding, I have a few interests that keep me balanced. I’ve always had a love for sports—especially football (soccer). It’s not just about the game for me; it’s about the teamwork and the strategy behind it. When I’m not working on code, you’ll likely find me on the field or reading a good book. I also enjoy sketching and painting, which helps me unleash my creativity in a different way.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether it’s building my latest project or relaxing with a game of football, I’m always excited about what’s next. Feel free to connect if you want to talk coding, share ideas, or just chat about the world of tech!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
