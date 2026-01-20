
import React from 'react';

export const WandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M15 4V2" />
    <path d="M15 10V8" />
    <path d="M12.5 6.5h-5" />
    <path d="M20 12.5V8" />
    <path d="m3 21 9-9" />
    <path d="M12.5 21.5 14 20l.5-2-2-.5-3.5 3.5.5 2 2 .5Z" />
  </svg>
);
