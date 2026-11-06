# Premium Personal Portfolio – Aron Binoy Varghese

A modern, responsive, Bento Grid personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed with a clean, Apple/Linear-inspired light aesthetic with blue accents, subtle shadows, rounded cards, and generous whitespace.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 2. Development Server
Run the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Production Build
Create an optimized production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── images/
│   │   ├── cardamom-ai.svg         # Visual illustration for Cardamom AI project
│   │   ├── teammate-finder.svg     # Visual illustration for Teammate Finder project
│   │   └── profile-placeholder.svg # Fallback monogram vector
│   └── resume.pdf                  # Downloadable academic overview document
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky navigation with scrollspy & mobile menu
│   │   ├── Hero.jsx                # Bento hero with title, CTAs, and profile card
│   │   ├── About.jsx               # Bento card narrative, location, status, interests
│   │   ├── Skills.jsx              # Transparent skill categories & learning roadmap
│   │   ├── Projects.jsx            # Bento project cards with status & view modals
│   │   ├── Education.jsx           # Amal Jyothi College of Engineering timeline
│   │   ├── Experience.jsx          # Early-undergraduate focus & future readiness
│   │   ├── Achievements.jsx        # Tasteful empty state ready to scale
│   │   ├── Certifications.jsx      # Learning tracks & verified credentials state
│   │   ├── Resume.jsx              # Dedicated resume card with download & preview
│   │   ├── Contact.jsx             # Legitimate email-based contact with 1-click copy
│   │   ├── Footer.jsx              # Quick navigation, dynamic year, social links
│   │   ├── ProjectModal.jsx        # Interactive project deep-dive modal
│   │   ├── ResumeModal.jsx         # Interactive resume & academic overview modal
│   │   └── Icons.jsx               # SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolio.js            # Centralized portfolio data
│   ├── App.jsx                     # Root application layout
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Tailwind CSS layers & typography
├── index.html                      # SEO metadata & Google Fonts (Inter / Geist)
├── tailwind.config.js              # Bento borders, radius, and brand colors
└── vite.config.js                  # Vite configuration
```

---

## ⚙️ Customization Guide

All personal information, social handles, skills, projects, and education details are centralized in **`src/data/portfolio.js`**. You do not need to edit individual component files to update your details!

### 1. Adding Your Profile Photo
Place your portrait photo at:
```
public/images/profile.jpg
```
The hero section automatically detects it and displays your photo. If absent, an executive monogram avatar fallback is shown.

### 2. Updating Resume
Replace the file at:
```
public/resume.pdf
```
with your full updated curriculum vitae.

### 3. Configuring Social Links (GitHub & LinkedIn)
In `src/data/portfolio.js`, update the `socials` object:
```javascript
socials: {
  github: {
    label: "GitHub",
    url: "https://github.com/your-username", // Add your verified profile URL here
    configured: true
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://linkedin.com/in/your-profile", // Add your verified profile URL here
    configured: true
  }
}
```

---

## 🎨 Design Highlights
- **Design System:** Modern Bento Grid layout with 24px rounded corners (`rounded-bento`).
- **Color Palette:** Pure white & off-white canvas (`#FBFBFD`) with electric accent blue (`#2563EB`).
- **Typography:** Modern sans-serif utilizing *Inter* and *Geist* with clear optical hierarchy.
- **Micro-Interactions:** Subtle hover elevations and spring transitions powered by **Framer Motion**.
- **Transparency:** Strictly adheres to genuine academic representation without fabricated CGPA, fictional internships, or fake project repositories.

"# portfolio" 
