import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Docs/resume.txt"

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 👋, I am a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Full Stack Develover!", "Mern Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="Mayank.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
