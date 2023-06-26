'use client';
import Cell from './Cell';
import { BoardShape } from "../lib/types";

interface BoardProps {
    currentBoard: BoardShape,
}

export default function Board({ currentBoard }: BoardProps ) {

    return (
        <div className="flex flex-col">
            {currentBoard.map((row, rowIdx) => (
                <div className="flex" key={`${rowIdx}`}>
                    {row.map((cellType, colIdx) => (
                        <Cell key={`${rowIdx}-${colIdx}`} type={cellType} />
                    ))}
                </div>
            ))}
        </div>
    )
}