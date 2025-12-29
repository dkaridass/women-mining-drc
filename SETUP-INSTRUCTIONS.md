# 🚀 Setup Instructions - Next Steps

## Quick Setup (Recommended)

Run the automated setup script:

```bash
./setup-nextjs.sh
```

This will:
- ✅ Backup your existing package.json
- ✅ Install Next.js dependencies
- ✅ Set up the public/attached_assets directory
- ✅ Create .env.local template

## Manual Setup

If you prefer to set up manually:

### 1. Backup and Update package.json

```bash
# Backup existing
cp package.json package.json.backup

# Use Next.js version
cp package-nextjs.json package.json
```

### 2. Set Up Assets Directory

```bash
# Create public/attached_assets if it doesn't exist
mkdir -p public/attached_assets

# Copy images from root attached_assets (if they exist)
cp -r attached_assets/* public/attached_assets/ 2>/dev/null || true
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_VERIFICATION=
```

### 5. Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

## Verify Installation

After setup, verify everything works:

```bash
# Check if Next.js is installed
npm list next

# Run linting
npm run lint

# Test production build
npm run build
```

## Common Issues

### Issue: "Cannot find module 'next/image'"

**Solution:** Make sure you've installed dependencies:
```bash
npm install
```

### Issue: Images not loading

**Solution:** Ensure images are in `public/attached_assets/`:
```bash
ls public/attached_assets/
```

### Issue: TypeScript errors

**Solution:** Make sure TypeScript is installed:
```bash
npm install --save-dev typescript @types/react @types/node
```

## Next Steps After Setup

1. **Test the site locally:**
   ```bash
   npm run dev
   ```

2. **Review and customize:**
   - Edit `app/layout.tsx` for SEO metadata
   - Update content in `components/` files
   - Modify colors in `tailwind.config.ts`

3. **Connect forms (optional):**
   - Set up EmailJS for contact form
   - Add Stripe/PayPal for donations

4. **Deploy to Vercel:**
   ```bash
   npm i -g vercel
   vercel
   ```

## Need Help?

- 📖 See `README-NEXTJS.md` for full documentation
- 🚀 See `QUICK-START.md` for quick reference
- 💬 Contact: contact@wim-drc.com

---

**Ready to launch!** 🎉

