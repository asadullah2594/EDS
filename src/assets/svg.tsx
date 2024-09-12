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
export const Phone = ({ className }: { className?: any }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.75 3H6.75L8.25 6.75L6.375 7.875C7.17822 9.50365 8.49635 10.8218 10.125 11.625L11.25 9.75L15 11.25V14.25C15 15.0784 14.3284 15.75 13.5 15.75C7.44574 15.3821 2.61792 10.5543 2.25 4.5C2.25 3.67157 2.92157 3 3.75 3"
        stroke="#929CAB"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Latter = ({ className }: { className?: any }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2.25"
        y="3.75"
        width="13.5"
        height="10.5"
        rx="1.6"
        stroke="#929CAB"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.25 5.25L9 9.75L15.75 5.25"
        stroke="#929CAB"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const RoleIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="9"
        cy="5.25"
        r="3"
        stroke="#929CAB"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5 15.75V14.25C4.5 12.5931 5.84315 11.25 7.5 11.25H10.5C12.1569 11.25 13.5 12.5931 13.5 14.25V15.75"
        stroke="#929CAB"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const LoadingIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.0026 3.5V1.75"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.47656 4.52083L10.7307 3.26666"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 6.99998H12.25"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.47656 9.47919L10.7307 10.7334"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.0026 10.5V12.25"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.51979 9.47919L3.26562 10.7334"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.5 6.99998H1.75"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.51979 4.52083L3.26562 3.26666"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const PinIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="4.95833"
        cy="4.95833"
        r="0.583333"
        fill="#5C6B82"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.33594 4.08331V6.3344C2.33594 6.64765 2.46019 6.94806 2.68185 7.16973L7.41619 11.9041C7.63772 12.1256 7.9382 12.2501 8.25152 12.2501C8.56484 12.2501 8.86532 12.1256 9.08685 11.9041L11.9067 9.08423C12.1283 8.8627 12.2527 8.56221 12.2527 8.2489C12.2527 7.93558 12.1283 7.6351 11.9067 7.41356L7.17177 2.67923C6.95036 2.45785 6.65012 2.33343 6.33702 2.33331H4.08594C3.11944 2.33331 2.33594 3.11681 2.33594 4.08331Z"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const CalenderIcon = ({ className }: { className?: any }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2.33594"
        y="2.91669"
        width="9.33333"
        height="9.33333"
        rx="1.6"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.33073 1.75V4.08333"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.66667 1.75V4.08333"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.33594 6.41667H11.6693"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.41406 8.74998H6.9974"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.0026 8.75V10.5"
        stroke="#5C6B82"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const SiteLogo = ({ className }: { className?: any }) => {
  return (
    <svg
      width="155"
      height="32"
      viewBox="0 0 155 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5448 11.151L0 14.06V17.9386L14.5448 20.3627L25.211 18.181V13.8175L14.5448 11.151Z"
        fill="#34AD91"
      />
      <path
        d="M29.5744 24.2413V20.3627L14.5448 23.7565L4.36344 21.0899V26.1806L14.5448 31.7561L29.5744 24.2413Z"
        fill="#34AD91"
      />
      <path
        d="M4.36344 10.6662V5.33309L14.5448 0L29.5744 7.27239L29.332 11.151L14.5448 7.99963L4.36344 10.6662Z"
        fill="#019875"
      />
      <path
        d="M14.5448 7.99963V0L29.5744 7.27239V11.2091L14.5448 7.99963Z"
        fill="#34AD91"
      />
      <path
        d="M14.5448 20.3627V11.151L25.211 13.5752V18.4235L14.5448 20.3627Z"
        fill="#019875"
      />
      <path
        d="M14.5448 31.7561V23.7565L4.36344 20.8475V26.1806L14.5448 31.7561Z"
        fill="#019875"
      />
      <path
        d="M48.0948 28.3491C46.5821 28.3491 45.2343 27.9903 44.0513 27.2728C42.8684 26.5552 41.9375 25.5759 41.2587 24.3347C40.58 23.0742 40.2406 21.6682 40.2406 20.1167C40.2406 18.5459 40.5703 17.1496 41.2297 15.9278C41.9084 14.7061 42.8199 13.7461 43.9641 13.048C45.1277 12.3304 46.427 11.9716 47.8621 11.9716C49.0257 11.9716 50.0535 12.185 50.9456 12.6116C51.8571 13.0189 52.6231 13.5813 53.2437 14.2988C53.8836 14.997 54.3685 15.8018 54.6981 16.7132C55.0472 17.6053 55.2217 18.5362 55.2217 19.5058C55.2217 19.7192 55.2024 19.9616 55.1636 20.2331C55.1442 20.4852 55.1151 20.7276 55.0763 20.9603H42.2187V18.6332H53.5055L52.2255 19.6804C52.4001 18.6719 52.3031 17.7702 51.9346 16.9751C51.5662 16.1799 51.0231 15.5497 50.3056 15.0842C49.5881 14.6188 48.7736 14.3861 47.8621 14.3861C46.9506 14.3861 46.1167 14.6188 45.3604 15.0842C44.604 15.5497 44.0126 16.2187 43.5859 17.0914C43.1787 17.9447 43.0138 18.9628 43.0914 20.1458C43.0138 21.29 43.1884 22.2984 43.615 23.1711C44.061 24.0244 44.6816 24.6935 45.4767 25.1783C46.2912 25.6437 47.1736 25.8765 48.1239 25.8765C49.1711 25.8765 50.0535 25.634 50.771 25.1492C51.4886 24.6644 52.0704 24.0438 52.5164 23.2875L54.7854 24.4511C54.4751 25.1686 53.9903 25.828 53.3309 26.4292C52.691 27.011 51.9249 27.4764 51.0328 27.8255C50.1602 28.1745 49.1808 28.3491 48.0948 28.3491ZM58.7491 28V12.3207H61.3962V15.5206L61.0181 15.026C61.4059 14.037 62.0265 13.2807 62.8798 12.7571C63.7331 12.2334 64.6931 11.9716 65.7597 11.9716C66.9814 11.9716 68.0771 12.311 69.0468 12.9898C70.0358 13.6685 70.7146 14.5606 71.0831 15.666L70.3267 15.6951C70.734 14.4733 71.4224 13.5522 72.3921 12.9316C73.3617 12.2916 74.4381 11.9716 75.621 11.9716C76.707 11.9716 77.6864 12.2238 78.5591 12.728C79.4512 13.2322 80.159 13.9303 80.6826 14.8224C81.2062 15.7145 81.468 16.7229 81.468 17.8477V28H78.7336V18.7204C78.7336 17.8477 78.5785 17.1108 78.2682 16.5096C77.9579 15.9084 77.5313 15.443 76.9882 15.1133C76.4646 14.7642 75.8441 14.5897 75.1265 14.5897C74.4284 14.5897 73.7981 14.7642 73.2357 15.1133C72.6927 15.443 72.2563 15.9181 71.9267 16.5387C71.6164 17.1399 71.4612 17.8671 71.4612 18.7204V28H68.7268V18.7204C68.7268 17.8477 68.5717 17.1108 68.2614 16.5096C67.9511 15.9084 67.5244 15.443 66.9814 15.1133C66.4578 14.7642 65.8372 14.5897 65.1197 14.5897C64.4216 14.5897 63.7913 14.7642 63.2289 15.1133C62.6859 15.443 62.2495 15.9181 61.9198 16.5387C61.6096 17.1399 61.4544 17.8671 61.4544 18.7204V28H58.7491ZM92.5246 28.3491C91.0119 28.3491 89.6641 27.9903 88.4811 27.2728C87.2982 26.5552 86.3673 25.5759 85.6885 24.3347C85.0098 23.0742 84.6704 21.6682 84.6704 20.1167C84.6704 18.5459 85.0001 17.1496 85.6594 15.9278C86.3382 14.7061 87.2497 13.7461 88.3939 13.048C89.5574 12.3304 90.8568 11.9716 92.2919 11.9716C93.4554 11.9716 94.4833 12.185 95.3754 12.6116C96.2868 13.0189 97.0529 13.5813 97.6734 14.2988C98.3134 14.997 98.7982 15.8018 99.1279 16.7132C99.477 17.6053 99.6515 18.5362 99.6515 19.5058C99.6515 19.7192 99.6321 19.9616 99.5933 20.2331C99.574 20.4852 99.5449 20.7276 99.5061 20.9603H86.6485V18.6332H97.9352L96.6553 19.6804C96.8298 18.6719 96.7329 17.7702 96.3644 16.9751C95.9959 16.1799 95.4529 15.5497 94.7354 15.0842C94.0178 14.6188 93.2033 14.3861 92.2919 14.3861C91.3804 14.3861 90.5465 14.6188 89.7902 15.0842C89.0338 15.5497 88.4423 16.2187 88.0157 17.0914C87.6084 17.9447 87.4436 18.9628 87.5212 20.1458C87.4436 21.29 87.6181 22.2984 88.0448 23.1711C88.4908 24.0244 89.1114 24.6935 89.9065 25.1783C90.721 25.6437 91.6034 25.8765 92.5537 25.8765C93.6009 25.8765 94.4833 25.634 95.2008 25.1492C95.9184 24.6644 96.5002 24.0438 96.9462 23.2875L99.2152 24.4511C98.9049 25.1686 98.4201 25.828 97.7607 26.4292C97.1207 27.011 96.3547 27.4764 95.4626 27.8255C94.5899 28.1745 93.6106 28.3491 92.5246 28.3491ZM103.179 28V12.3207H105.826V15.2006L105.535 14.7933C105.904 13.9013 106.466 13.2419 107.222 12.8152C107.979 12.3692 108.9 12.1462 109.986 12.1462H110.946V14.7061H109.579C108.473 14.7061 107.581 15.0551 106.902 15.7533C106.224 16.432 105.884 17.4017 105.884 18.6622V28H103.179ZM117.945 28.3491C116.917 28.3491 116.006 28.1648 115.211 27.7964C114.435 27.4085 113.824 26.8849 113.378 26.2255C112.932 25.5468 112.709 24.7711 112.709 23.8984C112.709 23.0645 112.883 22.3178 113.232 21.6585C113.601 20.9797 114.163 20.4076 114.92 19.9422C115.695 19.4768 116.665 19.1471 117.829 18.9531L123.647 17.9932V20.2622L118.44 21.1349C117.431 21.3094 116.694 21.6294 116.229 22.0948C115.783 22.5602 115.56 23.1323 115.56 23.8111C115.56 24.4511 115.812 24.9844 116.316 25.411C116.84 25.8377 117.489 26.051 118.265 26.051C119.254 26.051 120.107 25.8474 120.825 25.4401C121.562 25.0135 122.134 24.4414 122.541 23.7238C122.968 23.0063 123.181 22.2112 123.181 21.3385V17.3532C123.181 16.4999 122.861 15.8115 122.221 15.2879C121.601 14.7448 120.776 14.4733 119.749 14.4733C118.856 14.4733 118.061 14.7061 117.363 15.1715C116.684 15.6175 116.18 16.2187 115.851 16.9751L113.494 15.7533C113.785 15.0357 114.251 14.3958 114.891 13.8334C115.531 13.2516 116.277 12.7958 117.13 12.4662C117.984 12.1365 118.876 11.9716 119.807 11.9716C121.009 11.9716 122.066 12.2044 122.978 12.6698C123.889 13.1158 124.597 13.7461 125.101 14.5606C125.625 15.3557 125.886 16.2866 125.886 17.3532V28H123.239V25.0329L123.734 25.2074C123.404 25.828 122.958 26.371 122.396 26.8364C121.833 27.3019 121.174 27.6703 120.418 27.9418C119.661 28.2133 118.837 28.3491 117.945 28.3491ZM130.081 28V5.97919H132.786V28H130.081ZM144.111 28.3491C142.637 28.3491 141.309 27.9903 140.126 27.2728C138.962 26.5552 138.041 25.5759 137.362 24.3347C136.684 23.0936 136.344 21.707 136.344 20.1749C136.344 18.6041 136.684 17.2078 137.362 15.986C138.041 14.7448 138.962 13.7655 140.126 13.048C141.309 12.3304 142.637 11.9716 144.111 11.9716C145.41 11.9716 146.564 12.2528 147.573 12.8152C148.581 13.3582 149.376 14.0952 149.958 15.026L149.522 15.6951V5.97919H152.256V28H149.609V24.6547L149.958 25.1201C149.415 26.148 148.62 26.9431 147.573 27.5055C146.545 28.0679 145.391 28.3491 144.111 28.3491ZM144.344 25.731C145.333 25.731 146.215 25.4886 146.991 25.0038C147.767 24.5189 148.378 23.8596 148.824 23.0257C149.289 22.1724 149.522 21.2221 149.522 20.1749C149.522 19.1083 149.289 18.158 148.824 17.3241C148.378 16.4708 147.767 15.8018 146.991 15.3169C146.215 14.8321 145.333 14.5897 144.344 14.5897C143.374 14.5897 142.492 14.8418 141.697 15.346C140.921 15.8309 140.31 16.4902 139.864 17.3241C139.418 18.1386 139.195 19.0889 139.195 20.1749C139.195 21.2221 139.418 22.1724 139.864 23.0257C140.31 23.8596 140.921 24.5189 141.697 25.0038C142.472 25.4886 143.355 25.731 144.344 25.731Z"
        fill="#242424"
      />
    </svg>
  );
};
export const EyeClosed = ({ className }: { className?: any }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1086 4.58745C17.3527 4.34337 17.3527 3.94764 17.1086 3.70357C16.8645 3.45949 16.4688 3.45949 16.2247 3.70357L2.89139 17.0369C2.64731 17.281 2.64731 17.6767 2.89139 17.9208C3.13547 18.1649 3.5312 18.1649 3.77528 17.9208L6.14769 15.5484C7.28628 16.0843 8.59766 16.4372 10 16.4372C12.2367 16.4372 14.242 15.5396 15.6838 14.433C16.4061 13.8786 17.0027 13.2601 17.4241 12.6529C17.8339 12.0624 18.125 11.4144 18.125 10.8122C18.125 10.2099 17.8339 9.56194 17.4241 8.97146C17.0027 8.36421 16.4061 7.74574 15.6838 7.19137C15.4654 7.02371 15.234 6.86086 14.9909 6.7052L17.1086 4.58745ZM14.0829 7.61311L12.6073 9.08881C12.9345 9.58283 13.125 10.1752 13.125 10.8122C13.125 12.5381 11.7259 13.9372 10 13.9372C9.36307 13.9372 8.77065 13.7466 8.27663 13.4194L7.09603 14.6C7.98397 14.9618 8.96843 15.1872 10 15.1872C11.9055 15.1872 13.6502 14.4181 14.9228 13.4414C15.5577 12.9541 16.0595 12.4267 16.3971 11.9402C16.7464 11.4369 16.875 11.0433 16.875 10.8122C16.875 10.5811 16.7464 10.1874 16.3971 9.68414C16.0595 9.19764 15.5577 8.67027 14.9228 8.18298C14.6618 7.98268 14.381 7.79111 14.0829 7.61311ZM9.19162 12.5044C9.43639 12.6216 9.71053 12.6872 10 12.6872C11.0355 12.6872 11.875 11.8477 11.875 10.8122C11.875 10.5227 11.8094 10.2486 11.6923 10.0038L9.19162 12.5044Z"
        fill="#C1C1C1"
      />
      <path
        d="M10 5.18717C10.8363 5.18717 11.6402 5.31265 12.3945 5.52762C12.5733 5.57859 12.6265 5.80183 12.495 5.9333L11.8722 6.55611C11.8103 6.61797 11.7207 6.64269 11.6354 6.62334C11.1096 6.50402 10.5618 6.43717 10 6.43717C8.09454 6.43717 6.34982 7.20627 5.07723 8.18298C4.44231 8.67027 3.94048 9.19764 3.60285 9.68414C3.25359 10.1874 3.125 10.5811 3.125 10.8122C3.125 11.0433 3.25359 11.4369 3.60285 11.9402C3.89089 12.3553 4.29845 12.8001 4.80619 13.2243C4.9215 13.3207 4.93254 13.4958 4.82629 13.602L4.29533 14.133C4.20502 14.2233 4.06091 14.2313 3.96337 14.1488C3.39857 13.6713 2.92662 13.1582 2.57592 12.6529C2.16614 12.0624 1.875 11.4144 1.875 10.8122C1.875 10.2099 2.16614 9.56194 2.57592 8.97146C2.99734 8.36421 3.59385 7.74574 4.31617 7.19137C5.75804 6.08474 7.76332 5.18717 10 5.18717Z"
        fill="#C1C1C1"
      />
      <path
        d="M10 7.68717C10.0729 7.68717 10.1451 7.68967 10.2168 7.69458C10.414 7.70809 10.4856 7.94271 10.3458 8.08251L9.38949 9.03881C8.84506 9.2262 8.41403 9.65724 8.22664 10.2017L7.27034 11.158C7.13054 11.2978 6.89591 11.2262 6.8824 11.0289C6.87749 10.9573 6.875 10.885 6.875 10.8122C6.875 9.08628 8.27411 7.68717 10 7.68717Z"
        fill="#C1C1C1"
      />
    </svg>
  );
};

export const EyeOpen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_603_2265)">
        <path
          d="M8.33337 9.99992C8.33337 10.4419 8.50897 10.8659 8.82153 11.1784C9.13409 11.491 9.55801 11.6666 10 11.6666C10.4421 11.6666 10.866 11.491 11.1786 11.1784C11.4911 10.8659 11.6667 10.4419 11.6667 9.99992C11.6667 9.55789 11.4911 9.13397 11.1786 8.82141C10.866 8.50885 10.4421 8.33325 10 8.33325C9.55801 8.33325 9.13409 8.50885 8.82153 8.82141C8.50897 9.13397 8.33337 9.55789 8.33337 9.99992Z"
          stroke="#AFB2B6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 10C15.5 13.3333 13 15 10 15C7 15 4.5 13.3333 2.5 10C4.5 6.66667 7 5 10 5C13 5 15.5 6.66667 17.5 10Z"
          stroke="#AFB2B6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_603_2265">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
