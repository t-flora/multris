
export enum Block { // This will be changed when we generate multiminos with different numbers of pieces
    I = "I",
    J = "J",
    T = "T",
    S = "S",
    L = "L",
    O = "O",
    Z = "Z",
    EMPTY = "Empty",
}

export type BoardShape = Block[][]; // Matrix of cells, either filled or empty
export type BoardState = {
    board: BoardShape,
    activeRowIdx: number,
    activeColIdx: number,
    activeBlock: Block,
    activeShape: boolean[][],
}

type BlockShape = {
    [K in Block]: number[][];
}

type BoolBlockShape = {
    [K in Block]: boolean[][];
}

export const SHAPES: BlockShape = {
    I : [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    J : [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
    ],
    T : [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    S : [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
    ],
    L : [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
    ],
    O : [
        [1, 1],
        [1, 1],
    ],
    Z : [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
    ],
    Empty : [[0]],
}

// Convert numbers to booleans
export const BOOL_SHAPES: BoolBlockShape = {} as BoolBlockShape;
Object.keys(SHAPES).forEach((shapeKey) => {
    const shape = shapeKey as Block;
    BOOL_SHAPES[shape] = SHAPES[shape].map(row => row.map(value => Boolean(value)));
});

export enum Actions {
    START,
    MOVE,
    COMMIT,
    DROP,
}

export type ActionType = {
    type: Actions,
    newBoard?: BoardShape,
    newBlock?: Block,
    isPressingRight?: boolean,
    isPressingLeft?: boolean,
    isRotating?: boolean,
}