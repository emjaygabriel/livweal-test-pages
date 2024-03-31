// Notes
// To compress and minify this, use uglify
// Example: uglifyjs input.js -o output.min.js -m -c (compressed version)
// Example: uglifyjs input.js -o output.min.js

document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed when the DOM is ready
    initContactSendEvent();
});

// Function: initializing send button of the contact form. 
// Note: There are 2 buttons, the actual submit button is hidden and is clicked via script. 
const initContactSendEvent = () => {
    // Get the anchor element with the ID "btn_send_contact"
    const anchorElement = document.getElementById('btn_send_contact');

    // Get the button element with the ID "mr-field-element-996842232134"
    const buttonElement = document.getElementById('mr-field-element-996842232134');

    // Check if both elements exist
    if (anchorElement && buttonElement) {
        // Attach an event listener to the anchor element
        anchorElement.addEventListener('click', (event) => {
        // Prevent the default behavior of the anchor
        event.preventDefault();

        // Trigger a click event on the button
        buttonElement.click();
        });
    } else {
        // Log an error if either element is not found
        console.error('Anchor or button element not found');
    }
};
  
