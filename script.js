const input = document.getElementById('input')
const btn = document.getElementById('btn')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!input.value.includes('@')) {
        const errorMsg = document.createElement('p')
        errorMsg.textContent = 'Ooops! Please check your email'
        form.append(errorMsg)
        console.log(errorMsg)
    }
})

