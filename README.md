# React SPA Production

A production-ready React Single Page Application built with modern tools and best practices.

## 🚀 Features

- **React 19** - Latest React with concurrent features and automatic batching
- **TypeScript 5.7** - Full TypeScript support with strict type checking
- **Webpack 5** - Modern bundling with optimizations and module federation
- **LESS** - Enhanced CSS with variables, nesting, and autoprefixer
- **Code Splitting** - Automatic code splitting and lazy loading
- **Hot Module Replacement** - Fast development with HMR
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Git hooks for code quality
- **Error Boundaries** - Graceful error handling
- **Responsive Design** - Mobile-first responsive design
- **Environment Variables** - Flexible configuration management

## 📦 Tech Stack

### Core
- React 19.0.0
- TypeScript 5.7.2
- React Router DOM 7.0.2

### Build Tools
- Webpack 5.97.1
- Babel (with TypeScript preset)
- PostCSS with Autoprefixer

### Styling
- LESS 4.2.1
- CSS Modules
- Responsive design utilities

### Code Quality
- ESLint 9.15.0 with React and TypeScript rules
- Prettier 3.3.3
- Husky 9.1.7 for git hooks
- lint-staged 15.2.11

### Development Tools
- Webpack Dev Server
- Webpack Bundle Analyzer
- Source maps for debugging

## 🛠 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd react-spa-production
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

3. **For CodeSandbox/Cloud IDEs:**
   ```bash
   npm start
   # or
   npm run dev:codesandbox
   ```
   The server is configured to accept external hosts for cloud development environments.

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Available Scripts

### Development
- `npm run dev` - Start development server with hot reload
- `npm start` - Start development server (CodeSandbox compatible)
- `npm run dev:codesandbox` - Start server with external host support
- `npm run build` - Build production bundle
- `npm run build:analyze` - Build and analyze bundle size

### Code Quality
- `npm run lint` - Run ESLint and fix issues
- `npm run lint:check` - Check ESLint issues without fixing
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Git Hooks
- `npm run prepare` - Setup Husky git hooks

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Main layout components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Site footer
│   ├── LoadingSpinner/ # Loading states
│   └── ErrorBoundary/  # Error handling
├── pages/              # Page components
│   ├── Home/           # Homepage
│   ├── About/          # About page
│   ├── Contact/        # Contact form
│   └── NotFound/       # 404 page
├── styles/             # Global styles and variables
│   ├── variables.less  # LESS variables
│   └── global.less     # Global styles
├── utils/              # Utility functions
│   └── env.ts          # Environment variables
├── types/              # TypeScript type definitions
│   └── global.d.ts     # Global type declarations
├── assets/             # Static assets
│   ├── images/         # Images
│   └── fonts/          # Fonts
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Application Configuration
NODE_ENV=development
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_APP_NAME=React SPA Production
REACT_APP_VERSION=1.0.0

# Build Configuration
GENERATE_SOURCEMAP=true
INLINE_RUNTIME_CHUNK=false

# Development Configuration
FAST_REFRESH=true
BROWSER=none

# Feature Flags
REACT_APP_FEATURE_NEW_DASHBOARD=false
REACT_APP_FEATURE_EXPERIMENTAL=false
```

### Webpack Configuration

- **webpack.common.js** - Shared configuration
- **webpack.dev.js** - Development configuration
- **webpack.prod.js** - Production configuration

### TypeScript Configuration

- **tsconfig.json** - TypeScript compiler options
- Path aliases configured for clean imports
- Strict type checking enabled

### ESLint Configuration

- **eslint.config.js** - ESLint rules and plugins
- React, TypeScript, and accessibility rules
- Import sorting and formatting rules

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use CSS Modules for component styling
- Implement proper error boundaries
- Use semantic HTML and ARIA attributes

### Component Structure
```tsx
import React from 'react';
import styles from './Component.module.less';
import type { FC } from 'react';

interface ComponentProps {
  // Define props here
}

const Component: FC<ComponentProps> = ({ ...props }) => {
  return (
    <div className={styles.component}>
      {/* Component content */}
    </div>
  );
};

export default Component;
```

### Styling Guidelines
- Use LESS variables from `src/styles/variables.less`
- Follow BEM naming convention for CSS classes
- Implement responsive design with mobile-first approach
- Use CSS Modules for component-scoped styles

## 🚀 Production Deployment

### Build Optimization
The production build includes:
- Code splitting and lazy loading
- Tree shaking for smaller bundles
- CSS extraction and minification
- JavaScript minification with Terser
- Source maps for debugging
- Cache busting with content hashes

### Build Analysis
```bash
npm run build:analyze
```
This opens Webpack Bundle Analyzer to visualize bundle sizes.

### Deployment Options

#### CodeSandbox
The project is pre-configured for CodeSandbox with:
- `sandbox.config.json` - CodeSandbox configuration
- External host support in webpack dev server
- CORS headers for cloud development
- `npm start` script for easy startup

#### Static Hosting (Netlify, Vercel, etc.)
```bash
npm run build
# Deploy the 'dist' folder
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

## 🧪 Git Hooks & Code Quality

### Pre-commit Hook
Automatically runs on `git commit`:
- ESLint checks and fixes
- Prettier formatting
- Only on staged files

### Pre-push Hook
Runs on `git push`:
- TypeScript type checking
- ESLint validation

### Bypassing Hooks (Not Recommended)
```bash
git commit --no-verify
git push --no-verify
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node modules issues:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors:**
   ```bash
   npm run type-check
   ```

4. **ESLint errors:**
   ```bash
   npm run lint
   ```

### Performance Tips
- Use React DevTools Profiler
- Implement code splitting for large pages
- Optimize images and assets
- Use Webpack Bundle Analyzer to identify large dependencies

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Webpack Documentation](https://webpack.js.org/)
- [LESS Documentation](https://lesscss.org/)

### Tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run tests and linting: `npm run lint && npm run type-check`
5. Commit changes: `git commit -m 'Add new feature'`
6. Push to branch: `git push origin feature/new-feature`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Frontend Architect** - Expert in modern React development with production-ready configurations.

---

**Happy Coding! 🚀**