import React from "react";

const Title = ({ title }) => {
  return (
    <h2 className="text-2xl md:text-3xl tracking-tight lg:text-4xl sm:leading-none group">
      {title}
    </h2>
  );
};

export default Title;
