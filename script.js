document.getElementById('see-btn').addEventListener('change', function() {
    document.querySelector('.extra-tracks').style.display = this.checked ? 'grid' : 'none';
});