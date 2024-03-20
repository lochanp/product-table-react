import * as React from 'react';
const LiveNewsIcon = props => (
  <svg xmlns='http://www.w3.org/2000/svg' width={86} height={56} fill='none' {...props}>
    <g strokeLinejoin='round' strokeWidth={1.2} clipPath='url(#a)'>
      <path
        fill='#fff'
        fillRule='evenodd'
        stroke='#fff'
        d='M33.5 19.5A1.5 1.5 0 0 1 35 18h12a1.5 1.5 0 0 1 1.5 1.5V38H35a1.5 1.5 0 0 1-1.5-1.5v-17Z'
        clipRule='evenodd'
      />
      <path
        stroke='#fff'
        d='M48.5 28a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8.5A1.5 1.5 0 0 1 51 38h-2.5V28Z'
        clipRule='evenodd'
      />
      <path stroke='#4B5563' strokeLinecap='round' d='M36.5 22h4M36.5 25.5h6' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M31 16h24v24H31z' />
      </clipPath>
    </defs>
  </svg>
);
export default LiveNewsIcon;
