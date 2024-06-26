import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto xl:mt-20 lg:mt-20 md:mt-20 flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Colin.
          </h1>
          <h1 className="title-font sm:text-2xl text-1xl mb-4 font-xs text-grey">
            I'm a dedicated back end software engineer specializing in enterprise systems and custom development. With a passion for crafting robust, scalable solutions, I thrive on transforming complex requirements into efficient, high-performance applications. Let's connect and create something extraordinary together.
          </h1>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Work With Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}