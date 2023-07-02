// Imports
const form = document.getElementById("form"),
    card_name = document.getElementById("card_name"),
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

const regards = document.getElementById("regards");

// Set

card_name.addEventListener("input", () => {
    display_name.innerText = card_name.value;
});

card_number.addEventListener("input", () => {
    const regex = /(.{4})/g;
    const max = 16;
    const string = card_number.value.slice(0, max);
    const format = string.replace(regex, "$1 ");
    display_no.innerText = format.toString();
    card_number.value = string;
});

date_month.addEventListener("input", () => {
    const value = date_month.value.slice(0, 2);
    display_month.innerText = value.toString();
    date_month.value = value;
});

date_year.addEventListener("input", () => {
    const value = date_year.value.slice(0, 2);
    display_year.innerText = value.toString();
    date_year.value = value;
});

cvc.addEventListener("input", () => {
    const value = cvc.value.slice(0, 4);
    display_cvc.innerText = value;
    cvc.value = value;
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

const setError = (field, input) => {
    input.focus();
    input.classList.add("error");

    const element = document.getElementsByClassName(field);

    for (var i = 0; i < element.length; i++) {
        const msg = element[i].getElementsByClassName("error_msg");
        msg[0].classList.remove("hidden");
        setTimeout(() => {
            msg[0].classList.add("hidden");
        }, 1500);
    }

    setTimeout(() => {
        input.classList.remove("error");
    }, 1500);
}

const validateSubmit = (e) => {
    e.preventDefault();
    if (!card_name.value) {
        setError("field_name", card_name);
    } else if (!card_number.value) {
        setError("field_number", card_number);
    } else if (!date_month.value) {
        setError("field_date", date_month);
    } else if (!date_year.value) {
        setError("field_date", date_year);
    } else if (!cvc.value) {
        setError("field_cvc", cvc);
    } else {
        form.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
            regards.classList.remove("hidden");
            regards.classList.add('animate__animated', 'animate__zoomIn');
        }, 250);
        form.classList.add("hidden");
        regards.classList.remove('animate__animated', 'animate__zoomIn');

        document.location.reload();
    }
}

submit.addEventListener("click", validateSubmit);

// Git Visualized