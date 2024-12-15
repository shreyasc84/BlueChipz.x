document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    // Toggle menu visibility on click
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});