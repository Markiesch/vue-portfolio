import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button";
import { HeroGradient } from "~/components/ui/hero-gradient";

export const Navigation = component$(() => {
  return (
    <nav class="relative mx-auto w-full max-w-7xl">
      <div class="absolute right-0 top-0 -z-10">
        <HeroGradient />
      </div>
      <ul class=" flex  items-center py-12">
        <li>
          <Link href="/" class="font-bold">
            Mark Schuurmans
          </Link>
        </li>
        <li class="ml-auto">
          <Button size="lg" href="/" variant="ghost">
            Home
          </Button>
        </li>
        <li>
          <Button size="lg" href="/projects" variant="ghost">
            Projects
          </Button>
        </li>
        <li>
          <Button size="lg" href="/resume" variant="ghost">
            Resume
          </Button>
        </li>
        <li>
          <Button size="lg" href="/contact" variant="secondary">
            Contact
          </Button>
        </li>
      </ul>
    </nav>
  );
});
