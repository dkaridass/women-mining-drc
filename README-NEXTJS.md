# Women in Mining DRC - Next.js 15 Website

A modern, mobile-first single-page application for Women in Mining DRC, built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion.

## 🚀 Features

- **Next.js 15** with App Router
- **React 19** for optimal performance
- **Tailwind CSS 4** with custom design system (earth tones: #8B4513, #DAA520)
- **Framer Motion** for smooth animations
- **WCAG AA Accessibility** compliant
- **SEO Optimized** with meta tags, OpenGraph, and Schema.org
- **Light/Dark Mode** toggle
- **Fully Responsive** (mobile-first design)
- **Performance Optimized** (<3s load time target)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Copy the package.json:**
   ```bash
   cp package-nextjs.json package.json
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── navigation.tsx       # Fixed navigation with hamburger menu
│   ├── hero-section.tsx     # Full-viewport hero with CTAs
│   ├── impact-stats.tsx     # Animated statistics counter
│   ├── about-testimonials.tsx # About section with testimonial carousel
│   ├── programs-gallery.tsx # Programs grid with lightbox gallery
│   ├── news-section.tsx     # News articles grid
│   ├── events-section.tsx   # Events listing
│   ├── resources-section.tsx # Resources and documentation
│   ├── advocacy-section.tsx # Advocacy and policy section
│   ├── contact-donations.tsx # Contact form and donation buttons
│   ├── footer.tsx           # Footer with newsletter
│   └── theme-provider.tsx   # Dark mode provider
├── public/
│   └── attached_assets/     # Images and media files
└── tailwind.config.ts       # Tailwind configuration

```

## 🎨 Design System

### Colors
- **Primary**: #8B4513 (Saddle Brown)
- **Accent**: #DAA520 (Goldenrod)
- **Background**: #FFFFFF / #F5F5F5
- **Dark Mode**: Custom gray scale

### Typography
- **Font**: Inter (primary), Poppins (fallback)
- **Headings**: 4rem (h1), 3rem (h2), 2rem (h3)
- **Body**: 1rem regular

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Add Environment Variables (if needed)
5. Click "Deploy"

## ⚙️ Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://wim-drc.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

## 📝 Content Management

### News Articles
News articles are stored in `/public/content/news.json`. To add a new article:

1. Add entry to `news.json`
2. Include: `id`, `title`, `excerpt`, `content`, `date`, `image`, `slug`

### Programs
Programs are defined in `components/programs-gallery.tsx`. Update the `programs` array to add/modify programs.

### Events
Events are defined in `components/events-section.tsx`. Update the `events` array to add/modify events.

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and spacing in `tailwind.config.ts`.

### SEO
Update metadata in `app/layout.tsx`:
- Site title and description
- OpenGraph tags
- Twitter cards
- Schema.org structured data

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Breakpoints

- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1536px (extra large)

## ♿ Accessibility Features

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Skip to main content link
- WCAG AA contrast ratios (4.5:1 minimum)

## 🎯 Performance Optimization

- Image optimization with Next.js Image component
- WebP/AVIF format support
- Lazy loading for images
- Code splitting
- Font optimization
- CSS optimization

## 📞 Support

For issues or questions:
- Email: contact@wim-drc.com
- Website: https://wim-drc.com

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Women in Mining DRC** - Autonomiser les femmes dans le secteur minier congolais

