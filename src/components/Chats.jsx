import React from "react";

const Chats=()=>{
    return(
         <div className="chats">
            <div className="userChat">
                <img src="https://images.pexels.com/photos/16118871/pexels-photo-16118871/free-photo-of-a-woman-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/16118871/pexels-photo-16118871/free-photo-of-a-woman-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
         </div>
    )
}

export default Chats;