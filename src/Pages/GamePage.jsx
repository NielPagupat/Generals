import React from 'react'
import GameBoard from '../Components/GameBoard'

export default function GamePage() {
  return (
    <div className='flex 
                    flex-col 
                    h-screen 
                    w-screen'>
      <div className='flex justify-between bg-slate-400 p-2'>
        <div>
          <h1>Generals</h1>
        </div>
        <div className='flex w-1/4 justify-evenly '>
          <div>
            <button>Help</button>
          </div>
          <div>
            <h1>Room Code: </h1>
          </div>
        </div>
      </div>
      <GameBoard />
    </div>
  )
}
