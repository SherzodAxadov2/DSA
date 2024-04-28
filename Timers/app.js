import {debounce} from "./debounce";

// debounce(()=>{
//     console.log('hello world')
// }, 1000)
//
// debounce(()=>{
//     console.log('hello world')
// }, 2000)

// const interval = setInterval(()=>{
//     console.log('hey it is setInterval')
// }, 1000)
//
// setTimeout(()=>{
//     clearInterval(interval)
// },3000)


const searchInput = document.getElementById('search')
const text = document.getElementById('text')

function debouncedInput (val) {
    debounce(()=>{
        text.textContent = val
    }, 500)
}

searchInput.addEventListener('input', (e) => debouncedInput(e.target.value))