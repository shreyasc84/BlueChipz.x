document.addEventListener('DOMContentLoaded', () => {
    // Function to load the navigation menu
    function loadNavigationMenu() {
        // Fetch the navbar.html file
        fetch('nav.html')
            .then(response => response.text())
            .then(data => {
                // Insert the navigation menu into the placeholder element
                document.getElementById('navbar').innerHTML = data;

                // Set up the hamburger menu event listener after the nav is loaded
                const menuBtn = document.getElementById('menu-btn');
                const menu = document.getElementById('menu');

                // Toggle menu visibility on click
                if (menuBtn && menu) {
                    menuBtn.addEventListener('click', () => {
                        menu.classList.toggle('hidden');
                    });
                }
            })
            .catch(error => {
                console.error('Error loading the navigation menu:', error);
            });
    }

    // Call the function to load the navigation menu
    loadNavigationMenu();

    function loadFooter() {
        // Fetch the Footer file
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                // Insert the navigation menu into the placeholder element
                document.getElementById('footer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading the footer:', error);
            });
    }

    loadFooter();
    // form handling
    document.getElementById('contact-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const thankYouMessage = document.getElementById('thank-you-message');
        const submitButton = form.querySelector('button[type="submit"]');
        
        try {
            // Disable the button during submission
            submitButton.disabled = true;
            submitButton.innerText = 'Submitting...';
            
            // Send form data to Formspree
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show thank you message
                form.querySelector('input').value = '';
                form.querySelector('input').style.display = 'none';
                submitButton.style.display = 'none';
                thankYouMessage.classList.remove('hidden');
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Oops! There was a problem submitting your form.');
        } finally {
            submitButton.disabled = false;
            submitButton.innerText = 'Stay Updated';
        }
    });
});
