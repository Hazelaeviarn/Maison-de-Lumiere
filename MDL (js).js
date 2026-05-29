const sections = document.querySelectorAll('.page-section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.style.color = '#ffafcc'; 
        } else {
            item.style.color = '#5e548e'; 
        }
    });
});

document.querySelector('.comment-box button').addEventListener('click', function() {
    alert('Quest Completed! Terima kasih atas komentarnya ✨');
window.onload = function() {
    tampilkanPesan();
};
});