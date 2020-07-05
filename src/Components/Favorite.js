import React, { useState } from 'react'
import Toggler from "./Toggler"
import "../styles/TabHeart.css"

function Favorite() {
    return (
        <Toggler render={(on, toggle) => (
            <div className="tab_heart">
                <h5>Save to "My list"</h5>
                <h1>
                    <span 
                        onClick={toggle}
                    >
                        {on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        )}>
        </Toggler>
        
    )
}

export default Favorite