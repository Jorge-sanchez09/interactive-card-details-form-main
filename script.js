const form =  document.querySelector("form"); 
const formInputs = document.querySelectorAll("input");

const thanks = document.querySelector(".hidden");
const continueBtn = thanks.querySelector("button");

const cardObj = { };

form.addEventListener("submit", (e) => {
    e.preventDefault();  

    if(!validateForm())
        return;
    
    form.classList.add("hidden");
    thanks.classList.replace("hidden", "thanks");
});

formInputs.forEach(input => {
    input.addEventListener("input", () => {
        cardObj[input.name] = input.value;

        if(input.name !== "name"){
            cardObj[input.name] = input.value.replaceAll(" ", "");
            input.value = cardObj[input.name];

            if(input.name === "number")
                input.value = cardObj[input.name].match(/.{1,4}/g).join(" ");
        }

        const cardInfo = document.getElementById(`card-${input.name}`);
        cardInfo.textContent = input.value;
    });
});

continueBtn.addEventListener("click", (() => {
    form.classList.remove("hidden");
    thanks.classList.replace("thanks", "hidden")
    form.reset();
}));

const validateForm = () => {
    let validForm = true;
    formInputs.forEach(input => {
        const inputContainer = fieldAlert(input);

        if(input.value.trim() === ""){
            inputContainer("Can't be blank");
            validForm = false;
        }
        else if((input.name !== "name" && input.name !== "number") && isNaN(input.value) || (input.name === "number" && isNaN(cardObj.number))){
            inputContainer("Wrong format, numbers only");
            validForm = false;
        }
        else if(input.name === "number" && !testExp(cardObj.number, regExpressions.creditCard)){
            inputContainer("Invalid card number, must be 16 digits");
            validForm = false;
        }
        else if(input.name === "expiration-month" && !testExp(input.value, regExpressions.month)){
            inputContainer("Invalid month");
            validForm = false;
        }
        else if(input.name === "expiration-year" && !testExp(input.value, regExpressions.year)){
            inputContainer("Invalid year");
            validForm = false;
        }
        else if(input.name === "cvc" && !testExp(input.value, regExpressions.cvc)){
            inputContainer("Invalid CVC, must be 3 digits");
            validForm = false;
        }
    });

    return validForm;
}

const fieldAlert = input => {
    container = input.closest(".form-group");
    cleanAlerts(container);

    return function(message){
        container.querySelector(".input-container").classList.add("error-input");

        const invalidParagraph = document.createElement("p");
        invalidParagraph.classList.add("error-paragraph");
        invalidParagraph.textContent = message;
    
        container.appendChild(invalidParagraph);
    }
}

const cleanAlerts = container => {
    container.querySelector(".input-container").classList.remove("error-input");

    const invalidParagraph = container.querySelector(".error-paragraph");
    
    if(invalidParagraph)
        invalidParagraph.remove();
}

const regExpressions = {
    creditCard: /^\d{16}$/,
    month: /(^0?[1-9]$)|(^1[0-2]$)/,
    year: /^(\d?[1-9]|[1-9]0)$/,
    cvc: /^\d{3}$/
}

const testExp = (str, regExp) => regExp.test(str);