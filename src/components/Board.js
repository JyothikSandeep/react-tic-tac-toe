import React from "react";
import Box from "./Box";
import "./board.css";
const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        console.log(idx);
        return (
          <Box
            value={value}
            onClick={() => value === null && onClick(idx)}
          ></Box>
        );
      })}
    </div>
  );
};

export default Board;
