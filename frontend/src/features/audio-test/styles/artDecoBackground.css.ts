import { style } from "@vanilla-extract/css";

const pattern = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="640" height="800" viewBox="0 0 640 800">
  <rect width="640" height="800" fill="#0B1011"/>

  <path
    d="M80 800V360A280 280 0 0 1 360 80V800Z"
    fill="#171B1C"
  />
  <path
    d="M160 800V360A200 200 0 0 1 360 160V800Z"
    fill="#101617"
  />
  <path
    d="M240 800V360A120 120 0 0 1 360 240V800Z"
    fill="#1A1D1D"
  />

  <path
    d="M400 0V160A240 240 0 0 0 640 400V0Z"
    fill="#171B1C"
  />
  <path
    d="M480 0V160A160 160 0 0 0 640 320V0Z"
    fill="#101617"
  />
  <path
    d="M560 0V160A80 80 0 0 0 640 240V0Z"
    fill="#1A1D1D"
  />

  <g fill="none" stroke="#343C3D" stroke-width="2">
    <path d="M80 800V360A280 280 0 0 1 360 80V0"/>
    <path d="M160 800V360A200 200 0 0 1 360 160"/>
    <path d="M240 800V360A120 120 0 0 1 360 240"/>
    <path d="M360 0V800"/>
    <path d="M400 0V160A240 240 0 0 0 640 400"/>
    <path d="M480 0V160A160 160 0 0 0 640 320"/>
    <path d="M560 0V160A80 80 0 0 0 640 240"/>
  </g>
</svg>
`;

export const artDecoBackground = style({
  backgroundColor: "#0B1011",
  backgroundImage: [
    "radial-gradient(ellipse at 50% 25%, transparent 15%, rgb(0 0 0 / 55%) 100%)",
    "repeating-linear-gradient(90deg, rgb(245 241 232 / 2%) 0 1px, transparent 1px 4px)",
    `url("data:image/svg+xml,${encodeURIComponent(pattern)}")`,
  ].join(", "),
  backgroundSize: "100% 100%, 4px 100%, 640px 800px",
  backgroundPosition: "center, center, center top",
  backgroundRepeat: "no-repeat, repeat, repeat",
});
