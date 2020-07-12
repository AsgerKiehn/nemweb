import React from "react";
import ReactPlayer from "react-player"
import StyledVideoWrapper from "../styles/video-styles/StyledVideoWrapper"
import StyledVideo from "../styles/video-styles/StyledVideo"


const Video = ({ active, autoplay, endCallback, progressCallback }) => (
        <StyledVideo>
            <StyledVideoWrapper>
                <ReactPlayer
                    width="96.5%"
                    height="97.5%"
                    style={{ position: "absolute", top: "0", paddingLeft: '25px', paddingTop: '45px'}}
                    playing={autoplay}
                    controls={true}
                    url={active.video}
                    onEnded={endCallback}
                    onProgress={progressCallback}
                />
            </StyledVideoWrapper>
        </StyledVideo>
    )

export default Video