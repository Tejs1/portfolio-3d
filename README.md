# 3D Portfolio

A modern 3D portfolio website built with React, Three.js, and Tailwind CSS.

## Features

- Modern UI/UX with a 3D experience
- Responsive design for all device sizes
- Interactive 3D elements using Three.js
- Animated components using Framer Motion
- Contact form with EmailJS integration
- Performance optimized 3D rendering

## Tech Stack

- React.js
- Three.js
- Framer Motion
- Tailwind CSS
- EmailJS
- Vite

## Live Demo

[View Live Demo](https://your-username.github.io/portfolio-3d/)

## Screenshots

![Portfolio Screenshot](screenshot.png)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio-3d.git
```

2. Navigate to the project directory
```bash
cd portfolio-3d
```

3. Install dependencies
```bash
bun install
# or
npm install
```

4. Start the development server
```bash
bun run dev
# or
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
bun run build
# or
npm run build
```

### Deployment

You can deploy this portfolio to GitHub Pages using the provided deploy script:

1. Update the GitHub repository details in `deploy.sh`
2. Make the script executable:
```bash
chmod +x deploy.sh
```
3. Run the deployment script:
```bash
./deploy.sh
```

## Customization

1. Personal Information:
   - Edit `src/constants/index.ts` to update your personal information, experience, projects, and testimonials

2. 3D Models:
   - The 3D models are created directly using Three.js in the components/canvas directory

3. Contact Form:
   - Update the EmailJS service ID, template ID, and public key in `src/components/Contact.jsx`

## License

MIT

## Acknowledgments

- [Three.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
