# Mohamed Alaa - Portfolio

A modern, responsive portfolio website showcasing Unity game development projects, professional experience, and technical expertise. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode** - Built-in dark mode with smooth transitions
- **Modern UI** - Clean and professional design with gradient accents
- **Performance** - Fast loading with Vite and optimized assets
- **SEO Optimized** - Meta tags for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Hosting**: GitHub Pages

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🏃 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Alaa-portfolio.git

# Navigate to the project directory
cd Alaa-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`.

### Building

```bash
# Build for production
npm run build
```

The production build will be generated in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section
3. Set **Source** to "GitHub Actions"
4. Push to the `main` branch to trigger deployment

The site will be available at: `https://YOUR_USERNAME.github.io/Alaa-portfolio/`

## 📁 Project Structure

```
Alaa-portfolio/
├── .github/workflows/     # GitHub Actions workflow
│   └── deploy.yml
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Main application component
│   ├── data.js           # Portfolio data and content
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/data.js` to update:
- Personal info (name, email, phone, links)
- Work experience
- Projects
- Skills
- Education

### Styling

The project uses Tailwind CSS. Customize:
- `tailwind.config.js` - Theme colors, fonts, etc.
- `src/index.css` - Global styles

### Add Project Images

Add project images to `public/projects/` and update image paths in `src/data.js`.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Mohamed Alaa**

- Portfolio: [mohamedalaa95.weebly.com](https://mohamedalaa95.weebly.com)
- LinkedIn: [linkedin.com/in/mohamedalaa95](https://www.linkedin.com/in/mohamedalaa95)
- GitHub: [@mohamedalaa95](https://github.com/mohamedalaa95)
- Email: mo.alaa3010@gmail.com

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)

