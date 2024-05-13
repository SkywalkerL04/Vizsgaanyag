document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('menu-open');
    document.querySelector('.menu-items').classList.toggle('menu-open');
});
