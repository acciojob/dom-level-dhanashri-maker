//your JS code here. If required.
function findDomLevel() {
    let element = document.getElementById("level");
    let count = 0;

    // Traverse up to the root <html>
    while (element) {
        count++;
        element = element.parentElement;
    }

    alert("The level of the element is: " + count);
}

// Run after page loads
window.onload = findDomLevel;   