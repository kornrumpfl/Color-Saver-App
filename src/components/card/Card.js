import "./Card.css";

function Card({colorCode}){
return(
    <button className="cards" style={{backgroundColor:colorCode}} onClick={()=>{navigator.clipboard.writeText({colorCode})}}>
            <p style={{backgroundColor:"white"}} >
            {colorCode}
            </p>
    </button>
)}

export default Card;

