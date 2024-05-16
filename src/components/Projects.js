import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="block relative overflow-hidden">
              <div className="border border-gray-800 bg-gray-900 hover:bg-gray-800 transition duration-300">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="absolute inset-0 px-8 py-10 z-12 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}