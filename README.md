# RaghuPortfolio
My Portfolio

## Project Overview

This is a personal portfolio website for Raghunandan Sunil Kayarkar. It showcases education, projects, skills, resume, and contact information in a modern, responsive design.

---

## Code Structure & Explanation

### 1. index.html
- **Navigation Bar:** Fixed at the top, with links to all main sections. Includes a burger menu for mobile navigation.
- **Hero Section:** Welcoming message and call-to-action button.
- **Workspace Section:** Visual section describing the developer's workspace.
- **About Section:** Profile photo and a brief introduction.
- **Education & Internship:** Cards showing academic background and internship experience.
- **Projects:** Cards for each project, with images, descriptions, technologies used, features, and links.
- **Skills:** Categorized list of technical skills (Frontend, Backend, Tools).
- **Resume:** Downloadable PDF and a quick highlights overview.
- **Contact:** Contact form (with EmailJS integration) and social media links.
- **Footer:** Copyright.
- **Scripts:** Loads EmailJS and custom JavaScript (`script.js`).

### 2. styles.css
- **Global Styles:** Sets up base font, colors, and box-sizing.
- **Section Styles:** Custom backgrounds, padding, and layout for each section.
- **Cards & Grids:** Responsive grid layouts for education, projects, and skills.
- **Navigation:** Fixed navbar, burger menu for mobile, and animated link transitions.
- **Buttons & Forms:** Styled buttons, form fields, and status messages. Includes loading animations and error/success feedback.
- **Animations:** Fade-in effects for sections, pop-up/glow effects for cards, and smooth transitions.
- **Responsive Design:** Multiple media queries for mobile/tablet support, ensuring the site looks good on all devices.

### 3. script.js
- **EmailJS Integration:** Initializes EmailJS and handles contact form submission, including validation, loading state, and error/success feedback.
- **Mobile Navigation:** Handles burger menu toggle and link animations for mobile devices.
- **Smooth Scrolling:** Enables smooth scroll for anchor links.
- **Dynamic Navbar:** Changes navbar style on scroll.
- **Section Animations:** Uses Intersection Observer to animate sections as they enter the viewport.
- **Touch Effects:** Adds pop-up/glow effect on touch for interactive cards and images.

---

## How to Use
1. Open `index.html` in a browser to view the portfolio.
2. To send a message via the contact form, fill in your details and click 'Send Message'.
3. Download the resume from the Resume section.

---

## Customization
- Update `index.html` to change content, projects, or links.
- Modify `styles.css` for custom colors, fonts, or layouts.
- Adjust `script.js` to add new interactivity or change form handling.

---

## Assets
- Images and PDF resume are included in the project directory.
- Uses [EmailJS](https://www.emailjs.com/) for contact form email delivery.

---

## License
This project is for personal portfolio use. Please contact the author for reuse or adaptation.
