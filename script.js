function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});