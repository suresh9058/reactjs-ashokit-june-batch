import ColorCard from "./ColorCard";

const colorValues = [
    {
        title: "color1",
        color: "black"
    },
    {
        title: "color2",
        color: "red"
    },
    {
        title: "color3",
        color: "yellow"
    }
];

function ColorContainer() {
    return colorValues.map(color=>
        <ColorCard 
            title={color.title}
            color={color.color}
        />    
    )
}

export default ColorContainer;