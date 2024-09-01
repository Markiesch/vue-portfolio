import type { DocumentHead } from "@builder.io/qwik-city";
import { SendMailIcon } from "~/components/icon/send-mail-icon";
import { ProjectCard } from "~/components/project-card";
import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";
import { RainbowGradient } from "~/components/ui/rainbow-gradient";

export default component$(() => {
  return (
    <>
      {/* HERO SECTION */}

      <div class="text-center">
        <h1>Design. Build. Improve.</h1>
        <h2 class="mx-auto max-w-[16ch] text-7xl font-bold leading-[0.95]">
          I build websites your users will love
        </h2>
        <p class="mx-auto max-w-[42ch] pt-8 text-2xl text-foreground-muted">
          Hi I am Mark, a Software Developer with an eye for UI design. I am
          specialized in UI/UX design and responsive web development.
        </p>

        <div class="mt-6">
          <Button href="/projects" size="lg">
            View projects
          </Button>
          <Button href="/projects" variant="secondary" size="lg" class="ml-2">
            Contact
            <SendMailIcon class="h-5 pl-2" />
          </Button>
        </div>
      </div>

      <div>
        <ProjectCard />
      </div>

      <div class="mt-32 overflow-hidden">
        <div class="max-h-32">
          <RainbowGradient />
        </div>

        <div class="py-16 text-center">
          <h2>Need help with a project?</h2>
          <h3 class="text-7xl font-bold">Let's talk!</h3>
          <p class="mx-auto max-w-[50ch] pt-4 text-2xl text-foreground-muted">
            Got a project? Drop me a line if you want to work together on
            something exciting. Big or small. Mobile or web.
          </p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
