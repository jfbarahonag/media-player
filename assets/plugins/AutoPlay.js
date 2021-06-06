class AutoPlay {
    constructor(){

    }

    run(player){
        /* For autoplay at the beginning
            the video must be muted */
        player.mute()
        player.play()
    }

}

export default AutoPlay