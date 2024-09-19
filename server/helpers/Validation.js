const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.%*?&])[A-Za-z\d@$!%.*?&]{8,30}$/
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const usernameRegex = /^[A-Za-z\d]{5,10}$/;
const Validation = {

    isValidPassword(input) {
        return input.match(passwordRegex)
    },
    isValidEmail(input) {
        return input.match(emailRegex)
    },
    isValidUsername(input) {
        return input.match(usernameRegex)
    }

}

module.exports = Validation;