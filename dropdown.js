function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function closeDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}

document.querySelector('.dropdown').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
