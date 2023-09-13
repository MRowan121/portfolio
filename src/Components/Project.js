import React from "react";

const Project = ({ image, alt, url }) => {
  return (
    <div className="basis-1/3 flex-1">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt={alt}
          className="rounded-lg object-cover h-full w-full border-2 dark:border-0"
        />
      </a>
    </div>
  );
};

export default Project;
