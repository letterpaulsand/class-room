import "./index.css";
import "../../js/alert.js";
const editor = document.getElementById('editor');
const look = document.getElementById('look');
const setting = document.getElementById('setting');
const documents = document.getElementById('document') 
look.addEventListener('click', ()=>{
    location.href = './look'
})
editor.addEventListener('click', ()=>{
    location.href = './main'
})
setting.addEventListener('click', ()=>{
    location.href = './setting'
})
documents.addEventListener('click', ()=>{
    location.href = './document'
})