// function fieldFunction() {
//     let inputFeild = document.getElementById("message").value;
//     document.getElementById("text").innerHTML = inputFeild;
// }

const message = document.getElementById('message')

message.addEventListener('keyup', function (event) {
    document.getElementById('messageOne').textContent = message.value;
    document.getElementById('messageTwo').textContent = message.value;
})

