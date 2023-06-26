import { getEmptyBoard, getRandomBlock } from '@/lib/boardFunctions';
import { Actions, ActionType, Block, BoardShape, BoardState, BOOL_SHAPES } from '../lib/types';
import { useCallback, useEffect, useReducer, useRef, useState, Dispatch } from 'react';

export function useBoard(): [BoardState, Dispatch<ActionType>] { // Update and fetch board state
    const firstBlock = getRandomBlock();
    const firstShape = BOOL_SHAPES[firstBlock];
    const [boardState, dispatchBoardState] = useReducer(
        boardReducer,
        {
            board: [],
            activeRowIdx: 0,
            activeColIdx: 4,
            activeBlock: firstBlock,
            activeShape: firstShape,
        },
        (emptyState) => { // We pass an initializer function to get an empty board to return to its initial state
            return {
                ...emptyState,
                board: getEmptyBoard(),
            }
        }
    );

    return [boardState, dispatchBoardState]; // return new state
}

function boardReducer(state: BoardState, action: ActionType): BoardState {
    let newState = {... state};
    switch(action.type) {
        case Actions.START: // get a random block and return state with initial settings
            const firstBlock = getRandomBlock();
            return {
                board: getEmptyBoard(),
                activeRowIdx: 0,
                activeColIdx: 4,
                activeBlock: firstBlock,
                activeShape: BOOL_SHAPES[firstBlock],
            }
        case Actions.MOVE:
            break;
        case Actions.COMMIT:
            break;
        case Actions.DROP:
            newState.activeRowIdx++;
            break;
        default:
            const unhandledType: never = action.type;
            throw new Error(`Unhandled action type: ${unhandledType}`);
    }
    // match cases to actions for updates
    return newState;
}

export function useInterval(callback: ()=>void, delay: number | null): void {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        if ( delay==null ) return;

        const intervalId = setInterval(() => callbackRef.current(), delay);
        return () => clearInterval(intervalId);
    }, [delay]);
}

enum TickSpeed { // tick speed will depend on user input, so we need to update the state of the speed according to key presses
    Regular = 800,
}

export function useMultris() {
    const [isPlaying, setIsPlaying] = useState(false); // check for active game
    const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null); // set tick speed

    const [
        { board, activeRowIdx, activeColIdx, activeBlock, activeShape },
        dispatchBoardState,
    ] = useBoard();
    
    const dropTick = useCallback(() => {
        dispatchBoardState({ type: Actions.DROP});
    }, [dispatchBoardState]);

    // useInterval hook for running a drop tick every tickSpeed interval
    useInterval(() => {
        if (!isPlaying) {
            return;
        }
        dropTick();
    }, tickSpeed);

    const startGame = useCallback(() => {
        setIsPlaying(true);
        setTickSpeed(TickSpeed.Regular);
        dispatchBoardState({ type: Actions.START });
    }, [dispatchBoardState]);

    const renderedBoard = structuredClone(board) as BoardShape;
    if (isPlaying) {
        activeShape
            .filter((row) => row.some((isSet) => isSet)) // get `true` values from the shape matrix and discard false values
            .forEach((row: boolean[], rowIdx: number) => { // iterate over the shape matrix and set the appropriate board squares to the active block
                row.forEach((isSet: boolean, colIdx: number) => {
                    if (isSet) {
                        renderedBoard[activeRowIdx + rowIdx][activeColIdx + colIdx] = activeBlock;
                    }
                })
            })
    }

    return {
        board: renderedBoard,
        startGame,
        isPlaying,
    }
}