import React from "react";
import Cam from "../Cam.png";
import Add from "../Add.png";
import More from "../More.png";
import Messages from "./Messages";
import Input from "./Input";


const Chat=()=>{
    return(
        <div className="chat">

            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={Cam} width={50} height={50}  alt=""/>
                    <img src={Add} width={20}  height ={30} alt=""/>
                    <img src={More} width={20} height={40} alt=""/>
                </div>
            </div>
               <Messages/>
               <Input/>
             </div>
    
    )
}

export default Chat;