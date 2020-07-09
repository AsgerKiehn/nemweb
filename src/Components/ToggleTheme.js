import React from "react"
import App from "../App"
import "../styles/DayNightMode.css"

function ToggleTheme(props) {

    return (
        <div className="toggleTheme">
            <span className="toggle">
                <input 
                    onChange={() => props.setDarkMode(prevMode => !prevMode)}
                    checked={props.darkMode}
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                />
            <label htmlFor="checkbox"/>
            </span>
        </div>
    )
}

export default ToggleTheme 