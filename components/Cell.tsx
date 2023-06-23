import { Block } from '../lib/types';

interface Props {
    type: Block;
}

const colors = {
    [Block.EMPTY]: 'bg-gray-200',
    [Block.T]: 'bg-purple',
    [Block.S]: 'bg-green',
    [Block.Z]: 'bg-red',
    [Block.L]: 'bg-blue',
    [Block.J]: 'bg-orange',
    [Block.I]: 'bg-cyan',
    [Block.O]: 'bg-yellow',
}

export default function Cell({ type }: Props) {
    return <div className={`w-5 h-5 ${colors[type]}`} />;
}