import Square from "./Square"; 

export default function Gato() {

    const colores = ['white', 'blue'];
    const cuadros = Array(9).fill(null);

    return (
        <div className="grid grid-cols-3 gap-1">
            {cuadros.map((_, index) => {
                const color = colores[index % 2];   
                return <Square key={index} color={color} />;})
            }
        </div>
    );
}
