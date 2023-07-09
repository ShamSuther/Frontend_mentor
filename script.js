const input = document.getElementById("email");
const btn = document.getElementById("btn");

const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value) {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 3000);
    }
}

btn.addEventListener("click", (e) => onSubmit(e));