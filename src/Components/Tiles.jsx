import React from 'react'



export default function Tiles({cellKey, rowColor, Piece, onClick, drop}) {
    
    
  return (
    <div
          key={cellKey}
          className={`border p-2 ${rowColor} items-center justify-center flex size-20`}
          onClick={onClick}
          onDrop={(e) => {
            e.preventDefault(); // Prevent default to allow drop
            drop(); // Execute drop logic
          }}
          onDragOver={(e) => e.preventDefault()}
        >
            {Piece}
    </div>
  )
}
