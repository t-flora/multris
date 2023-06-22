import Cell from './Cell';
import { BoardShape } from "../lib/types";

interface Props {
    currentBoard: BoardShape;
}

export default function Board({ currentBoard }: Props) {
    return (
        <div className="board">
            {currentBoard.map((row, rowIdx) => (
                <div className="row" key={`${rowIdx}`}>
                    {row.map((cell, colIdx) => (
                        <Cell key={`${rowIdx}-${colIdx}`} type={cell} />
                    ))}
                </div>
            ))}
        </div>
    )
}