document.getElementById('home-link').addEventListener('click', function () {
    showContent('signup-container');
    setActiveNav(this);
});

document.getElementById('product-link').addEventListener('click', function () {
    showContent('product-content');
    setActiveNav(this);
});

document.getElementById('about-link').addEventListener('click', function () {
    showContent('about-content');
    setActiveNav(this);
});

// Google Sign-up button click handler
document.getElementById('google-signup-btn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Show a message instead of redirecting
    alert("Google Sign-Up clicked! (This would normally redirect to Google OAuth)");
    
    // Alternatively, display the message on the page:
    // const messageDiv = document.createElement('div');
    // messageDiv.textContent = "Google Sign-Up clicked! (This would normally redirect to Google OAuth)";
    // messageDiv.style.color = 'white';
    // messageDiv.style.textAlign = 'center';
    // document.body.appendChild(messageDiv);

    // Redirect to Google's OAuth page (uncomment this line if you want to actually redirect)
    // window.location.href = authUrl;
});

// Sign-up form submission handler
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your sign-up logic here (e.g., API call to create user account)
    console.log(`Sign up with email: ${email} and password: ${password}`);
});

function showContent(contentId) {
    const contents = ['signup-container', 'home-content', 'product-content', 'about-content'];
    contents.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(contentId).classList.remove('hidden');
}

function setActiveNav(activeLink) {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}
