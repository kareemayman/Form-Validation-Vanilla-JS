const username = document.querySelector('#user')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-pass')
const submit = document.querySelector('input[type=submit]')

submit.addEventListener('click', e => {

    if (
        !(checkUserName() && checkEmail() 
        && checkPass() && checkConfirm() )
    ) {

        e.preventDefault()
    }
})

function checkUserName() {
    let value = username.value

    if (value === "" || value.length < 3) {

        username.closest('div').classList.add("user-error")
    } else {

        username.closest('div').classList.remove('user-error')
    }
}