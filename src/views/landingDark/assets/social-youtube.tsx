import * as React from "react";
import { SVGProps } from "react";

const SocialLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      fill="currentColor"
      d="M9.94 9.28h2.26v1.06h.03a2.49 2.49 0 0 1 2.25-1.24c2.41 0 2.86 1.56 2.86 3.58v4.13h-2.34v-3.66c0-.87-.02-1.99-1.21-1.99-1.22 0-1.41.95-1.41 1.93v3.72H9.94V9.28zM7.65 8.24c-.73 0-1.32-.59-1.32-1.32 0-.72.59-1.32 1.32-1.32.72 0 1.31.6 1.31 1.32 0 .73-.59 1.32-1.31 1.32zm-1.12 9.21h2.24V9.28H6.53v8.17z"
    />
  </svg>
);

export default SocialLinkedIn;
