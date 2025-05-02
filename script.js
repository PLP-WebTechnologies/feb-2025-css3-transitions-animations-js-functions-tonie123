// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const animatedBox = document.getElementById('animatedBox');
const triggerAnimation = document.getElementById('triggerAnimation');
const colorPicker = document.getElementById('colorPicker');
const saveColor = document.getElementById('saveColor');

// Load saved preferences
function loadPreferences() {
    const theme = localStorage.getItem('theme') || 'light';
    const boxColor = localStorage.getItem('boxColor') || '#3498db';
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    colorPicker.value = boxColor;
    animatedBox.style.backgroundColor = boxColor;
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Animation trigger
triggerAnimation.addEventListener('click', () => {
    animatedBox.classList.remove('animate');
    void animatedBox.offsetWidth; // Trigger reflow
    animatedBox.classList.add('animate');
});

// Color preference handling
saveColor.addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    localStorage.setItem('boxColor', selectedColor);
    animatedBox.style.backgroundColor = selectedColor;
    
    // Visual feedback animation
    saveColor.style.backgroundColor = selectedColor;
    setTimeout(() => {
        saveColor.style.backgroundColor = '#3498db';
    }, 500);
});

// Initialize preferences on page load
document.addEventListener('DOMContentLoaded', loadPreferences);