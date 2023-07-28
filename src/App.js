import "./App.css";
import React from "react";
// import Box from "./components/Box";
import Board from "./components/Board";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Reset from "./components/Reset";
import Title from "./components/Title";
function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplaying] = useState(true);
  const [scores, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameover, setGameover] = useState(false);
  // const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      // console.log(idx);
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updateBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScore({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScore({ ...scores, xScore });
      }
    }
    setBoard(updateBoard);
    setXplaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log(board[x]);
        window.alert(`${board[x]} WINS`);
        setGameover(true);
        return board[x];
      }
    }
  };
  const resetBoard = () => {
    setGameover(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Title></Title>
      <Scoreboard scores={scores} xplaying={xPlaying}></Scoreboard>
      <Board
        board={board}
        onClick={gameover ? resetBoard : handleBoxClick}
      ></Board>
      <Reset resetBoard={resetBoard}></Reset>
    </div>
  );
}

export default App;
