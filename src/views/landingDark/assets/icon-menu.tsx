import * as React from "react"
import { SVGProps } from "react"
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M28.5 16a1 1 0 0 1-1 1h-22a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1Zm-23-7h22a1 1 0 1 0 0-2h-22a1 1 0 0 0 0 2Zm22 14h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"
    />
  </svg>
)
export default MenuIcon
