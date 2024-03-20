import * as React from 'react';
const Tables = props => (
  <svg xmlns='http://www.w3.org/2000/svg' width={86} height={56} fill='none' {...props}>
    <rect width={24} height={20} x={31} y={18} fill='#fff' rx={2} />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M31 20a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16.889c0 .295-.105.577-.293.786A.952.952 0 0 1 54 38H32a.952.952 0 0 1-.707-.325 1.177 1.177 0 0 1-.293-.786V20Z'
    />
    <path
      stroke='#4B5563'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M31 27h24M30.99 32.5h24.02M35.44 18v20'
    />
  </svg>
);
export default Tables;
