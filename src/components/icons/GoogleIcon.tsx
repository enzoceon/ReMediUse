
import { SVGProps } from "react";

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M17.2 12c0-1.4-.7-2.8-1.7-3.7A4.9 4.9 0 0 0 12 7a5 5 0 1 0 0 10 4.9 4.9 0 0 0 3.5-1.3" />
      <path d="M17 12h-5" />
    </svg>
  );
}
