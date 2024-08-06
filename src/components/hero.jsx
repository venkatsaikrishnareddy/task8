import React from "react";

function Hero() {
  return (
    <div className="red bg-slate-600 text-white m-0 p-4 text-center w-full ">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-lg md:text-xl">
        Build responsive web applications with ease.
      </p>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
      />
    </div>
  );
}

export default Hero;
