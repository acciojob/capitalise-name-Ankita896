
  const inputField = document.getElementById('fname');

        // Step 2: Add an event listener for the blur event
        inputField.addEventListener('blur', function() {
            // Step 3: Convert the content to uppercase
            inputField.value = inputField.value.toUpperCase();
        });