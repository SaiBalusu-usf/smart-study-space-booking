# Smart Study Space App

A modern Next.js application that integrates Azure AD login and Canvas LMS API to show personalized study spaces and course schedules.

## Features

- Azure Active Directory (MSAL) Authentication
- Canvas LMS REST API Integration (OAuth2 token)
- Custom UI Components
- Tailwind CSS
- Production-ready `.env` setup

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local`:
   ```bash
   NEXT_PUBLIC_CANVAS_TOKEN=your_canvas_token_here
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

4. Visit:
   ```
   http://localhost:3000
   ```

---

### Folder Structure

- `pages/` — Next.js pages
- `api/` — API handlers & services
- `components/ui/` — Reusable UI components
- `styles/` — Tailwind global styles

---

Built with ❤️ using Next.js, Tailwind, and Canvas LMS API.