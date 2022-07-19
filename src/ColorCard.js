import './ColorCard.css';
 
function ColorCard({title, color}) {
    return (
        <div className="color-box" style={{backgroundColor: color}}>
            <h2>{title}</h2>
        </div>
    )
}

export default ColorCard;