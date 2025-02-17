interface SquareProps {
    color: string;
}

export default function Square({ color }: SquareProps) {
    return <div style={{ backgroundColor: color }}  className="w-32 h-32"></div>;
}   

