import * as React from "react"
import { SVGProps } from "react"
const SocialFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22.5 12a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 10.5 10.5h5v-7h-3v-4h3v-3a4 4 0 0 1 4-4h3v4h-2c-1.1 0-2 .9-2 2v3h4l-1 4h-3v7h4.5a10.5 10.5 0 0 0 10.5-10.5z"
    />
  </svg>
)

export default SocialFacebook
