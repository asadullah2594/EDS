interface iconProps {
  color?: string;
}

export const ArrowRightIcon = ({ color = "white" }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M11.333 4.66675L4.66634 11.3334"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33301 4.66675H11.333V10.6667"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const WatchIcon = () => {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="28" height="28" rx="14" fill="#E6F5F1" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.333 7.33325V20.6666L21.1663 13.9999L10.333 7.33325Z"
        fill="#009875"
        stroke="#009875"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Info = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="#414C5C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.00187 5.33333H8.00854"
        stroke="#414C5C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33203 8H7.9987V10.6667H8.66536"
        stroke="#414C5C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const UploadIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_5402_45198)">
        <rect x="2" y="1" width="36" height="36" rx="8" fill="white" />
        <rect
          x="2.5"
          y="1.5"
          width="35"
          height="35"
          rx="7.5"
          stroke="#E2E8F0"
        />
        <path
          d="M14.666 22.334V23.6673C14.666 24.4037 15.263 25.0007 15.9993 25.0007H23.9993C24.7357 25.0007 25.3327 24.4037 25.3327 23.6673V22.334"
          stroke="#5C6B82"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.666 16.9993L19.9993 13.666L23.3327 16.9993"
          stroke="#5C6B82"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.9993 13.666V21.666"
          stroke="#5C6B82"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_5402_45198"
          x="0"
          y="0"
          width="40"
          height="40"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5402_45198"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5402_45198"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
