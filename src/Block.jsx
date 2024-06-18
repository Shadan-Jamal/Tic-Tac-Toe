import React from 'react';

function Block({shape, setShape}) {
  return (
    <div className='text-6xl hover:cursor-pointer'>
      <p className='text-red-400 font-serif drop-shadow-2xl rounded-lg px-1'>X</p>  
    </div>
  )
}

export default Block;