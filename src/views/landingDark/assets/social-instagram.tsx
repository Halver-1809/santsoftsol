import * as React from "react";
import { SVGProps } from "react";

const SocialFacebook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 7h2V4.5h-2c-1.93 0-3.5 1.57-3.5 3.5v1H8v2.5h2v6.5h2.5V11h2.5l.5-2.5H12.5V8c0-.55.45-1 1-1z"
    />
  </svg>
);

export default SocialFacebook;
