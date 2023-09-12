import React from "react";
import { Link } from "react-router-dom";

const UserInfo = ({ user }) => {
  return (
    <section className="md:pt-10 md:flex md:flex-row md:justify-center md:items-center">
      <div className="static mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mt-20 overflow-hidden md:h-96 md:w-96">
        {user && (
          <img
            src={`${user["avatar_url"]}`}
            className="object-cover h-full"
            alt={`${user.name} Profile Picture`}
            // alt="User Avatar"
          />
        )}
      </div>
      <div className="text-center p-10">
        {user && (
          <>
            <h2 className="text-5xl py-2 font-burtons text-teal-600 font-medium md:text-6xl">
              {user.name}
            </h2>
            <h3 className="font-burtons text-2xl py-2 md:text-3xl dark:text-white">
              {user.bio}
            </h3>
          </>
        )}
        <p className="text-md pt-5 pb-8 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
          I'm an experienced software developer, specializing in front-end web
          development, with a passion for creating high-quality, responsive user
          interfaces. Recently, I've been diving into back-end technologies like
          Java, SQL, and Spring to become a well-rounded full-stack developer. I
          love using cutting-edge technologies and languages to build dynamic
          and intuitive web applications.
        </p>
        <Link
          className="font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xl px-4 py-2 mt-3 rounded-md"
          to="/portfolio"
        >
          Portfolio
        </Link>
      </div>
    </section>
  );
};

export default UserInfo;
