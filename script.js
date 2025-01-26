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
});
