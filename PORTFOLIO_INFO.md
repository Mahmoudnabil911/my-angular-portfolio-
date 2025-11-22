# 🎨 Mahmoud Nabil - Portfolio Website

## ✨ Overview

Modern, animated personal portfolio website built with **Angular 19** featuring dark/light mode theming, GSAP animations, and glassmorphism design.

## 🚀 Features Implemented

### 1. **Header Component**

- Sticky navigation with scroll effects
- Animated scroll progress bar
- Dark/Light mode toggle with smooth transitions
- Smooth scroll to sections
- Glassmorphism background with backdrop blur

### 2. **Hero Section**

- Animated typing effect for introduction text
- Animated gradient background with floating blobs
- CTA buttons (Download CV, View Projects)
- GSAP entrance animations
- Responsive design with mobile optimization

### 3. **About Me Section**

- Professional description with 2+ years experience
- Animated photo frame with hover effects
- Statistics cards (Years, Projects, Technologies, Satisfaction)
- Specializations grid with icons
- Scroll-triggered animations

### 4. **Skills Section**

- 4 categorized skill groups:
  - Frontend & Frameworks (Angular, TypeScript, HTML/CSS, SCSS, Bootstrap)
  - State & Data (RxJS, REST APIs, State Management)
  - Performance & Animations (GSAP, ScrollTrigger, CSS Animations)
  - Tools & Others (Nx, Git, Agile, Responsive Design, UI/UX)
- Animated progress bars with shimmer effects
- Glassmorphism cards with hover effects
- Scroll-triggered stagger animations

### 5. **Experience Timeline**

- Vertical timeline with animated markers
- **Company names prominently displayed** with gradient styling
- 4 positions with updated details:
  - **Cairah** - Frontend Web Developer (Part-time, Jun 2025 - Present)
  - **Dopave** - Front-End Developer Junior (Full-time, Mar 2024 - Present)
  - **Sahm** - Frontend Web Developer (Internship, Feb 2023 - Sep 2023)
  - **HealthPay** - Frontend Web Developer (Internship, Feb 2022 - Oct 2022)
- Achievement lists with checkmarks
- Technology tags for each role
- Hover animations and transitions

### 6. **Projects Section**

- Grid layout with project cards
- Glassmorphism card design
- Technology tags
- Hover effects with scale and shadow
- Placeholder for project images
- Links to live demos and GitHub

### 7. **Contact Section**

- Contact information cards with icons
- Animated contact form with validation
- Social links (Email, Phone, LinkedIn, GitHub)
- Glassmorphism design
- Scroll-triggered animations

### 8. **Theme System**

- Dark mode (default)
- Light mode toggle
- Smooth transitions between themes
- localStorage persistence
- Theme service with RxJS observables

## 🎨 Design Features

### Visual Elements

- **Dark Mode Gradient**: `#0D0D0D → #1A1A1A`
- **Primary Gradient**: `#667eea → #764ba2`
- **Glassmorphism**: `backdrop-filter: blur(10px)` with transparency
- **Smooth Animations**: GSAP with ScrollTrigger
- **Floating Blobs**: Animated background elements
- **Progress Bars**: Animated skill levels with shimmer effects

### Animations

- Fade/slide entrance animations
- Typing effect in hero section
- Scroll-triggered section reveals
- Hover effects on cards and buttons
- Smooth scroll navigation
- Progress bar animations

## 🛠️ Technologies Used

### Core

- Angular 19.2.0
- TypeScript 5.7.2
- SCSS/SASS
- RxJS 7.8.0

### Animation

- GSAP (GreenSock Animation Platform)
- ScrollTrigger plugin
- CSS Animations

### Build Tools

- Angular CLI 19.2.14
- Webpack (via Angular CLI)
- npm/yarn

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 968px
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## 🎯 Performance Optimizations

- Lazy loading (ready for implementation)
- Optimized animations
- Efficient change detection
- Minimal bundle size

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation & scroll progress
│   │   ├── hero/            # Landing section with typing effect
│   │   ├── about/           # About me with stats
│   │   ├── skills/          # Categorized skills with progress
│   │   ├── experience/      # Timeline with company focus
│   │   ├── projects/        # Project showcase cards
│   │   └── contact/         # Contact form & info
│   ├── services/
│   │   └── theme.service.ts # Dark/Light mode management
│   ├── styles/              # Global styles
│   └── app.component.*      # Main app component
├── styles.scss              # Global SCSS variables & base styles
└── index.html               # HTML entry point
```

## 🚀 Running the Project

### Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build
# or
ng build --configuration production
```

## 📝 Personal Information

**Name**: Mahmoud Nabil (Mahmoud Elkholy)  
**Role**: Frontend Developer (Angular)  
**Location**: Nasr City, Cairo, Egypt  
**Education**: Commerce, Tanta University (Graduating 2025)

### Contact

- **Email**: mahmodnabil2328@gmail.com
- **Phone**: +201027197422
- **LinkedIn**: [Profile Link]
- **GitHub**: [Profile Link]

## ✅ Completed Features Checklist

- [x] Sticky header with scroll progress
- [x] Dark/Light mode toggle
- [x] Hero section with typing animation
- [x] About section with stats
- [x] Skills section with progress bars
- [x] Experience timeline with prominent company names
- [x] Projects showcase
- [x] Contact form and information
- [x] GSAP animations throughout
- [x] Responsive design
- [x] Glassmorphism UI
- [x] Smooth scroll navigation
- [x] Theme persistence

## 🎨 Customization

To customize the portfolio:

1. Update personal info in component TypeScript files
2. Add actual project images in assets folder
3. Update CV download link in hero component
4. Add real social media links in contact component
5. Customize colors in SCSS variables

## 📦 Future Enhancements

- Add actual project images
- Implement CV download functionality
- Add blog section
- Include testimonials
- Add language switcher (EN/AR)
- Implement contact form backend
- Add loading animations
- Optimize for SEO
- Add PWA capabilities

---

**Built with ❤️ by Mahmoud Nabil**
