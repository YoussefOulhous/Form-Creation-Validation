document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        const userName = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if(!userName){
            isValid = false;
            messages.push("Username is required.")
        }
        else if( userName.length < 3){
            isValid = false;
            messages.push('Username length is less than 3. ')
        }

        if (!email){
            isValid = false;
            messages.push("email is required.")
        } else if(!email.includes ('@')){
            isValid = false ; 
            messages.push('The email must contain an "@" symbol.');
        }

        if(!password){
            isValid = false;
            messages.push("the Password is required.");
        } else if (password.length < 8){
            isValid = false;
            messages.push("Your password is weak.");
        }

        feedbackDiv.style.display = 'block';
        if(isValid){
            isValid = true;
            feedbackDiv.textContent = ("Registration successful!");
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); 
            feedbackDiv.style.color = "#dc3545"; 
        }
    
    }
 
    // Event listener for form submission
    form.addEventListener('submit', handleSubmit);


    
});
