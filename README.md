# TaskFlow - AI-Powered Workflow Automation Landing Page

A modern, responsive landing page built with **Next.js**, **Tailwind CSS**, and **Vercel v0** for TaskFlow, an AI-powered workflow automation platform.

## Live Demo

Deployed on Vercel: [Add your deployed URL here]

## Features

- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Modern Dark Theme**: Professional, tech-forward aesthetic
- **All Required Sections**:
  - Hero section with compelling headline and CTAs
  - 6-feature showcase with icons and descriptions
  - Social proof statistics section
  - Customer testimonials with star ratings
  - Three-tier pricing model
  - Final call-to-action section
  - Comprehensive footer with links and social media

- **Interactive Elements**:
  - Responsive navigation with mobile hamburger menu
  - Hover effects on cards and buttons
  - Smooth transitions and animations
  - Animated CTA buttons with arrow icons

- **Accessibility**:
  - Semantic HTML structure
  - Proper heading hierarchy
  - ARIA attributes where needed
  - Keyboard navigation support
  - Color contrast compliance

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with SSR
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, consistent icons
- **Design**: Built entirely with [Vercel v0](https://v0.app/) - AI-powered UI generation
- **Fonts**: [Google Fonts](https://fonts.google.com/) - Geist typography family
- **Deployment**: [Vercel](https://vercel.com/) - Optimized hosting platform

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Design system and theme tokens
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── features.tsx        # Features showcase
│   ├── stats.tsx           # Statistics section
│   ├── testimonials.tsx    # Customer testimonials
│   ├── pricing.tsx         # Pricing tiers
│   ├── cta.tsx             # Final call-to-action
│   └── footer.tsx          # Footer with links
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript config
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
cd taskflow-landing
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view in browser

## Customization

### Update Product Information
Edit `components/header.tsx` and `components/footer.tsx` to replace "TaskFlow" with your product name.

### Change Colors
Edit `app/globals.css` to modify CSS variables:
- `--primary`: Main brand color
- `--accent`: Highlight color
- `--background`: Dark theme background
- `--foreground`: Text color

### Update Content Sections
- **Features**: Edit `components/features.tsx`
- **Pricing**: Edit `components/pricing.tsx`
- **Testimonials**: Edit `components/testimonials.tsx`
- **Hero**: Edit `components/hero.tsx`

### Replace Images
Update the image path in `components/hero.tsx`:
\`\`\`tsx
src="/your-dashboard-image.png"
\`\`\`

## Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

## Deployment

### Deploy to Vercel

1. Push to GitHub repository
2. Import project in Vercel dashboard
3. Vercel automatically detects Next.js configuration
4. Deploy with one click

Or use the Vercel CLI:
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Performance

- **Optimized Bundle**: Tailwind CSS purges unused styles
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Route-based code splitting
- **SEO Ready**: Proper metadata and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Built with Vercel v0

This entire landing page was designed and generated using **Vercel v0**, a powerful AI tool for creating production-ready React components. 

See `V0_USAGE_DOCUMENTATION.md` for detailed information about which components and sections were built using v0.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
1. Check the documentation in `V0_USAGE_DOCUMENTATION.md`
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS docs: https://tailwindcss.com/docs

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for improvements.

---

**Built with ❤️ using Vercel v0**
