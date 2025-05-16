document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointment-form');
    const appointmentMessage = document.getElementById('appointment-message');

    const consultationForm = document.getElementById('consultation-form');
    const consultationMessage = document.getElementById('consultation-message');

    function validateForm(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        return isValid;
    }

    function clearForm(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.value = '';
            input.style.borderColor = '#ddd';
        });
    }

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (validateForm(appointmentForm)) {
                const formData = new FormData(appointmentForm);
                let messageText = "Appointment request sent successfully! We will contact you soon.";
                appointmentMessage.textContent = messageText;
                appointmentMessage.className = "message success";
                clearForm(appointmentForm);

                // Simulate sending data (replace with actual backend call)
                setTimeout(() => {
                    appointmentMessage.textContent = '';
                    appointmentMessage.className = "message";
                }, 5000);
            } else {
                appointmentMessage.textContent = 'Please fill in all required fields.';
                appointmentMessage.className = "message error";
            }
        });
    }

    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (validateForm(consultationForm)) {
                const formData = new FormData(consultationForm);
                let messageText = "Consultation request sent successfully! We will contact you soon.";
                consultationMessage.textContent = messageText;
                consultationMessage.className = "message success";
                clearForm(consultationForm);
                // Simulate sending data (replace with actual backend call)
                setTimeout(() => {
                    consultationMessage.textContent = '';
                    consultationMessage.className = "message";
                }, 5000);
            } else {
                consultationMessage.textContent = 'Please fill in all required fields.';
                consultationMessage.className = "message error";
            }
        });
    }
});