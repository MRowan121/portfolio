import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";

const Portfolio = ({ repos }) => {
  return (
    <section>
      <h3 className="font-burtons text-center text-5xl pt-6 text-teal-600 font-medium md:text-6xl">
        Portfolio
      </h3>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {repos &&
          repos.map((obj) => {
            return (
              <Project
                key={obj.id}
                image={obj.image}
                alt={obj.name}
                url={obj["repo_url"]}
              />
            );
          })}
      </div>
      <div className="flex justify-center pb-8">
        <Link
          className="font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 text-xl text-white px-4 py-2 rounded-md hover:animate-pulse"
          to="/"
        >
          Home
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
