// import React from 'react'
// import Square from './Square'
// import { useState } from 'react'

// const Board = () => {
//   const [state, setState] = useState(Array(9).fill(null))
//   const [isXTurn, setIsXTurn] = useState(true)
//   const handleClick = (index) => {

//     const copyState = [...state]
//     copyState[index] = isXTurn ? 'X' : 'O'
//     setState(copyState)
//     setIsXTurn(!isXTurn)

//     const checkWinner = () => {

//       const winnerLogic = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//       ];

//       for (let logic of winnerLogic) {
//         const [a, b, c] = logic
//         if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {

//           return true;

//         }
//       }
//       return false


//     };

//     const isWinner = checkWinner()
//     return (

//       <div className='flex '>
//         {isWinner ? (<> someone won </>) : (
//         <>
//           <div>
//             <div onClick={() => { handleClick(0) }} className=''><Square value={state[0]} /></div>
//             <div onClick={() => { handleClick(1) }} className=''><Square value={state[1]} /></div>
//             <div onClick={() => { handleClick(2) }} className=''><Square value={state[2]} /></div>

//           </div>

//           <div >
//             <div onClick={() => { handleClick(3) }} className=''><Square value={state[3]} /></div>
//             <div onClick={() => { handleClick(4) }} className=''><Square value={state[4]} /></div>
//             <div onClick={() => { handleClick(5) }} className=''><Square value={state[5]} /></div>

//           </div>

//           <div >
//             <div onClick={() => { handleClick(6) }} className=''><Square value={state[6]} /></div>
//             <div onClick={() => { handleClick(7) }} className=''><Square value={state[7]} /></div>
//             <div onClick={() => { handleClick(8) }} className=''><Square value={state[8]} /></div>

//           </div>

//         </>
//         )}



//     )
//   }

//   export default Board





import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);


  const handleClick = (index) => {

    if (state[index]) {
      return;

    }



    const copyState = [...state];
    
    if (copyState[index]) return; // Prevent overwriting a square

    copyState[index] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const winner = checkWinner();

  return (
    <div className='flex '>
      {winner ? (
        <> {winner} is  winner <button onClick={() => setState(Array(9).fill(null))} className='w-[100px] h-[30px] flex justify-center items-center bg-blue-300 rounded ml-3 '>play again</button> </>
      ) : (
        <div className='flex'>

          <h4 className=''>Player{isXTurn ? '  X' : 'O'} Please Move</h4>
          <div>





            <div onClick={() => handleClick(0)}><Square value={state[0]} /></div>
            <div onClick={() => handleClick(1)}><Square value={state[1]} /></div>
            <div onClick={() => handleClick(2)}><Square value={state[2]} /></div>
          </div>

          <div>
            <div onClick={() => handleClick(3)}><Square value={state[3]} /></div>
            <div onClick={() => handleClick(4)}><Square value={state[4]} /></div>
            <div onClick={() => handleClick(5)}><Square value={state[5]} /></div>
          </div>

          <div>
            <div onClick={() => handleClick(6)}><Square value={state[6]} /></div>
            <div onClick={() => handleClick(7)}><Square value={state[7]} /></div>
            <div onClick={() => handleClick(8)}><Square value={state[8]} /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
