const send_icon = document.querySelector(".send")

function checkEmptyInput() {
    const msg_box_value = document.querySelector(".message-box input").value

    if (msg_box_value != "") {
        send_icon.style.display = "flex"
    } else {
        send_icon.style.display = "none"
    }
}

function sendMessage() {
    const popup = document.querySelector(".pop-up")
    popup.style.display = "initial"

    document.querySelector(".pop-up span").innerText = "Mensagem enviada!"

    setTimeout(function(){
        popup.style.display = "none"
    }, 3000);
}

function clearInput() {
    document.querySelector(".message-box input").value = ""

    checkEmptyInput()
}