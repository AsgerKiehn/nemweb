import React from "react";
import StyledNightmode from '../styles/video-styles/StyledNightmode'

const NightMode = ({nightModeCallback, nightMode}) => (
        <StyledNightmode>
            <span>Nightmode: </span>
            <label className="switch">
                <input type="checkbox" chekced={nightMode} onChange={nightModeCallback}/>
                <span className="slider round"/>
            </label>
        </StyledNightmode>
    )

export default NightMode 