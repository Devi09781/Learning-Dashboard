# Learning Dashboard

A modern learning dashboard built with Next.js 15, Tailwind CSS, Framer Motion, Lucide React, and Supabase.

## Architectural Choices

I chose Next.js 15 because it provides a clear separation between Server Components and Client Components, allowing data fetching to happen on the server while keeping interactive UI elements on the client. This improves performance and reduces unnecessary client-side JavaScript.

The application is organized into reusable UI components:

* `Sidebar` – Navigation and dashboard links
* `HeroCard` – Welcome section and learning statistics
* `CourseCard` – Dynamic course tiles with progress tracking
* `ActivityHeatmap` – Learning activity visualization
* `supabase.js` – Centralized database configuration

This structure keeps the code modular, maintainable, and easy to scale.

## Server / Client Component Split

### Server Components

The main dashboard page (`app/page.js`) is implemented as a Server Component.

Responsibilities:

* Fetch course data from Supabase
* Handle server-side rendering
* Pass data to child components as props

Benefits:

* Faster initial page load
* Reduced client-side data fetching
* Improved performance and SEO

### Client Components

The following components are Client Components:

* `Sidebar`
* `HeroCard`
* `CourseCard`
* `ActivityHeatmap`

These components use:

* Framer Motion animations
* Hover interactions
* Dynamic progress animations
* Interactive UI behavior

Since these features require browser APIs and client-side rendering, they are marked with:

```javascript
"use client";
```

## Database Integration

Supabase is used as the backend database.

The dashboard fetches course information dynamically from the `courses` table, including:

* Course title
* Progress percentage
* Icon name

Lucide React icons are rendered dynamically based on the `icon_name` field stored in Supabase.

## Challenges Faced

### 1. Supabase Environment Configuration

Initially, the application failed to connect to Supabase due to missing environment variables.

Solution:

* Configured `.env.local`
* Added Supabase URL and anonymous API key
* Restarted the Next.js development server

### 2. Hydration Errors

Hydration mismatches occurred because random values were generated during rendering.

Solution:

* Removed runtime random generation from components
* Replaced with static mock data for the activity heatmap

### 3. Dynamic Icon Rendering

Mapping icon names stored in the database to Lucide React components required dynamic lookup.

Solution:

* Used dynamic icon resolution through Lucide React exports
* Added fallback handling for invalid icon names

### 4. Responsive Bento Layout

Creating a dashboard that worked across different screen sizes required careful grid design.

Solution:

* Implemented responsive Tailwind CSS grid layouts
* Used reusable card components for consistency

## Technologies Used

* Next.js 15
* React
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React

## Running the Project

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Dashboard Preview
<img width="1910" height="910" alt="Screenshot 2026-06-03 182414" src="https://github.com/user-attachments/assets/88207475-0e8a-408b-9081-27d471aa4182" />


## Live Demo
https://learning-dashboard-mju8gyoqi-devi09781s-projects.vercel.app/


## Author

Developed as part of a Frontend Internship Assignment demonstrating responsive UI design, modern React architecture, animation techniques, and database integration using Supabase.
