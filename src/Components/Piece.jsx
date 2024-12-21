import React from 'react'

export default function Piece({icon, color, grab}) {
  return (
    <div className={`${color} flex-1`} draggable={true} onDragStart={grab}>
        <img src={icon} alt="piece" draggable={false}/>
    </div>
  )
}
