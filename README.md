# CodeFlow AI - Landing Page

A modern, responsive landing page for CodeFlow AI, an intelligent AI-powered coding assistant that accelerates development workflows with advanced code completion, automated refactoring, and real-time error detection.

## 🚀 Features

### AI-Powered Development Tools

- **Smart Code Completion**: Real-time AI suggestions for faster coding
- **Automated Testing**: Built-in test generation and execution
- **Smart Debugging**: AI-powered error detection and fixing
- **Intelligent Refactoring**: Automated code improvements
- **Real-time Error Detection**: Instant feedback on code quality

### Interactive Landing Page

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **3D Visual Effects**: Engaging Three.js animations and interactions
- **Code Editor Demo**: Live syntax-highlighted code examples
- **Smooth Animations**: CSS animations with scroll-triggered effects
- **Dark Theme**: Modern dark UI with blue/cyan accent colors

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 4.x
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Code Highlighting**: React Syntax Highlighter
- **Linting**: ESLint with React-specific rules

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx       # Main hero section with code demo
│   │   ├── Features.jsx   # Features showcase
│   │   ├── Pricing.jsx    # Pricing plans
│   │   ├── Testimonials.jsx # User testimonials
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── data/              # Static data and examples
│   │   └── CodeExamples.js # Code snippets and feature data
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── index.html            # HTML template
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#3B82F6) to Cyan (#06B6D4) gradients
- **Background**: Dark slate (#020617)
- **Text**: White (#FFFFFF) with gray variants
- **Accent**: Blue and cyan for highlights

### Typography

- **Font Family**: System fonts with Tailwind's default stack
- **Headings**: Responsive sizing from 3xl to 6xl
- **Body Text**: Base to lg sizes with proper line heights

### Components

- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Glassmorphism with backdrop blur
- **Code Blocks**: Syntax highlighting with night owl theme
- **Navigation**: Responsive mobile menu

## 🌟 Key Components

### Hero Section

Interactive hero with:

- Animated background effects following mouse movement
- Tabbed code editor demo
- Floating feature cards
- Call-to-action buttons

### Features Section

Showcases three main features:

- AI Code Completion
- Automated Testing
- Smart Debugging

Each feature includes code examples and descriptions.

### Pricing Section

Three pricing tiers with different feature sets.

### Testimonials Section

User reviews and success stories.

## 🔧 Development

### Code Quality

- ESLint configuration for React and modern JavaScript
- Prettier for consistent code formatting
- React Compiler enabled for performance optimization

### Performance

- Vite's fast development server
- Optimized production builds
- Lazy loading and code splitting
- Minimal bundle size with tree shaking

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## 📄 License

This project is private and proprietary to CodeFlow AI.

## 🤝 Contributing

This is a landing page project. For contributions or feature requests, please contact the development team.

## 📞 Contact

For questions about CodeFlow AI or this landing page, please reach out to the development team.
