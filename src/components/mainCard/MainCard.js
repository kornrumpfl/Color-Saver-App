import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import './MainCard.css';

function MainCard(){

const [color, setColor] = useState("#aabbcc");

return(
        <div className="div__MainCard" style={{backgroundColor:color}}>
            <HexColorPicker color={color} onChange={setColor} />
            <HexColorInput 
                prefixed={true}
                color={color}
                onChange={setColor} />
            <button onClick={()=>{

            }}>Add</button>
        </div>
        );
}

export default MainCard;