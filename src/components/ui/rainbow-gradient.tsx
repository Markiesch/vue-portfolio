import { component$, type HTMLAttributes } from "@builder.io/qwik";

export const RainbowGradient = component$(
  (props: HTMLAttributes<SVGElement>) => {
    return (
      <svg
        {...props}
        class="w-full"
        viewBox="0 0 1440 734"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_26_12)">
          <ellipse cx="721" cy="387" rx="1018" ry="387" fill="#03000A" />
        </g>
        <path
          d="M1738.5 387C1738.5 440.242 1710.12 491.021 1658.67 537.266C1607.21 583.51 1532.73 625.179 1440.66 660.183C1256.51 730.19 1002.07 773.5 721 773.5C439.932 773.5 185.495 730.19 1.34296 660.183C-90.7347 625.179 -165.215 583.51 -216.666 537.266C-268.118 491.021 -296.5 440.242 -296.5 387C-296.5 333.758 -268.118 282.979 -216.666 236.734C-165.215 190.49 -90.7347 148.821 1.34296 113.817C185.495 43.8104 439.932 0.5 721 0.5C1002.07 0.5 1256.51 43.8104 1440.66 113.817C1532.73 148.821 1607.21 190.49 1658.67 236.734C1710.12 282.979 1738.5 333.758 1738.5 387Z"
          stroke="#D499ED"
          stroke-opacity="0.8"
        />
        <defs>
          {/* @ts-expect-error */}
          <filter
            id="filter0_i_26_12"
            x="-297"
            y="0"
            width="2036"
            height="785"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="23"
              operator="erode"
              in="SourceAlpha"
              result="effect1_innerShadow_26_12"
            />
            <feOffset dy="11" />
            <feGaussianBlur stdDeviation="35.95" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.831373 0 0 0 0 0.6 0 0 0 0 0.929412 0 0 0 0.42 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_26_12"
            />
          </filter>
        </defs>
      </svg>
    );
  },
);
