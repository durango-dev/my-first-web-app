document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const body = document.body;
    
    const colors = [
        '#f0f0f0', '#ffcccb', '#d1ffcb', '#cbf5ff', '#f2cbff'
    ];
    
    let currentColorIndex = 0;
    
    colorButton.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        body.style.backgroundColor = colors[currentColorIndex];
    });
});