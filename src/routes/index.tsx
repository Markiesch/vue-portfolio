import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { SendMailIcon } from "~/components/icon/send-mail-icon";
import { ProjectCard } from "~/components/project-card";
import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";
import { RainbowGradient } from "~/components/ui/rainbow-gradient";
import { CodeIcon } from "~/components/icon/code-icon";
import { DesignIcon } from "~/components/icon/design-icon";

export default component$(() => {
  return (
    <>
      {/* HERO SECTION */}
      <div class="pb-8 pt-8 text-center">
        <div class="mx-auto mb-6 w-fit rounded-full border border-secondary bg-secondary px-4 py-2 font-mono">
          Design. Build. Improve.
        </div>
        <h1 class="mx-auto max-w-[16ch] text-7xl font-bold leading-[0.95]">
          I build websites your users will love
        </h1>
        <p class="mx-auto max-w-[42ch] pt-8 text-xl text-foreground-muted">
          Hi I am Mark, a{" "}
          {/* TODO link to projects related to software development */}
          <Link href="/" class="text-orange-300 text-semibold">
            <CodeIcon class="text-orange-300 inline w-5" /> Software Developer
          </Link>{" "}
          with an eye for
          {/* TODO link to projects related to UI design */}
          <Link href="/" class="text-blue-500 font-semibold">
            <DesignIcon class="inline w-5" /> UI design
          </Link>
          . I am specialized in UI/UX design and responsive web development.
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
