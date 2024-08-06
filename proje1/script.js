// script.js

// Function to display an alert when a game image is clicked
function handleGameClick(event) {
    const gameName = event.target.nextElementSibling.textContent;
    alert(`You clicked on ${gameName}`);
}

// Add click event listeners to game images
document.querySelectorAll('.game img').forEach(img => {
    img.addEventListener('click', handleGameClick);
});

// Function to display an alert when a table cell is clicked
function handleTableCellClick(event) {
    if (event.target.tagName === 'TD') {
        const itemName = event.target.textContent;
        alert(`You clicked on ${itemName}`);
    }
}

// Add click event listener to the table
document.querySelector('table').addEventListener('click', handleTableCellClick);

// Optional: Add some smooth scrolling to the page for a better user experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
