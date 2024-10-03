document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
