import { Action, Block, BoardState } from '../lib/types';

export function getRandomBlock(): Block {
    const blockVals = Object.values(Block);
    return blockVals[Math.floor(Math.random()*blockVals.length)] as Block;
}

function boardReducer(state: BoardState, action: Action): BoardState {
    let newState = {... state};
    // match cases to actions for updates
    return newState;
}