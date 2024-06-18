import React from 'react';

function Block({shape, setShape}) {
  return (
    <div className='text-6xl hover:cursor-pointer h-full flex items-center justify-center'>
      <p
      onClick={() => shape === "X" ? setShape("O") : setShape("X")} 
      className='text-red-400 font-serif drop-shadow-2xl rounded-lg px-1'>{shape}</p>  
    </div>
  )
}

export default Block;