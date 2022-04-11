const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (firstname.value === '' || firstname.value == null) {
        messages.push('name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
