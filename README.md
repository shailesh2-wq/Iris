# IRIS Student Portal

A modern, responsive student portal built with React and Vite, designed for NITK students to manage their academic information, track attendance, and access campus resources.

![IRIS Portal](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

### 📱 Responsive Design
- **Mobile-first approach** with support for all screen sizes
- **Adaptive layouts** for desktop, tablet, and mobile devices
- **Touch-friendly interface** with optimized interactions
- **Progressive enhancement** for better performance

### 🎨 Modern UI/UX
- **Glassmorphism design** with gradient backgrounds
- **Smooth animations** and hover effects
- **Dark theme** optimized for extended use
- **Intuitive navigation** with hamburger menu for mobile

### ♿ Accessibility
- **WCAG 2.1 compliant** with ARIA labels and roles
- **Keyboard navigation** support
- **Screen reader compatibility**
- **High contrast** and readable typography

### 📊 Dashboard Features
- **Academic Statistics**: Credits, CGPA, and semester information
- **Attendance Tracking**: Visual progress bars for course attendance
- **Announcements**: Latest campus news and updates
- **Quick Actions**: Easy access to timetable, fees, and other services
- **Deadlines**: Upcoming assignment and exam dates

### 🛡️ Robust Architecture
- **Error handling** with user-friendly error messages
- **Input validation** and form security
- **Loading states** with smooth transitions
- **Component-based** architecture for maintainability

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0 with Hooks
- **Build Tool**: Vite 5.0.0
- **Styling**: CSS3 with Custom Properties
- **Icons**: React Icons (Font Awesome)
- **Development**: ESLint for code quality

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iris
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
iris/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar/        # Navigation component
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Dashboard/     # Main dashboard
│   │       ├── Dashboard.jsx
│   │       └── Dashboard.css
│   ├── assets/           # Images and icons
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🎯 Key Components

### Navbar Component
- **Responsive navigation** with mobile hamburger menu
- **Search functionality** with input validation
- **User profile display** with avatar and information
- **Keyboard navigation** support

### Dashboard Component
- **Academic statistics** cards with visual indicators
- **Attendance tracking** with color-coded progress bars
- **Announcements section** for campus updates
- **Quick actions** for common tasks
- **Deadlines tracker** with visual indicators

## 🎨 Design System

### Color Palette
- **Primary**: `#706FEB` (Purple accent)
- **Background**: `#121212` (Dark background)
- **Surface**: `#1f1f1f` (Card backgrounds)
- **Text**: `#ffffff` (Primary text)
- **Muted**: `#bfbfbf` (Secondary text)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Responsive sizing** with CSS custom properties
- **Consistent spacing** using design tokens

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ♿ Accessibility Features

- **ARIA labels** for all interactive elements
- **Semantic HTML** structure
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Focus management** for mobile menu
- **Color contrast** compliance

## 🚀 Performance Optimizations

- **CSS Custom Properties** for efficient theming
- **Optimized animations** with hardware acceleration
- **Lazy loading** for better initial load times
- **Minimal bundle size** with Vite optimization

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Code Quality
- **ESLint** configuration for consistent code style
- **Component documentation** with JSDoc comments
- **Error handling** with try-catch blocks
- **Input validation** for user inputs

## 📈 Recent Updates

### Version 1.0.0 Features
- ✅ Responsive design implementation
- ✅ Modern UI with glassmorphism effects
- ✅ Accessibility compliance (WCAG 2.1)
- ✅ Error handling and validation
- ✅ Loading states and animations
- ✅ Component documentation
- ✅ CSS organization with custom properties
- ✅ Code formatting and consistency

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Module Designers

- **Akshay Revankar**
- **Govind Jeevan**

## 📞 Support

For support and inquiries, contact:
- **Email**: officers@iris.nitk.ac.in
- **Website**: [NITK Website](https://www.nitk.ac.in)

## 🙏 Acknowledgments

- NITK (National Institute of Technology Karnataka)
- React and Vite communities
- Font Awesome for icons
- Google Fonts for typography

---

**Built with ❤️ for NITK students**