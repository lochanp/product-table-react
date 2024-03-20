import * as React from 'react';
const NotificationIcon = props => (
  <svg xmlns='http://www.w3.org/2000/svg' width={28} height={28} fill='none' {...props}>
    <g clipPath='url(#a)'>
      <path
        stroke='#000000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.49}
        d='M17.5 21v.875a3.5 3.5 0 0 1-7 0V21m12.889-1.781c-1.404-1.719-2.396-2.594-2.396-7.333 0-4.34-2.216-5.885-4.04-6.636-.242-.1-.47-.328-.544-.577-.32-1.089-1.217-2.048-2.409-2.048-1.192 0-2.09.96-2.406 2.05-.074.25-.302.475-.544.575-1.826.752-4.04 2.293-4.04 6.636-.003 4.739-.994 5.614-2.399 7.333C4.03 19.93 4.54 21 5.557 21h16.892c1.012 0 1.518-1.072.94-1.781Z'
      />
      <circle cx={22.324} cy={5.676} r={5.176} fill='#D34645' stroke='#000' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#000' d='M0 0h28v28H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default NotificationIcon;
