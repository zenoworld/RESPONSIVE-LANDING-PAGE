
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#5464';
        item.style.color = '#fff';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'transparent';
        item.style.color = '#fff';
    });
});
