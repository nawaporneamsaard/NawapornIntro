import React, { Component } from 'react'
import ReactPlayer from "react-player";


class Videoplayer extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'https://www.youtube.com/watch?v=3byqCmVghyw&ab_channel=KANAKAPAPAEMG'
            width='100%'
            height='600px'
            controls = {true}

            config={{
                youtube: {
                    playerVars: {
                        volume: 1,
                        muted: false,
                        autoPlay: 1,
                        playinline: 1,
                        modestbranding: 1,
                    }
                },
            }}

            />
        </div>
        )
    }
}

export default Videoplayer;