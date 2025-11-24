// Wait for the DOM to fully load before running the script
window.addEventListener('DOMContentLoaded', function() {
    
    // Get references to the form elements
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');
    
    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Get the email value and remove any extra whitespace
        const emailValue = emailInput.value.trim();
        
        // Check if the email field is empty
        if (emailValue === '') {
            // Display error message
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            // Display success message with the email address
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
            
            // Clear the input field after successful submission
            emailInput.value = '';
        }
    });
    
});