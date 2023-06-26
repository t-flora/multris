'use client';
import { useMultris } from '@/lib/hooks';
import GameBoard from '../components/GameBoard';
import { getEmptyBoard } from '@/lib/boardFunctions';

export default function Home() {

    // const emptyBoard = getEmptyBoard();
    const {board, startGame, isPlaying} = useMultris();

    return (
      <div className='flex justify-center mt-8'>
        <GameBoard currentBoard={board} />
        <div className='controls'>
          {isPlaying ? null : (
            <button onClick={startGame}>start game</button>
          )}
        </div>
      </div>
    )
}
