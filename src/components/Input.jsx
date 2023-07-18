import React from "react";
import Img from "../Img.png";
import Attach from "../Attach.png";
import more from "../More.png";

const Input=()=>{
    return(
        <div className="input">
            <input type="text" placeholder="Type something..."/>
            <div className="send">
                <img src={Attach} width={25} alt=""/>
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Img} width={25} alt=""/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
            
}

export default Input;