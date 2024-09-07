// JavaScript to handle the "Learn More" button click
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
    });
});
