# Javier Guevara - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and provides a way to get in touch.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Automatic dark mode support with Tailwind CSS
- **Project Showcase**: Display projects with custom images and GitHub/live site links
- **Contact Form**: Integrated Web3Forms for email submissions
- **Modern UI**: Clean and professional design with smooth animations
- **Social Links**: Quick access to GitHub, LinkedIn, and email

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Form Handling**: Web3Forms

## 📋 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with social links
│   │   ├── ProjectCard.tsx     # Reusable project card component
│   │   └── ContactForm.tsx     # Contact form with Web3Forms
│   ├── page.tsx                # Main homepage
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── public/
│   └── images/                 # Project images
└── README.md
```

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

### Adding Projects

Edit the `projects` array in `app/page.tsx`:

```typescript
{
  id: 1,
  title: "Project Title",
  description: "Project description",
  imageUrl: "/images/your-image.png",
  githubUrl: "https://github.com/...",
  imagePosition: "center",  // Optional: CSS object-position value
  objectFit: "cover"        // Optional: 'cover' or 'contain'
}
```

### Contact Form

The contact form uses Web3Forms. To set it up:
1. Get your access key from [web3forms.com](https://web3forms.com)
2. Update the access key in `app/components/ContactForm.tsx`

### Social Links

Update social media links in `app/components/Navbar.tsx`:
- GitHub: Line 18
- LinkedIn: Line 27
- Email: Line 36

## 📦 Build & Deploy

Build for production:

```bash
npm run build
```

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MyNameJavi/portfolio)

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: javierguevara3@outlook.com
- **GitHub**: [@MyNameJavi](https://github.com/MyNameJavi)
- **LinkedIn**: [Javier Guevara](https://www.linkedin.com/in/javier-guevara-698609214)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
