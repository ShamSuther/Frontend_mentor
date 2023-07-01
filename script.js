// Imports
const card_name = document.getElementById("card_name"),
    card_number = document.getElementById("card_number"),
    date_month = document.getElementById("card_month"),
    date_year = document.getElementById("card_year"),
    cvc = document.getElementById("cvc_number"),
    submit = document.getElementById("submit_btn");

const display_name = document.getElementById("name"),
    display_no = document.getElementById("number"),
    display_month = document.getElementById("month"),
    display_year = document.getElementById("year"),
    display_cvc = document.getElementById("cvc");

// Set

card_name.addEventListener("input", () => {
    display_name.innerText = card_name.value;
});

card_number.addEventListener("input", () => {
    const value = card_number.value.toString();
    display_no.innerText = value;
});

date_month.addEventListener("input", () => {
    const value = date_month.value.toString();
    display_month.innerText = value;
});

date_year.addEventListener("input", () => {
    const value = date_year.value.toString();
    display_year.innerText = value;
});

cvc.addEventListener("input", () => {
    const value = cvc.value.toString();
    display_cvc.innerText = value;
})

// Reset

card_name.addEventListener("blur", () => {
    if (!card_name.value) {
        display_name.innerText = "Jane Appleseed";
    } else {
        return;
    }
})

card_number.addEventListener("blur", () => {
    if (!card_number.value) {
        display_no.innerText = "0000 0000 0000 0000";
    } else {
        return;
    }
})

date_month.addEventListener("blur", () => {
    if (!date_month.value) {
        display_month.innerText = "00";
    } else {
        return;
    }
})

date_year.addEventListener("blur", () => {
    if (!date_year.value) {
        display_year.innerText = "00";
    } else {
        return;
    }
})

cvc.addEventListener("blur", () => {
    if (!cvc.value) {
        display_cvc.innerText = "000";
    } else {
        return;
    }
})

// Submit

const validateSubmit = (e) => {
    e.preventDefault();
    if (!card_name.value) {
        console.log("name");
    } else {
        console.log("clicked");
    }
}

submit.addEventListener("click", validateSubmit);

// Git Visualized