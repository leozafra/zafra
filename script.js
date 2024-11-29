let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginPage = document.getElementById('login-page');
    const portfolioPage = document.getElementById('portfolio-page');
    const restrictedSections = ['about', 'projects', 'contact'];


    restrictedSections.forEach(sectionId => {
        document.getElementById(sectionId).classList.add('hidden');
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const validUsername = 'username';
        const validPassword = 'password';
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === validUsername && password === validPassword) {
            alert('Login successful!');

            loginPage.style.display = 'none';
            portfolioPage.style.display = 'block';

            restrictedSections.forEach(sectionId => {
                document.getElementById(sectionId).classList.remove('hidden');
            });
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classlist.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = form.querySelector('input[placeholder="Full Name"]');
    const emailInput = form.querySelector('input[placeholder="Email"]');
    const phoneInput = form.querySelector('input[placeholder="Phone Number"]');
    const subjectInput = form.querySelector('input[placeholder="Subject"]');
    const messageInput = form.querySelector('textarea');
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        let isValid = true;
    
        if (!nameInput.value.trim()) {
            alert("Full Name is required!");
            isValid = false;
        } else if (!emailInput.value.trim() || !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
            alert("Please enter a valid email address!");
            isValid = false;
        } else if (!phoneInput.value.trim() || !/^\d+$/.test(phoneInput.value)) {
            alert("Please enter a valid phone number!");
            isValid = false;
        } else if (!subjectInput.value.trim()) {
            alert("Subject is required!");
            isValid = false;
        } else if (!messageInput.value.trim()) {
            alert("Message cannot be empty!");
            isValid = false;
        }

        if (isValid) {
            alert("Message sent successfully!");
            form.reset(); 
        }
    });
});