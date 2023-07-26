let userNameRef = document.getElementById("username")
let passwordRef = document.getElementById("password")
let submitBtn = document.getElementById("submit")
let messageRef = document.getElementById("message-ref")

let isUsernameValid = () => {
    // name should contain more than 3 chars, should begin with alphabetic chars 
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(userNameRef.value)
}

let isPasswordValid = () => {
    // pass should be atleast 8 chars long. should contain atleast 1 num ,1 special char, 1 lower and upper case
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(passwordRef.value)
}

userNameRef.addEventListener("input", () => {
    if (!isUsernameValid()) {
        messageRef.style.visibility = "hidden"
        userNameRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
    } else {
        userNameRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2"
    }
})

passwordRef.addEventListener("input", () => {
    if (!isPasswordValid()) {
        messageRef.style.visibility = "hidden"
        passwordRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
    } else {
        passwordRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2"
    }
})

submitBtn.addEventListener("mouseover", () => {

    // if either pass or username is invalid then do this 
    if (!isUsernameValid() || !isPasswordValid()) {

        // get the current position of submit btn
        let containerRect = document.querySelector(".container").getBoundingClientRect();

        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);

        // if btn is on left hand side move it to right hand side 
        if (offset <= 100) {
            submitBtn.style.transform = "translateX(16.25rem)"
        } else {
            submitBtn.style.transform = "translateX(0)"
        }
    }
})

submitBtn.addEventListener("click", () => {
    messageRef.style.visibility = "visible"
})