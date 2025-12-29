#!/bin/bash

# Setup script for Next.js 15 Women in Mining DRC website

echo "🚀 Setting up Next.js 15 website for Women in Mining DRC..."
echo ""

# Step 1: Backup existing package.json
if [ -f "package.json" ]; then
    echo "📦 Backing up existing package.json..."
    cp package.json package.json.backup
    echo "✅ Backup created: package.json.backup"
fi

# Step 2: Copy Next.js package.json
echo "📦 Setting up Next.js package.json..."
cp package-nextjs.json package.json
echo "✅ Next.js package.json installed"

# Step 3: Create public/attached_assets if it doesn't exist
if [ ! -d "public/attached_assets" ]; then
    echo "📁 Creating public/attached_assets directory..."
    mkdir -p public/attached_assets
    echo "✅ Directory created"
    
    # If attached_assets exists at root, copy images
    if [ -d "attached_assets" ]; then
        echo "📸 Copying images from attached_assets to public/attached_assets..."
        cp -r attached_assets/* public/attached_assets/ 2>/dev/null || true
        echo "✅ Images copied"
    fi
else
    echo "✅ public/attached_assets already exists"
fi

# Step 4: Create .env.local template if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "⚙️  Creating .env.local template..."
    cat > .env.local << EOF
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Search Console Verification (optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=

# Email Service (for contact form - optional)
# NEXT_PUBLIC_EMAILJS_SERVICE_ID=
# NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
EOF
    echo "✅ .env.local template created"
fi

# Step 5: Install dependencies
echo ""
echo "📥 Installing dependencies (this may take a few minutes)..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "🎯 Next steps:"
    echo "   1. Run 'npm run dev' to start development server"
    echo "   2. Open http://localhost:3000 in your browser"
    echo "   3. Run 'npm run build' to test production build"
    echo ""
    echo "📚 For more info, see README-NEXTJS.md"
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi

