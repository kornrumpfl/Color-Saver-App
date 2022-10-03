import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import './MainCard.css';

function MainCard({onAdd}){
    function onSubmit(event){
        event.preventDefault();
        onAdd(color);
    }

const [color, setColor] = useState("#aabbcc");

return(
        <form onSubmit={onSubmit}>
        <div className="div__MainCard" style={{backgroundColor:color}}>
            <HexColorPicker color={color} onChange={setColor} />
            <HexColorInput 
                prefixed={true}
                color={color}
                onChange={setColor} />
            <button 
                type="submit"
                >
                Add
            </button>
        </div>
        </form>
        );
}

export default MainCard;