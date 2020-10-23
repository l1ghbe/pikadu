let menuToggle = document.getElementById('toggle');
let menu = document.querySelector('.sidebar')

menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('visible')
})