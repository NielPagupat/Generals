import React from 'react'

export default function Piece({icon, color}) {
  return (
    <div className={`${color} flex-1`}>
        <img src={icon} alt="piece" />
    </div>
  )
}
