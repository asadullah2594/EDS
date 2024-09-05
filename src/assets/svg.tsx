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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33301 4.66675H11.333V10.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00187 5.33333H8.00854"
        stroke="#414C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33203 8H7.9987V10.6667H8.66536"
        stroke="#414C5C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.666 16.9993L19.9993 13.666L23.3327 16.9993"
          stroke="#5C6B82"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.9993 13.666V21.666"
          stroke="#5C6B82"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
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
export const QRIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3.33203"
        y="3.3335"
        width="5"
        height="5"
        rx="1"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83464 14.1669V14.1752"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="11.668"
        y="3.3335"
        width="5"
        height="5"
        rx="1"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83464 5.8334V5.84173"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.33203"
        y="11.6665"
        width="5"
        height="5"
        rx="1"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 5.8334V5.84173"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.668 11.6667H14.168"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 11.6669V11.6752"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 11.6665V14.1665"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.668 16.6667H14.168"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.168 14.1667H16.668"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 14.1665V16.6665"
        stroke="#5C6B82"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PlusIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.9987 4.1665V15.8332"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16797 10.0002H15.8346"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const SearchIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};
export const Funnel = ({ className }: { className?: any }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.58489 4.1665H15.4182C15.6614 4.2518 15.8515 4.44484 15.933 4.68936C16.0145 4.93387 15.9783 5.20234 15.8349 5.4165L11.6682 9.99984V15.8332L8.33489 13.3332V9.99984L4.16823 5.4165C4.02483 5.20234 3.98861 4.93387 4.07011 4.68936C4.15162 4.44484 4.34168 4.2518 4.58489 4.1665"
        stroke="#5C6B82"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Listing = ({ className }: { className?: any }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2.5"
        y="3.3335"
        width="15"
        height="3.33333"
        rx="1.66667"
        stroke="#5C6B82"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.16797 6.6665V14.9998C4.16797 15.9203 4.91416 16.6665 5.83464 16.6665H14.168C15.0884 16.6665 15.8346 15.9203 15.8346 14.9998V6.6665"
        stroke="#5C6B82"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.33203 10.0002H11.6654"
        stroke="#5C6B82"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MenuDots = ({ className }: { className?: any }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.10156 13.7251C8.10156 13.4267 8.22009 13.1406 8.43107 12.9296C8.64205 12.7186 8.92819 12.6001 9.22656 12.6001C9.52493 12.6001 9.81108 12.7186 10.0221 12.9296C10.233 13.1406 10.3516 13.4267 10.3516 13.7251C10.3516 14.0235 10.233 14.3096 10.0221 14.5206C9.81108 14.7316 9.52493 14.8501 9.22656 14.8501C8.92819 14.8501 8.64205 14.7316 8.43107 14.5206C8.22009 14.3096 8.10156 14.0235 8.10156 13.7251ZM8.10156 9.2251C8.10156 8.92673 8.22009 8.64058 8.43107 8.4296C8.64205 8.21862 8.92819 8.1001 9.22656 8.1001C9.52493 8.1001 9.81108 8.21862 10.0221 8.4296C10.233 8.64058 10.3516 8.92673 10.3516 9.2251C10.3516 9.52347 10.233 9.80961 10.0221 10.0206C9.81108 10.2316 9.52493 10.3501 9.22656 10.3501C8.92819 10.3501 8.64205 10.2316 8.43107 10.0206C8.22009 9.80961 8.10156 9.52347 8.10156 9.2251ZM8.10156 4.7251C8.10156 4.42673 8.22009 4.14058 8.43107 3.9296C8.64205 3.71862 8.92819 3.6001 9.22656 3.6001C9.52493 3.6001 9.81108 3.71862 10.0221 3.9296C10.233 4.14058 10.3516 4.42673 10.3516 4.7251C10.3516 5.02347 10.233 5.30961 10.0221 5.52059C9.81108 5.73157 9.52493 5.8501 9.22656 5.8501C8.92819 5.8501 8.64205 5.73157 8.43107 5.52059C8.22009 5.30961 8.10156 5.02347 8.10156 4.7251Z"
        fill="#475467"
      />
    </svg>
  );
};
export const Bell = ({ className }: { className?: any }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.334 12.1667C16.334 11.2462 17.0802 10.5 18.0007 10.5C18.9211 10.5 19.6673 11.2462 19.6673 12.1667C21.6175 13.0888 22.8995 15.0119 23.0007 17.1667V19.6667C23.1278 20.7173 23.7464 21.6452 24.6673 22.1667H11.334C12.2549 21.6452 12.8735 20.7173 13.0007 19.6667V17.1667C13.1018 15.0119 14.3838 13.0888 16.334 12.1667"
        stroke="#546176"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5 22.166V22.9993C15.5 24.3801 16.6193 25.4993 18 25.4993C19.3807 25.4993 20.5 24.3801 20.5 22.9993V22.166"
        stroke="#546176"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const DownArrow = ({ className }: { className?: any }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#546176"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const EditIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.4987 5.8335H4.9987C4.07822 5.8335 3.33203 6.57969 3.33203 7.50016V15.0002C3.33203 15.9206 4.07822 16.6668 4.9987 16.6668H12.4987C13.4192 16.6668 14.1654 15.9206 14.1654 15.0002V12.5002"
        stroke="#5C6B82"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 12.5H10L17.0833 5.41669C17.7737 4.72634 17.7737 3.60705 17.0833 2.91669C16.393 2.22634 15.2737 2.22634 14.5833 2.91669L7.5 10V12.5"
        stroke="#5C6B82"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.332 4.1665L15.832 6.6665"
        stroke="#5C6B82"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ArrowButton = ({ className }: { className?: any }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="12" fill="#EFF0F3" />
      <path
        d="M19.3307 12.667L12.6641 19.3337"
        stroke="#5C6B82"
        stroke-width="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3359 12.667H19.3359V18.667"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const PlusButton = ({ className }: { className?: any }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="12" fill="#EFF0F3" />
      <path
        d="M15.9993 11.3334V20.6667"
        stroke="#5C6B82"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.334 16H20.6673"
        stroke="#5C6B82"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const PathIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx="7"
        cy="6.41699"
        rx="1.75"
        ry="1.75"
        stroke="#414C5C"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3025 9.71641L7.82744 12.1915C7.37192 12.6466 6.63387 12.6466 6.17835 12.1915L3.70269 9.71641C1.88031 7.89394 1.88036 4.93922 3.7028 3.11681C5.52524 1.2944 8.47997 1.2944 10.3024 3.11681C12.1248 4.93922 12.1249 7.89394 10.3025 9.71641V9.71641Z"
        stroke="#414C5C"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const UserPlus = ({ className }: { className?: any }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx="7.5013"
        cy="5.83333"
        rx="3.33333"
        ry="3.33333"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 17.5V15.8333C2.5 13.9924 3.99238 12.5 5.83333 12.5H9.16667C11.0076 12.5 12.5 13.9924 12.5 15.8333V17.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.332 8.41675C12.9178 8.41675 12.582 8.75253 12.582 9.16675C12.582 9.58096 12.9178 9.91675 13.332 9.91675V8.41675ZM18.332 9.91675C18.7462 9.91675 19.082 9.58096 19.082 9.16675C19.082 8.75253 18.7462 8.41675 18.332 8.41675V9.91675ZM16.582 6.66675C16.582 6.25253 16.2462 5.91675 15.832 5.91675C15.4178 5.91675 15.082 6.25253 15.082 6.66675H16.582ZM15.082 11.6667C15.082 12.081 15.4178 12.4167 15.832 12.4167C16.2462 12.4167 16.582 12.081 16.582 11.6667H15.082ZM13.332 9.91675H18.332V8.41675H13.332V9.91675ZM15.082 6.66675V11.6667H16.582V6.66675H15.082Z"
        fill="white"
      />
    </svg>
  );
};
