document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;
    const status = document.getElementById('payment-status');

    // Simple client-side validation
    if (!/^\d{16}$/.test(cardNumber)) {
        status.textContent = "Invalid card number. Please enter a 16-digit card number.";
        status.classList.remove('hidden');
        return;
    }

    if (!/^\d{3}$/.test(cvv)) {
        status.textContent = "Invalid CVV. Please enter a 3-digit CVV.";
        status.classList.remove('hidden');
        return;
    }

    // Simulate successful payment
    status.textContent = "Payment successful! Thank you for your purchase.";
    status.classList.remove('hidden');
    status.classList.add('success');
    status.style.color = "green";

    // Optionally, you can send the form data to the server here using fetch or AJAX
});