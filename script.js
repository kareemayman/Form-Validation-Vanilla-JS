const username = document.querySelector('#user')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-pass')
const submit = document.querySelector('input[type=submit]')

submit.addEventListener('click', e => {

    if (!checkUserName()) {

        e.preventDefault()
    }

    if (!checkEmail()) {

        e.preventDefault()
    }
})

function checkUserName() {
    let value = username.value

    if (value === "" || value.length < 3) {

        username.closest('div').classList.add("user-error")
        return false
    } else {

        username.closest('div').classList.remove('user-error')
        return true
    }

}

function checkEmail() {

    let value = email.value

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/igm;

    if (!emailRegex.test(value) || value === "") {

        email.closest('div').classList.add('email-error')
        return false
    } else {

        email.closest('div').classList.remove('email-error')
        return true
    }
}