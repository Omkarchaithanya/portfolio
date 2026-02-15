# Omkar Chaithanya - AI/ML & Full-Stack Portfolio

A cutting-edge portfolio website showcasing AI/ML expertise, full-stack development skills, and research work. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Features

### Core Features
- **🎨 Persona Switcher**: Switch between AI/ML, Full-Stack, and Research personas to dynamically retheme CTAs and content
- **🌓 Dark/Light Mode**: Fully functional theme toggle with smooth transitions
- **📱 Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **♿ Accessibility**: WCAG-compliant with skip links, focus-visible styles, and reduced motion support

### Sections
- **Hero**: Animated hero section with typed text effect and interactive 3D background using React Three Fiber
- **About**: Personal introduction with key statistics
- **Skills**: Interactive radar chart with category filters
- **Projects**: Scrollytelling spotlight with project showcase
- **Labs**: Interactive Vision Lab with webcam integration (stub implementation)
- **Publications**: Research papers and publications
- **Timeline**: Professional journey visualization
- **Hackathons**: Competition achievements
- **Certifications**: Professional certifications
- **Contact**: Functional contact form with React Hook Form and EmailJS integration (requires configuration)

### Special Features
- **🎮 Konami Code Easter Egg**: Type the famous Konami code (↑↑↓↓←→←→BA) to reveal an interactive 3D scene
- **🖥️ HUD Component**: Floating status display showing availability, local time, and quick actions
- **📊 Skills Radar Chart**: Interactive Chart.js visualization
- **✨ Smooth Animations**: Powered by Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D Graphics**: React Three Fiber (@react-three/fiber, @react-three/drei)
- **Forms**: React Hook Form
- **Charts**: Chart.js with react-chartjs-2
- **Email**: EmailJS (requires configuration)
- **UI Feedback**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Omkarchaithanya/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Configuration

### EmailJS Setup (Optional)

To enable the contact form email functionality:

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service and template
3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Uncomment the EmailJS integration code in `components/sections/Contact.tsx`

### Analytics Setup (Optional)

The portfolio is ready for analytics integration. Add your tracking IDs to the environment variables:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_domain
```

### Customization

#### Personal Information

Update the following files with your information:

- `lib/data.ts`: Projects, publications, timeline, hackathons, certifications, skills
- `public/resume.pdf`: Replace with your resume
- `public/*.jpg`: Replace placeholder images with your photos

#### Links

Update social media and contact links in:
- `components/sections/Hero.tsx`
- `components/ui/Footer.tsx`
- `components/ui/HUD.tsx`
- `components/ui/Navbar.tsx`

#### Calendly Link

Update the Calendly link in `components/ui/HUD.tsx`:
```typescript
href="https://calendly.com/your-link"
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables (if using EmailJS or analytics)
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── labs/              # Interactive lab components
│   ├── providers/         # Context providers (Theme, Persona)
│   ├── sections/          # Main page sections
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and data
├── public/                # Static assets
├── types/                 # TypeScript type definitions
└── ...config files
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Note: 3D features require WebGL support.

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Dynamic imports for heavy components (R3F, Chart.js)
- Reduced motion support for accessibility

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- GitHub: [@Omkarchaithanya](https://github.com/Omkarchaithanya)
- LinkedIn: [omkar-chaithanya-r](https://www.linkedin.com/in/omkar-chaithanya-r/)

---

Built with ❤️ using Next.js 14

