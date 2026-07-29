# 🚀 Aryan — 3D Creator Portfolio

A modern, fully responsive portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It features smooth animations, dark/light mode, interactive UI components, and a clean developer-friendly architecture.

---

# ✨ Features

### 🎬 Stunning User Experience

* Animated loading screen with logo and progress counter
* Custom glowing cursor with interactive hover effects
* Smooth page transitions and scroll-based animations
* Scroll progress indicator
* Fully responsive design for desktop, tablet, and mobile

### 🌙 Theme Support

* Dark and Light mode
* Automatically detects the user's system preference
* Saves the selected theme using `localStorage`

### 🏠 Hero Section

* Letter-by-letter animated heading
* Magnetic action buttons
* Floating gradient background effects
* Download CV, Hire Me, and View Projects buttons

### ⚡ Interactive Sections

* Infinite scrolling skills marquee
* About section with animated text reveal
* Animated skill progress bars
* Services with hover animations
* Sticky and filterable project showcase
* Professional experience timeline
* Education, certifications, achievements, and statistics
* Client testimonials with star ratings
* Contact form with client-side validation
* Social media links and footer navigation

### ♿ Accessibility

* Supports `prefers-reduced-motion`
* Keyboard-friendly navigation
* Responsive layouts across all screen sizes

---

# 🛠️ Tech Stack

* **Next.js 14** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**
* **Lucide React**
* **Google Fonts**

  * Kanit (Display)
  * Inter (Body)

---

# 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

# 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

> **Note:** Google Fonts (`next/font/google`) are downloaded during the first build, so an internet connection is required the first time you run `npm run dev` or `npm run build`.

---

# 📁 Project Structure

```text
app/
│── layout.tsx          Root layout
│── page.tsx            Main page
│── not-found.tsx       Custom 404 page
│── globals.css         Global styles

components/
│── Navbar.tsx
│── HeroSection.tsx
│── AboutSection.tsx
│── SkillsSection.tsx
│── ServicesSection.tsx
│── ProjectsSection.tsx
│── ExperienceSection.tsx
│── EducationSection.tsx
│── TestimonialsSection.tsx
│── ContactSection.tsx
│── Footer.tsx
│── LoadingScreen.tsx
│── ThemeProvider.tsx
│── ScrollProgress.tsx
│── CustomCursor.tsx
│── FadeIn.tsx
│── Magnet.tsx
│── AnimatedText.tsx

public/
│── favicon.svg
│── resume.pdf
```

---

# 🎨 Customization

You can easily personalize the portfolio.

### Personal Information

Update your details inside the section components:

* HeroSection
* AboutSection
* ExperienceSection
* ContactSection
* Footer

### Projects

Edit the project data inside:

```text
components/ProjectsSection.tsx
```

### Theme Colors

Customize the color palette from:

```text
app/globals.css
```

and

```text
tailwind.config.ts
```

### Resume

Replace:

```text
public/resume.pdf
```

with your own resume.

### Images

To use your own images:

1. Add them to the `public/` folder.
2. Display them using Next.js `<Image />`.

For remote images, add the image domain to:

```text
next.config.js
```

inside:

```javascript
images.remotePatterns
```

---

# ⚡ Performance

* Optimized with Next.js App Router
* Responsive on all devices
* Production-ready architecture
* SEO-friendly structure
* Optimized assets and animations
* Fast loading experience
* Smooth scrolling and transitions

---

# 📄 License

This project is intended for learning, personal portfolios, and customization. Feel free to modify it according to your own needs.

---

# 👨‍💻 Author

**Aryan Arshad**

Frontend Developer passionate about creating modern, animated, and visually engaging web experiences using React, Next.js, Tailwind CSS, and Framer Motion.

⭐ If you found this project useful, consider giving it a star and sharing it with others.
