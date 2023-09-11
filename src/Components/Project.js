import React from "react";

const Project = ({ image, alt, url }) => {
  return (
    <div className="basis-1/3 flex-1">
      <a href={url}>
        <img
          src={image}
          alt={alt}
          className="rounded-lg object-cover h-full w-full"
        />
      </a>
    </div>
  );
};

export default Project;
