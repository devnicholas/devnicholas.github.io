document.getElementById('openMenu').addEventListener('click', function() {
    openMenu();
})
document.getElementById('escapeZone').addEventListener('click', function() {
    closeMenu();
})
const menuItems = document.querySelectorAll('.mobile-menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        closeMenu();
    })
})

function openMenu() {
    document.getElementById('mobileMenu').animate([
        { right: '-100%' },
        { right: '0' }
    ], {
        duration: 200,
        fill: 'forwards'
    });
}
function closeMenu() {
    document.getElementById('mobileMenu').animate([
        { right: '0' },
        { right: '-100%' }
    ], {
        duration: 200,
        fill: 'forwards'
    });
}