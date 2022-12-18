export const ROW_SIZE = 18;
export const COL_SIZE = 10;

export const LEFT_KEY = 37; /* left arrow */
export const ROTATE_KEY = 90; /* z */
export const RIGHT_KEY = 39; /* right arrow */
export const DOWN_KEY = 40; /* down arrow */
export const STOP_KEY = 32; /* space */

export const initBoard = (row: number, column: number) => {
  let board = [];
  for (let i = 0; i < row; i++) {
    let _row: any = [];
    for (let j = 0; j < column; j++) {
      _row.push(0);
    }
    board.push(_row);
  }
  return board;
};

export const BLOCKS = [
  /* --------------- */
  [
    [
      // I
      [1, 1, 1, 1],
    ],
    [[1], [1], [1], [1]],
  ],
  [
    /* --------------- */

    [
      // T
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
  ],
  [
    /* --------------- */
    [
      // L
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 1],
      [0, 1],
      [0, 1],
    ],
  ],
  [
    /* --------------- */
    [
      // J
      [1, 0, 0],
      [1, 1, 1],
    ],
    [
      [1, 1],
      [1, 0],
      [1, 0],
    ],
    [
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
  ],
  [
    /* --------------- */
    [
      // Z
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  ],
  [
    /* --------------- */
    [
      // S
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  ],
  [
    /* --------------- */
    [
      // O
      [1, 1],
      [1, 1],
    ],
  ],
];
