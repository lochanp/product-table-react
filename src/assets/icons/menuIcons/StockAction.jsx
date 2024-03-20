import * as React from 'react';
const StockAction = props => (
  <svg xmlns='http://www.w3.org/2000/svg' width={86} height={56} fill='none' {...props}>
    <g stroke='#fff' strokeLinecap='round' strokeMiterlimit={10} clipPath='url(#a)'>
      <path d='M31.5 39.5h23' />
      <path
        fill='#fff'
        d='M35.5 35a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v4.5h3V35ZM41.5 30a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v9.5h3V30ZM47.5 32a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v7.5h3V32ZM53.5 25a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v14.5h3V25ZM34 29a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM40 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM46 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM52 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
      />
      <path d='m35.261 26.45 3.587-2.99M41.424 22.974l3.153 1.051M50.8 18.9l-3.759 4.385' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M31 16h24v24H31z' />
      </clipPath>
    </defs>
  </svg>
);
export default StockAction;
