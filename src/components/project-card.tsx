import FoodzProject from "~/media/projects/foodz.png?jsx";
import DentistProject from "~/media/projects/dentist.png?jsx";
import TennisProject from "~/media/projects/pettelaer.png?jsx";

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const ProjectCard = component$(() => {
  const projects = [FoodzProject, DentistProject, TennisProject];

  return (
    <>
      {projects.map((Project) => (
        <Link
          href="/"
          class="border-secondary bg-secondary relative mx-auto mt-12 block w-fit overflow-hidden rounded-xl border p-8 pb-0"
        >
          <div
            class="absolute inset-0 rounded-lg opacity-0 transition-opacity hover:opacity-20"
            style="background-color: #D499ED"
          ></div>
          <Project
            alt=""
            class="pointer-events-none relative z-10 block max-w-4xl rounded-t-xl"
          />
        </Link>
      ))}
    </>
  );
});
