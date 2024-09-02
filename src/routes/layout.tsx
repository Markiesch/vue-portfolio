import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "~/components/navigation";
import { Footer } from "~/components/footer";
import { StarryBackground } from "~/components/star-background";

export default component$(() => {
  return (
    <>
      <StarryBackground />

      <Navigation />
      <div class="flex-grow">
        <Slot />
      </div>
      <Footer />
    </>
  );
});
