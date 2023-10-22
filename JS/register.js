function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById("terms");

    const errorElement = document.getElementById("error-message");

    errorElement.textContent = ""; // Reset error message

    let valid = true;

    if (name.trim().length < 5) {
      errorElement.textContent = "The name must have a minimum of 5 characters.";
      valid = false;
    }

    if (email.trim() === "") {
      errorElement.textContent = "Email is required.";
      valid = false;
    }

    if (password.length < 8 || !/[A-Z]/.test(password)) {
      errorElement.textContent = "The password must have a minimum of 8 characters and contain at least 1 uppercase letter.";
      valid = false;
    }

    if (confirmPassword !== password) {
      errorElement.textContent = "Confirmation password must be the same as password.";
      valid = false;
    }

    if (!gender) {
      errorElement.textContent = "Select gender.";
      valid = false;
    }

    if (!terms.checked) {
      errorElement.textContent = "You must agree to the Terms and Conditions.";
      valid = false;
    }
    
    document.getElementById('btn-3').addEventListener('click', function() {
        const isValid = validateForm(); // Memeriksa validasi saat tombol diklik
        if (isValid) {
            alert('Register Successful');
        }
    });

    return valid;
  }