import { BoardShape, Block } from "./types";

export const BOARD_HEIGHT = 20;
export const BOARD_WIDTH = 10;

export function getEmptyBoard(height = BOARD_HEIGHT, width = BOARD_WIDTH): BoardShape {
  return Array(height)
    .fill(Array(width).fill(Block.EMPTY))
}