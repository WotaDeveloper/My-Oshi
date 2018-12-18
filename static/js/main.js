let audioPlay = (audio,status) => {
    if(audio.paused) {
        audio.play()
        status.innerHTML = "isPlaying..."
    }
    else {
        audio.pause()
        status.innerHTML = ""
    }
}

let natherine = () => {
    let audioNatherine = document.getElementById("natherinemp3")
    let natherineplay = document.getElementById("natherinePlay")
    audioPlay(audioNatherine,natherineplay)
}

let wee = () => {
    let audioWee = document.getElementById("weemp3")
    let weeplay = document.getElementById("weePlay")
    audioPlay(audioWee,weeplay)
    // return audioWee.paused ? audioWee.play() : audioWee.pause()
}

let tarwaan = () => {
    let audioTarwaan = document.getElementById("tarwaanmp3")
    let tarwaanplay = document.getElementById("tarwaanPlay")
    audioPlay(audioTarwaan,tarwaanplay)
}