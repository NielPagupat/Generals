import React from 'react'



export default function Tiles({cellKey, rowColor, Piece}) {
    
    
  return (
    <div
          key={cellKey}
          className={`border p-2 ${rowColor} items-center justify-center flex size-20`}
        >
            {Piece}
    </div>
  )
}
