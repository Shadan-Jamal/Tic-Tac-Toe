import React,{ useState } from 'react';
import Block from './Block';

function Grid() {
  const [turn,setTurn] = useState(true);
  const [shapes,setShapes] = useState(Array(9).fill(null));

  const handleClick = (i) =>{
    const nextShapes = shapes.slice();
    if(shapes[i] == null){
      nextShapes[i] = turn ? 'X' : 'O';
      setShapes(nextShapes);
      setTurn(!turn);
    }
  }

  return (
    <>
    <nav className='fixed top-0 w-screen text-center'>
      <h1 className='block mx-auto lg:w-80 text-red-50 font-serif font-extrabold text-2xl lg:text-4xl p-3 bg-red-400 drop-shadow-2xl mt-5 rounded-lg'>Tic-Tac-Toe</h1>
    </nav>
    <div className='grid grid-cols-3 grid-rows-3 place-content-evenly place-items-stretch p-6 h-96 w-96 absolute inset-0 m-auto'>
      {
      shapes.map((shape,index) =>{
        return <div className='h-28 w-28 border-2 border-white'>
        <Block 
        key={index} 
        shape={shape} 
        onBlockClick={() => handleClick(index)
      } />
      </div>
      })}
    </div>

    {<p className='text-red-50 font-serif font-extrabold text-xl lg:text-4xl drop-shadow-2xl rounded-lg col-span-3 row-span-3 absolute bottom-44 left-[620px]'>
      {turn ? "Player X's turn" : "Player O's turn"}
    </p>}
    </>
  )
}

export default Grid;