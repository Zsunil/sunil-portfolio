# Sunil Kumar S — Personal Portfolio Website

A fast, lightweight, and modern portfolio website for **Sunil Kumar S**, designed with a premium dark theme, glassmorphism aesthetics, responsive layouts, and interactive case study modals.

**Live URL**: [https://zsunil.github.io/sunil-portfolio/](https://zsunil.github.io/sunil-portfolio/)

---

## 🎯 Professional Focus
- **Identity**: Project Coordination | Agile Project Delivery | Quality Assurance | Technology
- **Background**: 50+ eBook projects coordinated, cross-functional leadership of 15+ interns and 7 software developers, Agile/Scrum ceremonies, and end-to-end STLC release validation.
- **Education**: B.Tech in Computer Science and Business Systems (Sethu Institute of Technology) · CGPA: 8.7

---

## 📁 Repository Structure

```
sunil-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── assets/
│   ├── docs/
│   │   └── Sunil-Kumar-Resume.pdf # Official downloadable résumé
│   └── images/
│       ├── favicon.svg           # High-resolution brand SVG favicon
│       ├── favicon.png           # Fallback PNG favicon
│       ├── og-image.jpg          # Open Graph 1200x630 social card
│       ├── sunil-avatar.webp     # Square bust headshot (WebP optimized)
│       ├── sunil-avatar.jpg      # Square bust headshot (JPEG fallback)
│       ├── sunil-portrait.webp   # Full executive portrait (WebP optimized)
│       └── sunil-portrait.jpg    # Full executive portrait (JPEG fallback)
├── css/
│   └── style.css                 # Modular CSS3 stylesheet with custom properties
├── js/
│   └── main.js                   # Interactive navigation, modal, filters & mailer
├── index.html                    # Semantic, accessible & SEO-optimized HTML5
└── README.md                     # Documentation and deployment guide
```

---

## ⚡ Key Highlights & Architecture

1. **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and modern JavaScript. Loads instantaneously with optimal Core Web Vitals (LCP, CLS, INP).
2. **Optimized Media**: High-resolution WebP photographs with fallback JPEGs, responsive `<picture>` tags, and `fetchpriority="high"` for immediate LCP.
3. **Security-Compliant Case Studies**: Adheres to strict repository privacy standards with clear `Private Repository – Available on Request` badges and interactive case study access request modal.
4. **Interactive Capabilities**:
   - Filterable Capabilities matrix (Project & Agile, QA & Testing, Languages & Web, Tools).
   - One-click copy for email with animated toast notifications.
   - Pre-formatted mailto message composer.
   - Accessible native HTML `<dialog>` with backdrop-blur and keyboard/light dismiss.
5. **SEO & Social Sharing Ready**: Complete OpenGraph, Twitter Card, and Schema.org `Person` JSON-LD metadata for search engines and recruiters.

---

## 🚀 Local Preview

To test locally:
```bash
# Using Python built-in server:
python -m http.server 8000

# Open in browser:
# http://localhost:8000
```
Or simply double-click `index.html` to open in any web browser.

---

## 🌐 GitHub Pages Deployment Guide

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages upon pushing to the `main` branch.

### Enabling GitHub Pages in Repository Settings:
1. Go to repository **Settings** on GitHub.
2. Under the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**:
   - Choose **GitHub Actions** (recommended, triggers workflow automatically).
   - Alternatively, choose **Deploy from a branch** → select `main` branch and `/ (root)`.
4. Your website will be live at:
   `https://zsunil.github.io/sunil-portfolio/`

---

## 📬 Contact Information
- **Location**: Madurai, Tamil Nadu, India
- **Email**: sunilram26042003@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/sunilkumar-projectcoord](https://www.linkedin.com/in/sunilkumar-projectcoord)
- **GitHub**: [https://github.com/Zsunil](https://github.com/Zsunil)
