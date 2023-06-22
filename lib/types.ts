
export enum Block { // This will be changed when we generate multiminos with different numbers of pieces
    I = "I",
    J = "J",
    T = "T",
    S = "S",
    L = "L",
    O = "O",
    Z = "Z",
}

export enum EmptyCell {
    Empty = "Empty",
}

export type CellOptions = Block | EmptyCell;

export type BoardShape = CellOptions[][]; // Matrix of cells, either filled or empty