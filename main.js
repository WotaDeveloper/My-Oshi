let natherine = () => {
    let audioNatherine = document.getElementById("natherinemp3")
    let natherineplay = document.getElementById("natherinePlay")
    if (audioNatherine.paused) {
        audioNatherine.play()
        natherineplay.innerHTML = "isPlaying..."
    } else {
        audioNatherine.pause()
        natherineplay.innerHTML = ""
    }
}

let wee = () => {
    let audioWee = document.getElementById("weemp3")
    let weeplay = document.getElementById("weePlay")
    if(audioWee.paused) {
        audioWee.play()
        weeplay.innerHTML = "isPlaying..."
    }
    else {
        audioWee.pause()
        weeplay.innerHTML = ""
    }
    // return audioWee.paused ? audioWee.play() : audioWee.pause()
}

let tarwaan = () => {
    let audioTarwaan = document.getElementById("tarwaanmp3")
    let tarwaanplay = document.getElementById("tarwaanPlay")
    if(audioTarwaan.paused) {
        audioTarwaan.play()
        tarwaanplay.innerHTML = "isPlaying..."
    }
    else {
        audioTarwaan.pause()
        tarwaanplay.innerHTML = ""
    }
}