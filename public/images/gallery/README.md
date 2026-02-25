# Gallery Images - Image Mappings

## Attached Image Assets → Gallery Filenames

This directory contains the gallery images converted from your attached assets:

### Image Mappings:

1. **ceremonie.webp** (ceremonie.jpg)
   - Source: `public/attached_assets/festival1.jpeg`
   - Alt text: "Cérémonie"
   - Label: "Cérémonie"
   - Size: 600x400px (optimized)

2. **formation-technique.webp** (formation-technique.jpg)
   - Source: `public/attached_assets/atelier1.jpeg`
   - Alt text: "Formation technique"
   - Label: "Formation technique"
   - Size: 600x400px (optimized)

3. **presentations.webp** (presentations.jpg)
   - Source: `public/attached_assets/atelier3.jpeg`
   - Alt text: "Présentations"
   - Label: "Présentations"
   - Size: 600x400px (optimized)

4. **travaux-groupe.webp** (travaux-groupe.jpg)
   - Source: `public/attached_assets/atelier5.jpeg`
   - Alt text: "Travaux de groupe"
   - Label: "Travaux de groupe"
   - Size: 600x400px (optimized)

5. **photos-groupe.webp** (photos-groupe.jpg)
   - Source: `public/attached_assets/festival15.jpeg`
   - Alt text: "Photos de groupe"
   - Label: "Photos de groupe"
   - Size: 600x400px (optimized)

6. **generaux.webp** (generaux.jpg)
   - Source: `public/attached_assets/atelier10.jpeg`
   - Alt text: "Généraux"
   - Label: "Généraux"
   - Size: 600x400px (optimized)

## Usage in Code

All images are referenced in `app/page.tsx` in the `galleryImages` array:

```typescript
const galleryImages = [
  { src: '/images/gallery/ceremonie.webp', alt: 'Cérémonie', label: 'Cérémonie' },
  { src: '/images/gallery/formation-technique.webp', alt: 'Formation technique', label: 'Formation technique' },
  // ... etc
]
```

## Image Format

- **Preferred**: WebP format (`.webp`) for optimal performance
- **Fallback**: JPG format (`.jpg`) if WebP conversion fails
- **Size**: 600x400px (maintains aspect ratio with center crop)
- **Quality**: 85% (WebP) for balance between quality and file size

## Notes

- Images are optimized for responsive 3-column grid (mobile 1-col, tablet 2-col, desktop 3-col)
- All images use Next.js Image component with proper width/height attributes
- First 3 images have `priority` loading for above-the-fold performance
- Hover effects: scale-105 on card, scale-110 on image


