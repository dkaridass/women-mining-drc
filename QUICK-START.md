# 🚀 Quick Start Guide - Women in Mining DRC Next.js Website

## ✅ What's Been Created

A complete, production-ready Next.js 15 website with:

### ✨ Core Features
- ✅ Next.js 15 with App Router
- ✅ React 19
- ✅ Tailwind CSS 4 with custom earth tone design system
- ✅ Framer Motion animations
- ✅ Light/Dark mode toggle
- ✅ Fully responsive (mobile-first)
- ✅ WCAG AA accessible
- ✅ SEO optimized

### 📄 Pages & Sections
1. **Hero Section** - Full-viewport with CTAs
2. **Impact Stats** - Animated counters (440+ women, 9 programs, etc.)
3. **About/Testimonials** - Carousel with leader quotes
4. **Programs Gallery** - 6 programs with lightbox modals
5. **News Section** - Latest articles grid
6. **Events Section** - Festival Thamani and other events
7. **Resources** - Guides, reports, online training
8. **Advocacy** - Policy priorities and achievements
9. **Contact/Donations** - Form with React Hook Form + donation buttons
10. **Footer** - Newsletter signup, links, social media

## 🎯 Next Steps

### 1. Install Dependencies

```bash
# Copy the Next.js package.json
cp package-nextjs.json package.json

# Install dependencies
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Build for Production

```bash
npm run build
npm start
```

### 4. Deploy to Vercel

**Option A: Via CLI**
```bash
npm i -g vercel
vercel login
vercel
```

**Option B: Via GitHub**
1. Push code to GitHub
2. Go to vercel.com/new
3. Import repository
4. Deploy (auto-detects Next.js)

## 📁 Key Files

- `app/page.tsx` - Main homepage
- `app/layout.tsx` - Root layout with SEO
- `components/` - All reusable components
- `public/content/news.json` - News articles
- `tailwind.config.ts` - Design system config
- `README-NEXTJS.md` - Full documentation

## 🎨 Design System

- **Primary Color**: #8B4513 (Saddle Brown)
- **Accent Color**: #DAA520 (Goldenrod)
- **Fonts**: Inter (primary), Poppins (fallback)
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

## 🔧 Customization

### Update Content
- **News**: Edit `public/content/news.json`
- **Programs**: Edit `components/programs-gallery.tsx`
- **Events**: Edit `components/events-section.tsx`
- **Testimonials**: Edit `components/about-testimonials.tsx`

### Update Colors
Edit `tailwind.config.ts` → `theme.extend.colors`

### Update SEO
Edit `app/layout.tsx` → `metadata` object

## 📝 Forms

Contact form currently logs to console. To connect to backend:

1. **EmailJS** (recommended for quick setup):
   - Sign up at emailjs.com
   - Add service ID to form
   - Update `components/contact-donations.tsx`

2. **Netlify Forms**:
   - Add `netlify` attribute to form
   - Netlify auto-processes submissions

3. **Custom API**:
   - Create API route in `app/api/contact/route.ts`
   - Update form submission handler

## 💳 Donations

Donation buttons are placeholders. To integrate:

1. **Stripe**:
   - Create Stripe account
   - Add Stripe.js
   - Create checkout session

2. **PayPal**:
   - Create PayPal account
   - Add PayPal SDK
   - Create payment button

## 🖼️ Images

All images are in `/public/attached_assets/`. Ensure:
- Images are optimized (WebP format recommended)
- Alt text is descriptive
- Images are properly sized

## ♿ Accessibility Checklist

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Alt text for images
- ✅ Skip to main content
- ✅ WCAG AA contrast (4.5:1)

## 🚀 Performance Tips

1. **Images**: Use Next.js Image component (already implemented)
2. **Fonts**: Fonts are optimized via next/font
3. **Code Splitting**: Automatic with Next.js
4. **Lazy Loading**: Images load on scroll
5. **Caching**: Configure in `next.config.js`

## 📞 Need Help?

- Check `README-NEXTJS.md` for detailed docs
- Review Next.js docs: https://nextjs.org/docs
- Contact: contact@wim-drc.com

---

**Ready to launch!** 🎉

