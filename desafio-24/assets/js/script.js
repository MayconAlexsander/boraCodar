const color_preview = document.querySelector(".preview")
const slide_color = document.querySelector(".slide-color input")
const slide_brightness = document.querySelector(".slide-brightness input")
const slide_contrast = document.querySelector(".slide-contrast input")
const slide_color_THUMB = document.querySelector(".slide-color input")

slide_color.addEventListener("input", function() {
    const hue = this.value
    const color = `hsl(${hue}, 100%, 50%)`

    color_preview.style.backgroundColor = color
    color_preview.style.boxShadow = `0 0 5.3rem 1.3rem ${color}`
    slide_color_THUMB.style.setProperty("--slider-thumb-color", `${color}`)
})

slide_brightness.addEventListener("input", function() {
    const brightness = this.value
    color_preview.style.filter = `brightness(${brightness}%)`
})

slide_contrast.addEventListener("input", function() {
    const contrast = this.value
    color_preview.style.filter = `contrast(${contrast}%)`
})