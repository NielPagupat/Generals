import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerName, setRoomCode } from '../slice';
export default function LandingPage() {
  const dispatch = useDispatch();
  const player1 = useSelector((state) => state.game.players.player1);
  const player2 = useSelector((state) => state.game.players.player2);

  const [player, setPlayer] = useState({
    playerName: "",
    roomCode:""
  })

  const handleSetPlayer = (key, value) => {
    setPlayer(prevState => ({
      ...prevState,
      [key] : value
    }))
  }

  const JoinGame = () => {
    dispatch(setPlayerName({ player: 'player2', playerName: player.playerName }));
    dispatch(setRoomCode({ player: 'player2', roomCode: player.roomCode }));
  }

  const CreateGame = () => {
    dispatch(setPlayerName({ player: 'player1', playerName: player.playerName }));
  }

  const debugCode = () => {
    console.log(player1)
    console.log(player2)
  }

  return (
    <div className='flex 
                    w-screen 
                    h-screen 
                    justify-center'>

      <div className='flex flex-col items-center'> 
          <h1 className='text-4xl 
                         m-5'>
                          Generals</h1>

          <input onChange={(e)=>handleSetPlayer("playerName", e.target.value)}
                 type='text' 
                 className='border 
                          border-black 
                            p-1 
                            rounded-xl 
                            text-center 
                            m-5' 
                 placeholder='Player Name'/>

          <input onChange={(e)=>handleSetPlayer("roomCode", e.target.value)}
                 type='text' 
                 className='border 
                          border-black 
                            p-1 
                            rounded-xl 
                            text-center' 
                 placeholder='Room Code'/>

          <button  onClick={JoinGame}
                   className='border 
                            border-black 
                              p-2 
                              m-1 
                              rounded-md'>
                               Join Game</button>

          <button   onClick={CreateGame}
                    className='border 
                           border-black 
                             p-2 
                             m-1 
                             rounded-md'>
                              Create Game</button>
          {/* Debug Button */}
          <button   onClick={debugCode}
                    className='border 
                           border-black 
                             p-2 
                             m-1 
                             rounded-md'>
                              Debug</button>
      </div>
    </div>
  )
}
