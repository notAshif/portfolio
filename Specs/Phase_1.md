You are a Senior Frontend Engineer and UI Engineer with expertise in building modern portfolio websites.

The project already contains a design system with design tokens. Respect the existing tokens and never hardcode colors, spacing, typography, or border radius when equivalent tokens already exist.

---

# OBJECTIVE

Build the initial foundation of my portfolio while keeping the project scalable, maintainable, reusable, and production-ready.

For now, every React component should use:

"use client";

---

# PHASE 1 — TYPOGRAPHY SETUP

Configure the project typography.

Requirements

1. Import **Instrument Serif** using `next/font/google`.

2. Configure it inside:

app/layout.tsx

3. Apply the font class on the `<html>` element.

4. Remove every previous font import from `globals.css`.

5. Do not import Google Fonts using CSS.

6. Use only `next/font/google`.

7. Ensure proper font optimization.

---

# PHASE 2 — SIDE HEADER

The component already exists:

components/SideHeader.tsx

Create a fixed vertical navigation positioned on the left side.

Layout

• Full viewport height

• Fixed position

• Minimal width

• Clean editorial appearance

Structure

TOP

Navigation

- Home
- Work
- Projects
- Experience

BOTTOM

Social Icons

- GitHub
- LinkedIn
- Twitter (X)

Requirements

- Use Lucide React icons whenever possible.
- Navigation should be vertically stacked.
- Social icons should also be vertically stacked.
- Active and hover states should be subtle.
- Smooth transitions.
- Keyboard accessible.
- Semantic HTML.
- Responsive behavior.
- Keep spacing consistent with the design system.

---

# PHASE 3 — HOME PAGE

Create the homepage.

Structure

<Home>

    <SideHeader />

    <HeroSection />

</Home>

Create

components/sections/HeroSection.tsx

---

# HERO SECTION

Layout

- Full viewport height
- Center aligned horizontally
- Center aligned vertically

---

## Background

Use

/public/bg_video.mp4

The video should

- autoplay
- muted
- playsInline
- loop

Style

- fixed/fullscreen
- object-cover
- blur (approximately 0.35rem)
- slightly dark overlay for readability
- pointer-events-none
- behind all content

---

## Hero Illustration

Display

/public/hero-illustration.png

Use `next/image`.

Center it.

Optimize image loading.

---

## Heading

Display

Asif Shah

Use the foreground design token.

Equivalent color:

#0B0909

Typography should feel elegant and premium.

---

## Subtitle

Display

Building AI-powered products and modern web experiences.

Use muted foreground.

Equivalent color:

#464858

Readable width.

Balanced spacing.

---

## CTA Buttons

Place below the subtitle.

Buttons

1.

Copy Email

2.

Resume

Requirements

- Plus icon on the left
- Rounded
- Consistent sizing
- Hover transitions
- Accessible
- Keyboard friendly

Copy Email

- Copy my email to clipboard
- Show lightweight feedback (toast if available, otherwise simple UI feedback)

Resume

- Open/download resume PDF from the public folder

---

# RESPONSIVENESS

Desktop

- Sidebar fixed
- Hero perfectly centered

Tablet

- Preserve spacing
- Keep typography proportional

Mobile

- Sidebar adapts gracefully
- Maintain usability
- Hero remains centered
- Buttons stack if necessary

---

# DESIGN SYSTEM

Follow existing design tokens.

Reuse spacing values.

Reuse typography scale.

Reuse radius tokens.

Reuse transition tokens.

Never introduce arbitrary values unless absolutely necessary.

Avoid magic numbers.

---

# CODE QUALITY

Write production-quality code.

Prioritize

- readability
- maintainability
- scalability
- accessibility
- performance
- reusability

Use

- small reusable components
- proper TypeScript types
- descriptive naming
- clean folder organization
- semantic HTML

Avoid

- duplicated logic
- duplicated components
- unnecessary wrappers
- deeply nested JSX
- inline styles
- unnecessary comments
- dead code
- over-engineering

---

# FILE STRUCTURE

app/
    layout.tsx
    page.tsx

components/
    SideHeader.tsx
    ui/
        Button.tsx (if needed)
    sections/
        HeroSection.tsx

public/
    hero-illustration.png
    bg_video.mp4
    resume.pdf

---

# EXPECTED RESULT

The final implementation should resemble a premium editorial portfolio with a clean, minimal aesthetic, smooth interactions, excellent code quality, and a scalable architecture suitable for future sections such as Work, Projects, Experience, and Contact.