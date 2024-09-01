import { component$ } from "@builder.io/qwik";

export const HeroGradient = component$(() => {
  return (
    <svg
      width="1200"
      height="1024"
      viewBox="0 0 1200 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5_8)">
        <path
          d="M845.238 -167L1079.37 -83.4719L739.134 870.233L505 786.705L845.238 -167Z"
          fill="url(#paint0_linear_5_8)"
        />
        <path
          d="M931.893 -108L1123.1 -56.8051L861.203 921.319L670 870.124L931.893 -108Z"
          fill="url(#paint1_linear_5_8)"
        />
        <path
          d="M978.655 -77L1223.64 -34.8588L1051.99 963.064L807 920.923L978.655 -77Z"
          fill="url(#paint2_linear_5_8)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_5_8"
          x1="702.603"
          y1="243.889"
          x2="940.879"
          y2="337.787"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" stop-opacity="0" />
          <stop offset="0.465" stop-color="#fff" stop-opacity="0.1" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5_8"
          x1="822.266"
          y1="312.893"
          x2="1017.85"
          y2="370.762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" stop-opacity="0" />
          <stop offset="0.465" stop-color="#fff" stop-opacity="0.1" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5_8"
          x1="908.593"
          y1="352.262"
          x2="1159.44"
          y2="403.909"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" stop-opacity="0" />
          <stop offset="0.465" stop-color="#fff" stop-opacity="0.1" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_5_8">
          <rect width="1200" height="1024" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
