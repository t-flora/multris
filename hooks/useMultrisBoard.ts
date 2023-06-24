import { Block } from '../lib/types';

export function getRandomBlock(): Block {
    const blockVals = Object.values(Block);
    return blockVals[Math.floor(Math.random()*blockVals.length)] as Block;
}