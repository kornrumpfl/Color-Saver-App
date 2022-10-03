import "./Card.css";

function Card({colorCode, onCopy, onDelete}){
  
    return(
        
            <form onSubmit={(event)=> event.stopPropagation()}>
            {/* card itself in form of a button so it can be copied to the clipboard */}
            <button className="cards"
                type="submit" 
                style={{backgroundColor:colorCode}} 
                onClick={onCopy}
                >
                    <input className="input__Cards"
                        style={{backgroundColor:"white"}} 
                        type="text"
                        id="inputHex"
                        name="inputHex"
                        Value={colorCode}
                    />
                    {/* Delete button for removing the color card */}
                        <div className="card__button-trashcan">
                            <button
                                className="card__trashcan"
                                aria-label="delete"
                                type="button"
                                onClick={onDelete}
                            >
                            <svg className="card__trashcan-icon" viewBox="0 0 24 24">
                                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                            </button>
                        </div>
            </button>
            </form>
   
)}

export default Card;

