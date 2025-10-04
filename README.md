# React Landing Page

A modern, responsive landing page built with React and TypeScript.

## Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Beautiful, clean interface with gradient effects
- 📱 **Mobile First** - Fully responsive design that works on all devices
- 🔧 **TypeScript** - Full type safety and better developer experience
- 🚀 **Easy to Deploy** - Ready for production deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with call-to-action
│   ├── Features.tsx     # Features showcase
│   ├── CallToAction.tsx # Call-to-action section
│   └── Footer.tsx       # Footer with links and social media
├── App.tsx              # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Customization

### Colors
The landing page uses a modern color scheme with gradients. You can customize the colors by modifying the CSS variables in the component styles.

### Content
Update the content in each component file:
- **Hero**: Change the title, description, and button text
- **Features**: Modify the features array with your own features
- **CallToAction**: Update the call-to-action text and buttons
- **Footer**: Update links, social media, and company information

### Styling
Each component uses styled-jsx for component-specific styles. You can modify the styles within each component or add global styles to `index.css`.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder contents
- **GitHub Pages**: Use the GitHub Actions workflow

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 with modern features
- Responsive design principles

## License

MIT License - feel free to use this project for your own purposes.

