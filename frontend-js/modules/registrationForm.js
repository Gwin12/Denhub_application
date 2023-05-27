import axios from "axios"

export default class RegistrationForm {
    constructor() {
        this.form = document.querySelector("#registration-form")
        this.allField = document.querySelectorAll("#registration-form .form-control")
        this.insertValidationElements()
        this.username = document.querySelector("#username-register")
        this.username.previousValue = ""
        this.email = document.querySelector("#email-register")
        this.email.previousValue = ""
        this.password = document.querySelector("#password-register")
        this.password.previousValue = ""
        this.username.isUnique = false
        this.email.isUnique = false
        this.events()
    }

    //events
    events() {
        this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.formSubmitHandler()
        })

        this.username.addEventListener("keyup", () => {
            this.isDifferent(this.username, this.usernameHandler)
        })

        this.email.addEventListener("keyup", () => {
            this.isDifferent(this.email, this.emailHandler)
        })

        this.password.addEventListener("keyup", () => {
            this.isDifferent(this.password, this.passwordHandler)
        })
        this.username.addEventListener("blur", () => {
            this.isDifferent(this.username, this.usernameHandler)
        })

        this.email.addEventListener("blur", () => {
            this.isDifferent(this.email, this.emailHandler)
        })

        this.password.addEventListener("blur", () => {
            this.isDifferent(this.password, this.passwordHandler)
        })
    }

    //methods
    formSubmitHandler() {
        this.usernameImmediately()
        this.usernameAfterdelay()
        this.emailAfterdelay()
        this.passwordImmediately()
        this.passwordAfterdelay()
        
        if (
                this.username.isUnique && 
                !this.username.errors && 
                this.email.isUnique && 
                !this.email.errors &&
                !this.password.errors
            ) {
            this.form.submit()
        }
    }

    isDifferent(el, handler) {
        if (el.previousValue != el.value) {
            handler.call(this)
        }
        el.previousValue = el.value
    }

    usernameHandler() {
        this.username.errors = false
        this.usernameImmediately()
        clearTimeout(this.username.timer)
        this.username.timer = setTimeout(() => this.usernameAfterdelay(), 800)
    }

    paaswordHandler() {
        this.password.errors = false
        this.passwordImmediately()
        clearTimeout(this.password.timer)
        this.password.timer = setTimeout(() => this.passwordAfterdelay(), 800)
    }


    passwordImmediately () {
        if (this.password.length > 50) {
            this.showValidationError(this.password, "Password cannot exceed 5 characters")
        }

        if (!this.password.errors) {
            this.insertValidationElements(this.password)
        }
    }

    passwordAfterdelay () {
        if (this.password.value.length < 8) {
            this.showValidationError(this.password, "Password must be at least 8 characters")
        }
    }

    emailHandler() {
        this.email.errors = false
        clearTimeout(this.email.timer)
        this.email.timer = setTimeout(() => this.emailAfterdelay(), 800)
    }

    emailAfterdelay() {
        if (!/^\S+@\S+$/.test(this.email.value)) {
            this.showValidationError(this.email, "You must provide a valid email address")
        }

        if (!this.email.errors) {
            axios.post('/doesEmailExist', {email: this.email.value}).then((response) => {
                if (response.data) {
                    this.email.isUnique = false
                    this.showValidationError(this.email, " That email is already been used")
                } else {
                    this.email.isUnique = true
                    this.hideValidationError(this.email)
                }
            }).catch(() => {
                console.log("try again later")
            })
        }
    } 

    usernameImmediately() {
        if (this.username.value != "" && !/^([a-zA-Z0-9]+)$/.test(this.username.value)) {
           this.showValidationError(this.username, "Username can only contain letters and numbers")
        }
        if (this.username.value.length > 30) {
            this.showValidationError(this.username, "Username cannot exceed 30 characters")
        }
        if (!this.username.errors) {
            this.hideValidationError(this.username)
        }
    }


    showValidationError(el, message) {
        //remember to check 'nextElementSibling'
        el.nextElementSibling.innnerHTML = message
        el.nextElementSibling.classList.add("liveValidateMessage--visible")
        el.errors = true
    }

    hideValidationError(el) {
        el.nextElementSibling.classList.remove("liveValidateMessage--visible")

    }

    usernameAfterdelay() {
        if (this.username.value.length < 3) {
            this.showValidationError(this.username, "Username must be atleast 3 characters")
        }

        if (!this.username.errors) {
            axios.post('/doesUsernameExist', {username: this.username.value}).then((response) => {
                if (response.data) {
                    this.showValidationError(this.username, "That username is already taken")
                    this.username.isUnique = false
                } else {
                    this.username.isUnique = true
                    this.hideValidationError(this.username)
                }
            }).catch(() => {
                console.log("try again later")
            })
        }
    }

    insertValidationElements() {
        this.allField.forEach(function(el) {
            el.insertAdjacentHTML("afterend", '<div class="alert alert-danger small liveValidateMessage"></div>')
        })
    }
}