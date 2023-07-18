import React from "react";

const Navbar=()=>{
    return(
        <>
            <div className="navbar">
                <span className="logo">Lama chat</span>
                <div className="user">
                    <img src="https://images.pexels.com/photos/16118871/pexels-photo-16118871/free-photo-of-a-woman-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
                    <span>John</span>
                    <button>logout</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;