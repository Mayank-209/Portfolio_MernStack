import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="container techstack">
        <h2 className="col-12 mt-3 mb-1 text-center">Technologies Stack</h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including programming Languages, Frameworks, databases, front-end
          and back-end tools and APIs
        </p>

        <div className="row">
          {TechstackList.map((tech) => (
            <h1>{tech.name}</h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
