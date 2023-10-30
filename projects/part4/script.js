// Contact Form

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        if (name && email && message) {
            await sendEmail(name, email, message);
            successMessage.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        } else {
            errorMessage.classList.remove('hidden');
            successMessage.classList.add('hidden');
        }
    } catch (error) {
        console.error(error);
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');
    }
});

async function sendEmail(name, email, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
