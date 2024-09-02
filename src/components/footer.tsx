import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <div class="border-t border-secondary bg-background">
      <div class="mx-auto max-w-7xl py-8">
        <p>@ 2024 Mark Schuurmans</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
});
