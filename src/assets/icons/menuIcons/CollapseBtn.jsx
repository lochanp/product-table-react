import * as React from 'react';
const CollapseBtn = props => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' {...props}>
    <g fill='#fff' clipPath='url(#a)'>
      <path d='M11.06 4.667a.666.666 0 0 0 .193.473l6.86 6.86-6.86 6.86a.667.667 0 0 0 .94.94L20 12l-7.807-7.807a.667.667 0 0 0-1.133.474Z' />
      <path d='M3.727 4.667a.667.667 0 0 0 .193.473L10.78 12l-6.86 6.86a.667.667 0 0 0 .94.94l7.807-7.8L4.86 4.193a.667.667 0 0 0-1.133.474Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M24 24V0H0v24z' />
      </clipPath>
    </defs>
  </svg>
);
export default CollapseBtn;
