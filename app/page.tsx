import GameBoard from '../components/GameBoard';
import { getEmptyBoard } from '@/lib/boardFunctions';

export default function Home() {

    const emptyBoard = getEmptyBoard();

    return (
      <>
        <GameBoard currentBoard={emptyBoard} />
      </>
    )
}
