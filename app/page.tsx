import GameBoard from '../components/GameBoard';
import { getEmptyBoard } from '@/lib/boardFunctions';

export default function Home() {

    const emptyBoard = getEmptyBoard();

    return (
      <div className='flex justify-center mt-8'>
        <GameBoard currentBoard={emptyBoard} />
      </div>
    )
}
