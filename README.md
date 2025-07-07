# Amazing Grace United Church - Homepage

A stunning, modern church homepage built with Next.js 14, TypeScript, and Tailwind CSS featuring Apple-inspired design language.

## 🎯 Features

- **Hero Section** - Full-width hero with church image, welcome message, and service times
- **Quick Actions** - Interactive grid with Watch Live, Events, Give, and Prayer options
- **Upcoming Events** - Clean card design showcasing the next 3 church events
- **Latest Sermon** - Featured sermon with video thumbnail and play controls
- **Announcement Banner** - Dismissible banner with smooth animations
- **Apple Design Language** - Clean typography, generous spacing, and smooth transitions
- **Mobile-First** - Responsive design that scales elegantly to desktop
- **Smooth Animations** - Powered by Framer Motion for delightful interactions

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the church homepage.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Images:** Next.js Image Optimization
- **Fonts:** Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Apple-inspired design
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage with all components
├── components/
│   └── homepage/
│       ├── HeroSection.tsx         # Hero with church image and service times
│       ├── QuickActions.tsx        # Interactive action buttons
│       ├── UpcomingEvents.tsx      # Event cards with hover effects
│       ├── LatestSermon.tsx        # Featured sermon with video player
│       └── AnnouncementBanner.tsx  # Dismissible announcements
├── lib/
│   └── data/
│       └── homepage.ts       # Dummy data for prototype
└── types/
    └── homepage.ts          # TypeScript type definitions
```

## 🎨 Design System

- **Color Palette:** Warm whites, soft grays, with gold/amber accents
- **Typography:** Inter font with clean, readable hierarchy
- **Spacing:** Generous Apple-style spacing for breathing room
- **Animations:** Subtle, purposeful motion that enhances UX
- **Components:** Card-based design with rounded corners and shadows

## 📱 Responsive Design

The homepage is built mobile-first and scales beautifully:
- **Mobile:** Single-column layout with stacked content
- **Tablet:** Mixed layouts with grid-based sections
- **Desktop:** Full multi-column layouts with enhanced interactions

## 🔧 Customization

### Updating Content
Edit `/src/lib/data/homepage.ts` to modify:
- Church information and service times
- Event listings
- Sermon details
- Announcements

### Styling
The design system is built with CSS custom properties in `/src/app/globals.css`:
- Colors, spacing, and animations can be easily customized
- Apple-inspired components use consistent design tokens

### Adding Features
The component architecture makes it easy to:
- Add new sections to the homepage
- Integrate with real APIs or databases
- Extend with additional church features

## 🚀 Deployment

Deploy easily on Vercel:

```bash
npm run build
```

Or use the Vercel Platform for automatic deployments.

## 📄 License

This project is open source and available under the MIT License.
