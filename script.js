const input = document.getElementById("email");
const btn = document.getElementById("btn");
const mail = document.getElementById("mail");
const dismiss = document.getElementById("dismiss");

const content = document.getElementsByClassName("content");
const regards = document.getElementsByClassName("regards");
const img = document.getElementsByClassName("img");
const msg = document.getElementsByClassName("msg");

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const error = (message) => {
    input.classList.add("error");
    msg[0].textContent = message;
    setTimeout(() => {
        input.classList.remove("error");
        msg[0].textContent = "";
    }, 1500);
}

const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value) {
        error("Email can't be blank");
    } else if (!input.value.match(pattern)) {
        error("Valid email required");
    } else {
        mail.innerText = input.value;
        img[0].classList.add("animate__animated", "animate__fadeOut");
        content[0].classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => {
            img[0].classList.add("hidden");
            content[0].classList.add("hidden");
        }, 150);
        setTimeout(() => {
            regards[0].classList.remove("hidden");
            regards[0].classList.add("animate__animated", "animate__fadeIn");
        }, 150);
    }
}

btn.addEventListener("click", (e) => onSubmit(e));
dismiss.addEventListener("click", () => window.location.reload());