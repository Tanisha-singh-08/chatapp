import React from "react";


const Message=()=>{
    return(
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/16118871/pexels-photo-16118871/free-photo-of-a-woman-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                
                alt=""/>
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p 
                // style={{backgroundColor:"white",padding:"10px 20px",
                // borderRadius:"0px 10px 10px 10px"}}
                >hello</p>
                <img src="https://images.pexels.com/photos/16118871/pexels-photo-16118871/free-photo-of-a-woman-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
            </div>

        </div>
    )
}


export default Message;