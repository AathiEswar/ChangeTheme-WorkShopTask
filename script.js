const options = document.querySelectorAll("option");
options.forEach(option =>{
    option.style.backgroundColor = option.value;
    option.style.color = option.value
})






function changeBackgroundColor() {
    let color = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = color;
    document.querySelector(`.${color}`).style.backgroundColor = color;
}
