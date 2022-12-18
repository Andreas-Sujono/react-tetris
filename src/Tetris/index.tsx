/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ROW_SIZE, COL_SIZE, initBoard, BLOCKS } from "./utils";
import "./styles.css";

function Tetris() {
  const [board, setBoard] = useState(initBoard(ROW_SIZE, COL_SIZE));
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const [activeRotateIndex, setActiveRotateIndex] = useState(0);
  const [xStart, setXStart] = useState(Math.floor(ROW_SIZE / 2));
  const [yStart, setYStart] = useState(0);

  const moveBlock = (x = 0, y = 0) => {
    //move(x,y)
  };

  const detectCollision = () => {};

  const detectCompleteLine = () => {};

  const resetGame = () => {
    setBoard(initBoard(ROW_SIZE, COL_SIZE));
    initStartBlock();
  };

  const initStartBlock = () => {
    const newBlockIndex = Math.floor(Math.random() * BLOCKS.length);
    setActiveBlockIndex(newBlockIndex);
    setActiveRotateIndex(0);
    setXStart(Math.floor(ROW_SIZE / 2));
    setYStart(0);
  };

  const rotateBlock = () => {
    let currentBlock = BLOCKS[activeBlockIndex];
    let nextRotateIndex = (activeRotateIndex + 1) % currentBlock.length;
    setActiveRotateIndex(nextRotateIndex);
  };

  return (
    <div className="tetris">
      <h1> Tetris</h1>

      <div className="tetris-board-container">
        {board.map((rows, idx1) => (
          <div key={idx1} className="row">
            {rows.map((row: any, idx2: number) => (
              <div className="col" key={`${idx1}_${idx2}`}>
                {idx2}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tetris;
