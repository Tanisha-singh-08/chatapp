import React from "react";

const Search=()=>{
    return(
          <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/16118871/pexels-photo-16118871/free-photo-of-a-woman-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
          </div>
    )
}
export default Search;