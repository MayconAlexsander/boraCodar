var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video
let ambient_light
let animation_has_ended = false
const videoId = "qC0vDKVPCrw"

function createAmbientLight() {
    if (!animation_has_ended) return

    ambient_light = new YT.Player("ambient-light", {
        videoId,
        events: {
            onReady: ambientLightReady,
            onStateChange: ambientStateChange
        }
    })
}

window.onYouTubeIframeAPIReady = function () {
    video = new YT.Player("video", {
        videoId,
        events: {
            onStateChange: videoStateChange
        }
    })
}

function videoStateChange(event) {
    switch(event.data) {
        case YT.PlayerState.PLAYING:
            if (!ambient_light) return
            
            ambient_light.seekTo(event.target.getCurrentTime())
            ambient_light.playVideo()
            break
        case YT.PlayerState.PAUSED:
            if (!ambient_light) return

            ambient_light.seekTo(event.target.getCurrentTime())
            ambient_light.pauseVideo()
            break
    }
}

function betterAmbientLight(event) {
    event.target.mute()

    const qualityLevels = event.target.getAvailableQualityLevels()
    if (!qualityLevels && qualityLevels.length && qualityLevels.length > 0) {
        qualityLevels.reverse()
        const lowestLevel = qualityLevels(qualityLevels.findIndex(q => q !== "auto"))
        event.target.setPlaybackQuality(lowestLevel)
    }
}

function ambientLightReady(event) {
    betterAmbientLight(event)
}

function ambientStateChange(event) {
    switch(event.data) {
        case YT.PlayerState.BUFFERING:
        case YT.PlayerState.PLAYING:
            betterAmbientLight(event)
            break
    }
}

const app = document.querySelector(".app")

app.addEventListener("animationend", e => {
    if (e.animationName !== "appear") return

    animation_has_ended = true

    createAmbientLight()
})