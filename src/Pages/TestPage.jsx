import React from "react";

const GameBoard = () => {
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
    <div className="bg-slate-200">
      <div className="grid grid-cols-9 gap-1 w-[50rem] h-[50rem] bg-slate-400">
        {board}
      </div>
    </div>
  );
};

export default GameBoard;
