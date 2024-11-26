import React from "react";

const CombinePattern = () => {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
    <svg
      width="100%"
      height="80"
      viewBox="0 0 186.83 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upper Wave Portion */}
      <g transform="translate(6, -12)">
        {" "}
        {/* Adjust this value to move the upper wave */}
        <path
          d="M-6.64583 15.4427C-6.64583 15.4427 22.3281 3.58333 90.8646 29.6146C158.651 55.3542 190.12 0.546875 190.12 0.546875L196.344 39.9583L2.29688 66.3229L-6.69271 16.7865L-6.64583 15.4427Z"
          fill="#CF29D6"
        />
      </g>

      {/* last SVG Paths and Masks */}
      <g transform="translate(-20,30) scale(1.8)">
  {/* Expanded Mask with Increased Height */}
  <mask
    id="mask0"
    style={{ maskType: "luminance" }}
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
  >
    {/* Increase height from 80 to 120 */}
    <path d="M0 0H400V120H0V0Z" fill="white" />
  </mask>
  <g mask="url(#mask0)">
    <mask
      id="mask1"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="150"
      height="80" /* Adjust height to match */
    >
      {/* Adjust path to increase height */}
      <path d="M400 200L-20 190L-10 1L420 10L400 200Z" fill="white" />
    </mask>
    <g mask="url(#mask1)"
    
    >
      {/* Update fill path dimensions */}
      <path d="M400 200L-20 190L-10 1L420 10L400 200Z" fill="#2985D6" />
    </g>
  </g>
</g>

      {/* middle svg*/}
      <g transform=" scale(1,1) translate(3, -9.6)">
        <path
          d="M190.66 0.333252L197.43 44.2655L-30.3092 79.3437L-39.5331 19.4739C-39.5331 19.4739 13.0294 2.58325 82.9877 35.8905C152.946 69.1978 190.66 0.333252 190.66 0.333252Z"
          fill="#2985D6"
        />
      </g>
    </svg>
    </div>
  );
};

export default CombinePattern;

