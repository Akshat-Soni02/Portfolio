# Akshat Soni's 3D Portfolio

A modern, responsive 3D portfolio website built with React, Three.js, and TypeScript. Features competitive programming achievements, interactive 3D elements, and a sleek dark theme with glassmorphism effects.

---

> **Disclaimer**  
> This project is **not originally written by me**. It is a fork of [https://github.com/Manav7603/Portfolio](https://github.com/Manav7603/Portfolio).  
> I do **not take any credit** for the original code or design.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features

- **3D Interactive Elements** - Three.js powered 3D computer model and animations
- **Competitive Programming Showcase** - LeetCode Knight (1900+ rating), Codeforces, AtCoder achievements
- **Modern UI/UX** - Glassmorphism effects, custom cursor tracking, smooth animations
- **Responsive Design** - Optimized for all devices and screen sizes
- **Contact Form** - EmailJS integration for direct communication
- **Personal Interests** - Volleyball, reading, chess, and more
- **Custom Animations** - Framer Motion powered smooth transitions
- **Dark Theme** - Sleek dark design with accent colors

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Akshat-Soni02/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_APP_SERVICE_ID=your_service_id
VITE_APP_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_KEY=your_emailjs_key
VITE_APP_EMAILJS_RECIEVER=your@email.com
```

4. Start the development server:
```bash
npm run dev
```

### EmailJS Setup

1. Visit [EmailJS](https://emailjs.com) and create an account
2. Create a new service and get your Service ID
3. Create an email template and get your Template ID
4. Get your Public Key from the account settings
5. Add these values to your `.env` file

## Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D canvas components
│   ├── about.tsx       # About section
│   ├── achievements.tsx # Achievements showcase
│   ├── contact.tsx     # Contact form
│   ├── hero.tsx        # Hero section
│   └── ...
├── constants/          # App constants and data
├── utils/              # Utility functions
├── assets/             # Static assets
└── app.tsx            # Main app component
```

## Contact

- **GitHub**: [Akshat-Soni02](https://github.com/Akshat-Soni02)
- **LinkedIn**: [Akshat-Soni](https://www.linkedin.com/in/-akshat-soni/)
- **Email**: akshat.soni@example.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
