import React from 'react'

export default function GameBoard() {
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
                <div className='flex-1
                                bg-slate-100
                                '>
                    <div>
                        GameBoard
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
