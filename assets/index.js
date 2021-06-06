class MediaPlayer {
    constructor(videoDict) {
        if (videoDict.el instanceof HTMLMediaElement != false) {
        this.video_ = videoDict.el
        this.fail_ = false
        return
        }
        console.error("This is not a media element")
        this.fail_ = true
    }

    play = () => {
        this.video_.play()
    }

    pause = () => {
        this.video_.pause()
    }

    toggle = () => {
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
}

const video = document.querySelector('video')
const button = document.querySelector('button')
const player = new MediaPlayer({el: video}) //as a dictionary

button.onclick = () => player.toggle()
