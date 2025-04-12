document.addEventListener('DOMContentLoaded', () => {
    // --- Get references to DOM elements ---
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const loginSection = document.getElementById('login-section');
    const instructionsSection = document.getElementById('instructions-section');

    // Toggle Buttons & Content Areas
    const btnOption1 = document.getElementById('btn-option1');
    const btnOption2 = document.getElementById('btn-option2');
    const option1Content = document.getElementById('option1-content');
    const option2Content = document.getElementById('option2-content');

    // --- Login Logic ---
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();
        const expectedDomain = '@elcconsulting.com';

        if (email.toLowerCase().endsWith(expectedDomain)) {
            // Valid email
            console.log('Login successful for:', email);
            errorMessage.classList.add('hidden');
            errorMessage.textContent = '';
            loginSection.classList.add('hidden');
            instructionsSection.classList.remove('hidden');

            // Ensure initial state for options (Option 1 active)
            activateOption1(); // Call function to set initial active state

        } else {
            // Invalid email
            console.log('Login failed: Invalid domain for', email);
            errorMessage.textContent = 'You are not allowed to view these contents';
            errorMessage.classList.remove('hidden');
            instructionsSection.classList.add('hidden');
        }
    });

    // --- Toggle Logic ---

    // Function to show Option 1
    function activateOption1() {
        if (option1Content && option2Content && btnOption1 && btnOption2) {
            option1Content.classList.add('active');
            option1Content.classList.remove('hidden');
            option2Content.classList.add('hidden');
            option2Content.classList.remove('active');

            btnOption1.classList.add('active');
            btnOption2.classList.remove('active');
        }
    }

    // Function to show Option 2
    function activateOption2() {
         if (option1Content && option2Content && btnOption1 && btnOption2) {
            option1Content.classList.add('hidden');
            option1Content.classList.remove('active');
            option2Content.classList.add('active');
            option2Content.classList.remove('hidden');

            btnOption1.classList.remove('active');
            btnOption2.classList.add('active');
        }
    }

    // Add click listeners to buttons
    if (btnOption1) {
        btnOption1.addEventListener('click', activateOption1);
    }
    if (btnOption2) {
        btnOption2.addEventListener('click', activateOption2);
    }


    // --- Initial Page Load State ---
    // Ensure instructions and error are hidden initially
    if (instructionsSection) {
         instructionsSection.classList.add('hidden');
    }
    if (errorMessage) {
         errorMessage.classList.add('hidden');
    }

});