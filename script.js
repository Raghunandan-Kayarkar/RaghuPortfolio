// Initialize EmailJS
(function() {
    try {
        emailjs.init("hAqsHQxe5tRJa2c7C");
        console.log("EmailJS initialized successfully");
    } catch (error) {
        console.error("Failed to initialize EmailJS:", error);
    }
})();

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const submitBtn = contactForm.querySelector('.submit-btn');
const formStatus = contactForm.querySelector('.form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate form fields
    const name = contactForm.user_name.value.trim();
    const email = contactForm.user_email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all fields';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please enter a valid email address';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        const formData = {
            user_name: name,
            user_email: email,
            message: message,
            to_email: 'raghunandankayarkar@gmail.com'
        };

        console.log('Attempting to send email with data:', formData);
        
        const response = await emailjs.send('service_ayhl41n', 'template_cl0sy3n', formData);
        console.log('EmailJS Response:', response);
        
        if (response.status === 200) {
            // Show success message
            formStatus.textContent = 'Message sent successfully!';
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            
            // Reset form
            contactForm.reset();
        } else {
            throw new Error(`Email service returned status: ${response.status}`);
        }
    } catch (error) {
        // Show detailed error message
        console.error('Detailed error:', error);
        let errorMessage = 'Failed to send message. ';
        
        if (error.text) {
            errorMessage += error.text;
        } else if (error.message) {
            errorMessage += error.message;
        } else {
            errorMessage += 'Please try again.';
        }
        
        formStatus.textContent = errorMessage;
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Hide status message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
});

// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelectorAll('.nav-links li');

        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        
        // Reset animations
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll event listener to change navbar style
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = '#000';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.7)';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add CSS animation class
document.head.insertAdjacentHTML('beforeend', `
    <style>
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        section.animate {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);

// Touch support for pop-up and glow effect
function addTouchPopEffect(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.addEventListener('touchstart', () => {
            el.classList.add('touch-active');
        });
        el.addEventListener('touchend', () => {
            el.classList.remove('touch-active');
        });
        el.addEventListener('touchcancel', () => {
            el.classList.remove('touch-active');
        });
    });
}
addTouchPopEffect('.project-card');
addTouchPopEffect('.education-card');
addTouchPopEffect('.skill-category');
addTouchPopEffect('.about-photo img');

// Initialize navigation
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
}); 
