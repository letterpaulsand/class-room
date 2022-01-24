const right = document.getElementById('right');
const select = document.getElementById('select');
const left = document.getElementById('left');
right.addEventListener('click', ()=>{
    select.style.display = 'none';
    left.style.display = 'block';
});
left.addEventListener('click', ()=>{
    left.style.display = 'none';
    select.style.display = 'flex';
})