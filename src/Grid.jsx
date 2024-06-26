import React,{ useEffect, useState } from 'react';
import Block from './Block';

function Grid() {
  const [turnText,setTurnText] = useState("X's Turn to play.");
  const [turn,setTurn] = useState(true);
  const [shapes,setShapes] = useState(Array(9).fill(null));

  const handleClick = (i) =>{
    const winner = checkWinner(shapes);
    if(shapes[i] || checkWinner(shapes)){
      setTurnText(`The winner is ${winner} !!`);
      return;
    }
    // else if(!shapes.includes(null))
    //   setTurnText(()=>'It is a draw');
    const nextShapes = shapes.slice();
    if(shapes[i] == null){
      nextShapes[i] = turn ? 'X' : 'O';
      setShapes(nextShapes);
      setTurn(!turn);
    }
    if(!winner){
      turn ? setTurnText("O's Turn to play.") : setTurnText("X's Turn to play.");
    }
  }
  
  
  function checkWinner(shapes) {
    const winnerBlocks = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,7]
    ];
    
    for(let i=0;i<winnerBlocks.length;i++){
      const [a,b,c] = winnerBlocks[i];
      if(shapes[a] && shapes[a] === shapes[b] && shapes[a] === shapes[c])
        return shapes[a];
    }
    return null;
  }
  
  // useEffect(() => {
  //   console.log(checkWinner);
  // },[checkWinner])
  return (
    <>
    <nav className='fixed top-0 w-screen text-center'>
      <h1 className='block mx-auto lg:w-80 text-red-50 font-serif font-extrabold text-2xl lg:text-4xl p-3 bg-red-400 drop-shadow-2xl mt-5 rounded-lg'>Tic-Tac-Toe</h1>
    </nav>
    <div className='grid grid-cols-3 grid-rows-3 place-content-evenly place-items-stretch p-6 h-96 w-96 absolute inset-0 m-auto'>
      {
      shapes.map((shape,index) =>{
        return <div key={index} className='h-28 w-28 border-2 border-white'>
        <Block 
        key={index} 
        shape={shape} 
        onBlockClick={() => handleClick(index)} />
      </div>
      })}
    </div>

    {<div className='text-red-50 font-serif font-extrabold text-xl lg:text-4xl drop-shadow-2xl rounded-lg col-span-3 row-span-3 absolute bottom-44 left-[620px]'>
      {<p>{turnText}</p>}
    </div>}
    </>
  )
}

export default Grid;