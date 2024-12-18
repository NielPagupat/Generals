import React from 'react'

export default function GameBoard() {

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
      board.push(
        <div
          key={cellKey}
          className={`border p-2 ${rowColor}`}
        >
          
        </div>
      );
    }
  }

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
                    <div className="grid 
                                    grid-cols-9 
                                    gap-1 
                                    w-[45rem] 
                                    h-[45rem] 
                                    bg-slate-400">
                        {board}
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
            <div className='bg-slate-200'>
                <div className='p-5'>
                    <div className='size-80
                                    border
                                    border-black
                                    rounde'>

                    </div>
                </div>
                <div>
                    Pieces
                </div>
            </div>
        </div>
    </div>
  )
}
