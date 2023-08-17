import React from "react";

function PlusBox({ width = "56", height = "56", onClickEv }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClickEv}
    >
      <g filter="url(#filter0_d_304_763)">
        <rect x="4" width="48" height="48" rx="2" fill="white" />
        <rect
          x="5"
          y="1"
          width="46"
          height="46"
          rx="1"
          stroke="#0085FF"
          stroke-width="2"
        />
      </g>
      <path
        d="M14.1055 24.0249L41.8949 24.0249"
        stroke="#0085FF"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M28.0254 10.1055L28.0254 37.8949"
        stroke="#0085FF"
        stroke-width="4"
        stroke-linecap="round"
      />
      <defs>
        <filter
          id="filter0_d_304_763"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_304_763"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_304_763"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default PlusBox;
