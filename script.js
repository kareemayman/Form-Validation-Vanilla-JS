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

    if (!checkPass()) {

        e.preventDefault()
    }

    if (!confirmPass()) {

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

function checkPass() {

    let value = password.value

    if (value === "" || value.length < 6) {

        password.closest('div').classList.add('pass-error')
        return false
    } else {

        password.closest('div').classList.remove('pass-error')
        return true
    }
}

function confirmPass() {

    let value = confirmPassword.value

    if (value === "") {

        confirmPassword.closest('div').classList.remove('pass-match')
        confirmPassword.closest('div').classList.add('empty-pass')
        return false
    } else if ( value !== password.value ) {

        confirmPassword.closest('div').classList.add('pass-match')
        return false
    } else {

        confirmPassword.closest('div').classList.remove('empty-pass')
        confirmPassword.closest('div').classList.remove('pass-match')
        return true
    }
}