//your JS code here. If required.
// Function to update the width and height display
function updateWindowSize() {
    // Get the current width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Get the h1 element where the size should be displayed
    const sizeDisplay = document.getElementById('sizeDisplay');

    // Update the h1 tag with the new width and height
    sizeDisplay.textContent = `Width: ${width} and Height: ${height}`;
}

// Event listener for window resize
window.addEventListener('resize', updateWindowSize);

// Initial call to set the size when the page loads
updateWindowSize();
