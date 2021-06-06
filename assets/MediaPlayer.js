class MediaPlayer {
    constructor(videoDict) {
        if (videoDict.el instanceof HTMLMediaElement != false) {
            this.fail_ = false
            
            this.video_ = videoDict.el
            this.plugins_ = videoDict.plugins || []

            this.initPlugins_()
            
            return
        }
        console.error("This is not a media element")
        this.fail_ = true
    }

    initPlugins_ = () => {
        this.plugins_.forEach(plugin =>{
            plugin.run(this)
        })
    }

    play = () => {
        this.video_.play()
    }

    pause = () => {
        this.video_.pause()
    }

    togglePlay = () => {
        if (!this.fail_) {
        if (this.video_.paused) {
            this.video_.play()
            return
        }
        this.video_.pause()
        return
        }
        console.error("Error with the creation of the class")
    }

    mute = () => {
        this.video_.muted = true
    }

    toggleAudio = () => {
        this.video_.muted ^= 1
    }
}
// to be called in index.js
export default MediaPlayer