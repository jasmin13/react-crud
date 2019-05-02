import React from "react";

const HelloWorld = ({ tech }) => {
  console.log({ tech });
  return (
    <div className="hello-world">
      Hello world <span>{tech}</span>
    </div>
  );
};

export default HelloWorld;
