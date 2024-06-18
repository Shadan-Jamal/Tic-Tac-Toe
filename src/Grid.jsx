import React,{ useState } from 'react';
import Block from './Block';

function Grid() {
  const [shape,setShape] = useState('X');
  return (
    <>
    <nav className='fixed top-0 w-screen text-center'>
      <h1 className='block mx-auto lg:w-80 text-red-50 font-serif font-extrabold text-2xl lg:text-4xl p-3 bg-red-400 drop-shadow-2xl mt-5 rounded-lg'>Tic-Tac-Toe</h1>
    </nav>
    <div className='grid grid-cols-3 grid-rows-3 place-content-center place-items-center h-80 w-80 absolute inset-0 m-auto'>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
      <div className='bg-white h-14 w-14 p-2'>
        <Block shape={shape} setShape={setShape} />
      </div>
    <p className='text-red-50 font-serif font-extrabold text-xl lg:text-4xl drop-shadow-2xl rounded-lg col-span-3 row-span-3'>
      {shape=="X" ? "Player X's turn" : "Player O's turn"}
    </p>
    </div>
    </>
  )
}

export default Grid;