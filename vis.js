// Example of creating an SVG element dynamically
const svg = document.querySelector('svg');
const newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
newCircle.setAttribute("cx", "150");
newCircle.setAttribute("cy", "150");
newCircle.setAttribute("r", "40");
newCircle.setAttribute("fill", "yellow");
svg.appendChild(newCircle);

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
console.log(d3)

