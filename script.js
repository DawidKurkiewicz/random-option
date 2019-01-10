const options = []


const showOne = () => {
    const index = Math.floor(Math.random() * options.length)
    document.querySelector("h1").textContent = options[index]
}

const addOption = (e) => {
    e.preventDefault()
    const input = document.querySelector("input")
    options.push(input.value)
    alert(`option "${input.value}" added`)
    input.value = ""

}

const resetOptions = (e) => {
    e.preventDefault()
    options.length = 0
    document.querySelector("h1").textContent = ""
}

const showOptions = () => {
    alert(options.join(" --- "))
}
document.querySelector(".add")
    .addEventListener("click", addOption)

document.querySelector(".clean")
    .addEventListener("click", resetOptions)

document.querySelector(".showOptions")
    .addEventListener("click", showOptions)

document.querySelector(".showOne")
    .addEventListener("click", showOne)