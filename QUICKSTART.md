# 🚀 Quick Start Guide

Welcome to your AI/ML + Full-Stack Portfolio! Follow these steps to get started.

## Step 1: Install Dependencies

```bash
npm install --legacy-peer-deps
```

> **Note**: We use `--legacy-peer-deps` due to React Three Fiber peer dependency requirements.

## Step 2: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

> **Note**: You may see some console warnings in development mode. These are expected for client-side heavy apps and won't appear in production.

## Step 3: Customize Your Content

### 1. Update Personal Data (`lib/data.ts`)

Replace the sample data with your information:

- **Projects**: Your projects with descriptions, technologies, and links
- **Publications**: Your research papers and publications  
- **Timeline**: Your work experience and education
- **Hackathons**: Your competition achievements
- **Certifications**: Your professional certifications
- **Skills**: Your technical skills with proficiency levels

### 2. Replace Images (`public/` directory)

Replace these placeholder images:

- `profile.jpg` - Your profile photo (400x400px recommended)
- `about-1.jpg` - Additional about section image (800x600px)
- `proj1.jpg` through `proj4.jpg` - Your project screenshots (800x600px)

### 3. Update Your Resume

Replace `public/resume.pdf` with your actual resume.

### 4. Update Links Throughout

Search and replace these links in the codebase:

- GitHub: `https://github.com/Omkarchaithanya` → Your GitHub URL
- LinkedIn: `https://www.linkedin.com/in/omkar-chaithanya-r/` → Your LinkedIn URL
- Calendly: `https://calendly.com/your-link` → Your Calendly link (in `components/ui/HUD.tsx`)
- Email: Update in `components/sections/Contact.tsx`

## Step 4: Configure EmailJS (Optional)

To enable the contact form:

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service and template
3. Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

4. Add your credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Uncomment the EmailJS code in `components/sections/Contact.tsx` (around line 15)

## Step 5: Test Your Changes

```bash
npm run dev
```

Check each section:
- ✅ Hero section loads with your name
- ✅ About section shows your info
- ✅ Skills radar chart displays
- ✅ Projects show with correct images
- ✅ All sections scroll smoothly
- ✅ Theme toggle works (🌞/🌙)
- ✅ Persona switcher works (🤖💻🔬)
- ✅ Konami code works (↑↑↓↓←→←→BA)

## Step 6: Deploy to Vercel

### Option A: Connect GitHub Repo

1. Push your changes to GitHub:
```bash
git add .
git commit -m "Customize portfolio content"
git push
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables (if using EmailJS)
6. Click "Deploy"

### Option B: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

## 🎨 Customization Tips

### Change Color Scheme

Edit `app/globals.css` to modify the theme colors:

```css
:root {
  --primary: #3b82f6;  /* Change this */
  --accent: #8b5cf6;   /* And this */
}
```

### Modify Persona Themes

Edit the persona-specific colors in `app/globals.css`:

```css
.persona-ai { --primary: #3b82f6; }
.persona-fullstack { --primary: #8b5cf6; }
.persona-research { --primary: #10b981; }
```

### Add More Projects

Add entries to the `projects` array in `lib/data.ts`:

```typescript
{
  id: 'proj5',
  title: 'My New Project',
  description: 'Description here',
  image: '/proj5.jpg',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  category: 'AI/ML', // or 'Full-Stack' or 'Research'
}
```

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Images Not Loading

Make sure images are in the `public/` directory and referenced without `/public` prefix:

```typescript
// ✅ Correct
image: '/profile.jpg'

// ❌ Wrong
image: '/public/profile.jpg'
```

### EmailJS Not Working

1. Check environment variables are set in `.env.local`
2. Verify EmailJS code is uncommented in `Contact.tsx`
3. Check browser console for error messages
4. Verify EmailJS service is active on their website

## 📚 Learn More

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber

## 🎉 You're Ready!

Your portfolio is set up and ready to showcase your work. Don't forget to:

- ✅ Update all content with your information
- ✅ Replace all placeholder images
- ✅ Test all features work correctly
- ✅ Deploy to show the world your amazing work!

**Questions?** Check `README.md` and `IMPLEMENTATION_SUMMARY.md` for more details.

---

Built with ❤️ using Next.js 14
