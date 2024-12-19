import React from 'react'
import Tiles from './Tiles';
import Piece from './Piece';
import { useSelector } from 'react-redux';

export default function GameBoard() {

  const player1 = useSelector((state) => state.game.players.player1);
  const player2 = useSelector((state) => state.game.players.player2);

  const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  const board = [];

for (let col = verticalAxis.length - 1; col >= 0; col--) {
  let rowColor = "";

  // Assign color to the entire row based on its range
  if (verticalAxis[col] >= 1 && verticalAxis[col] <= 3) {
    rowColor = "bg-blue-500";
  } else if (verticalAxis[col] >= 6 && verticalAxis[col] <= 8) {
    rowColor = "bg-red-500";
  }

  for (let row = 0; row < horizontalAxis.length; row++) {
    const cellKey = `${horizontalAxis[row]}${verticalAxis[col]}`;
    
    const token1 = player1.tokens.find(
      (t) => t.position.x === row && t.position.y === col
    );
    const token2 = player2.tokens.find(
      (t) => t.position.x === row && t.position.y === col
    );

    console.log(`Cell: ${cellKey}, Token1:`, token1, "Token2:", token2);

    if (token1) {
      // Place player1 token if present
      board.push(
        <Tiles
          cellKey={cellKey}
          rowColor={"bg-white"}
          Piece={<Piece icon={token1.icon} color={player1.color} />}
        />
      );
    } else if (token2) {
      // Place player2 token if present
      board.push(
        <Tiles
          cellKey={cellKey}
          rowColor={"bg-white"}
          Piece={<Piece icon={token2.icon} color={player2.color} />}
        />
      );
    } else {
      // Empty cell
      board.push(<Tiles cellKey={cellKey} rowColor={rowColor} />);
    }
  }
}



  const PrepBoardPlayer1 = []
  const PrepBoardPlayer2 = []

  player1.tokens.map((piece)=> {
    PrepBoardPlayer1.push(<Tiles cellKey={piece.type} rowColor={"bg-white"} Piece={<Piece icon={piece.icon} color={player1.color}/>}/> )
  })
  player2.tokens.map((piece)=> {
    PrepBoardPlayer2.push(<Tiles cellKey={piece.type} rowColor={"bg-white"} Piece={<Piece icon={piece.icon} color={player2.color}/>}/> )
  })

  



  return (
    <div className='h-full 
                    flex'>
        <div className='flex flex-1'>
            <div className='flex
                            flex-col 
                          bg-white 
                            flex-1 
                            h-full '>
                <div className='flex
                                p-2
                                bg-red-300'>
                    <div>
                        <h1>player2</h1>
                    </div>
                </div>
                <div className='flex
                                flex-1
                                bg-slate-100
                                justify-center
                                items-center
                                '>
                    <div className='p-5'>
                      <div className='flex justify-center'>
                        <div className='grid 
                                        grid-cols-4 
                                        gap-1 
                                        '>
                            {PrepBoardPlayer2}
                        </div>
                      </div>
                    </div>
                    <div>
                    <div className="grid 
                                    grid-cols-9 
                                    gap-1
                                    place-items-center
                                    w-[55rem] 
                                    h-[55rem] 
                                    bg-slate-400">
                        {board}
                    </div>
                    </div>
                    
                    <div className='p-5'>
                      <div className='flex justify-center'>
                        <div className='grid 
                                        grid-cols-4 
                                        gap-1 
                                        '>
                            {PrepBoardPlayer1}
                        </div>
                      </div>
                    </div>
                </div>
                <div className='flex
                                p-2
                                bg-blue-300
                                justify-end'>
                    <div>
                        <h1>player1</h1>
                    </div>
                </div>
            </div>
            <div className='bg-slate-200 w-96'>
                <div className=' flex p-5 justify-center'>
                    <div className='size-60
                                    border
                                    border-black
                                    rounded-lg'>

                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
