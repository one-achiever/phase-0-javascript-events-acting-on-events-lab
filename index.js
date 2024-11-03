// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) { // Check to ensure the dodger doesn't move out of bounds on the left
        dodger.style.left = `${left - 1}px`;
    }
}

  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left < 360) { // Adjust the boundary as needed based on container width
        dodger.style.left = `${left + 1}px`;
    }
}

