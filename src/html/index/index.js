import "./index.css";
import "../../js/alert.js";
const editor = document.getElementById('editor');
const look = document.getElementById('look');
look.addEventListener('click', ()=>{
    location.href = '../look'
})
editor.addEventListener('click', ()=>{
    location.href = '../main'
})