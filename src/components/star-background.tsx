import {
  $,
  component$,
  noSerialize,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const StarryBackground = component$(() => {
  const state = useStore({
    canvasRef: null as HTMLCanvasElement | null,
    numStars: 50,
    stars: [] as Star[],
  });

  const initStars = $((canvas: HTMLCanvasElement) => {
    for (let i = 0; i < state.numStars; i++) {
      state.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.05) * 0.05,
        vy: (Math.random() - 0.05) * 0.05,
      });
    }
  });

  const drawStar = $((ctx: CanvasRenderingContext2D, star: Star) => {
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    ctx.fillRect(star.x, star.y, 3, 3);
  });

  const updateStars = $((canvas: HTMLCanvasElement) => {
    for (const star of state.stars) {
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const canvas = state.canvasRef!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    await initStars(canvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of state.stars) {
        drawStar(ctx, star);
      }

      updateStars(canvas);
      requestAnimationFrame(animate);
    };

    animate();
  });

  // // eslint-disable-next-line qwik/no-use-visible-task
  // useVisibleTask$(() => {
  //   console.log("!!!");
  //   console.log(state.canvasRef);
  // });

  return (
    <canvas
      ref={(el) => (state.canvasRef = noSerialize(el))}
      class="pointer-events-none fixed inset-0 h-full w-full"
    ></canvas>
  );
});
