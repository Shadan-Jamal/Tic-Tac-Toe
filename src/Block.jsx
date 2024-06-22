import React from 'react';

function Block({shape,onBlockClick}) {
  return (
    <div 
    onClick={onBlockClick}
    className='text-6xl hover:cursor-pointer h-full flex items-center justify-center'>
      <p
      className='text-red-400 font-serif drop-shadow-2xl rounded-lg px-1 high'>{shape}</p>  
    </div>
  )
}

export default Block;