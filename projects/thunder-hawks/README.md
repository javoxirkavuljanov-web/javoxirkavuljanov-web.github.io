# Thunder Hawks - Official Team Website

A dynamic, responsive sports team website featuring modern design, interactive elements, and progressive web app capabilities.

## 🏆 Features

### Team Branding
- **Bold Athletic Design**: Navy (#1e3a8a) and Orange (#ea580c) color scheme
- **Sports Typography**: Orbitron and Rajdhani fonts for athletic feel
- **Motion Effects**: CSS animations and transitions throughout
- **Action Photography**: Placeholder areas for dynamic sports imagery

### Content Sections
- **Team Roster**: Interactive player cards with detailed stats and modal profiles
- **Game Schedule**: Upcoming matches with countdown timers and past results
- **Live Scores**: Real-time score simulation with animated updates
- **Team Statistics**: Season performance with animated counters and charts
- **Photo Gallery**: Filterable image gallery with categories
- **News Feed**: Latest team news and announcements
- **Team Store**: Merchandise showcase with category filtering
- **Fan Zone**: Interactive features for fan engagement

### Interactive Features
- **Player Profiles**: Detailed modal windows with comprehensive player stats
- **Video Highlights**: Modal video player for game highlights
- **Ticket Booking**: Interactive booking system interface
- **Fantasy Team Builder**: Drag-and-drop team creation tool
- **Social Integration**: Social media links and sharing capabilities
- **Newsletter Signup**: Email validation and subscription system
- **Mobile Navigation**: Responsive hamburger menu

### Performance & Functionality
- **Progressive Web App**: Installable with offline capabilities
- **Service Worker**: Caching strategy for optimal performance
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Cross-browser**: Compatible with modern browsers
- **SEO Optimized**: Semantic HTML and meta tags

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For best experience, serve from a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

### File Structure
```
thunder-hawks/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
└── README.md          # This file
```

## 🎨 Design System

### Colors
- **Primary Navy**: #1e3a8a
- **Primary Orange**: #ea580c
- **Dark Navy**: #1e2a5a
- **Light Orange**: #fb923c
- **Gradients**: Various combinations of primary colors

### Typography
- **Display Font**: Orbitron (headings, numbers)
- **Body Font**: Rajdhani (body text, navigation)
- **Font Weights**: 300, 400, 500, 600, 700, 900

### Components
- **Buttons**: Rounded with hover effects and animations
- **Cards**: Elevated with shadows and hover transforms
- **Modals**: Centered with backdrop blur
- **Navigation**: Fixed with scroll effects

## 📱 Progressive Web App

The website includes PWA capabilities:
- **Installable**: Can be installed on devices
- **Offline Support**: Service worker caches content
- **App-like Experience**: Standalone display mode
- **Background Sync**: Offline form submissions
- **Push Notifications**: Real-time updates

### PWA Features
- Manifest file with app metadata
- Service worker for caching and offline functionality
- Responsive design for all screen sizes
- Touch-friendly interface elements

## 🔧 Customization

### Adding Players
Edit the `playersData` array in `script.js`:
```javascript
{
    id: 7,
    name: "New Player",
    position: "midfielder",
    number: 7,
    goals: 5,
    assists: 3,
    matches: 10,
    // ... additional properties
}
```

### Adding Games
Edit the `gamesData` object in `script.js`:
```javascript
upcoming: [
    {
        id: 4,
        opponent: "New Team",
        date: "2024-12-30",
        time: "19:00",
        venue: "Stadium Name",
        isHome: true,
        logo: "fas fa-icon"
    }
]
```

### Styling Changes
Modify CSS variables in `styles.css`:
```css
:root {
    --primary-navy: #your-color;
    --primary-orange: #your-color;
    /* ... other variables */
}
```

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+

## 📊 Performance Features

- **Lazy Loading**: Images and content load on demand
- **Optimized Assets**: Compressed and minified resources
- **Caching Strategy**: Service worker implements cache-first strategy
- **Debounced Events**: Scroll and resize events are optimized
- **Intersection Observer**: Efficient scroll-based animations

## 🎯 Interactive Elements

### Fantasy Team Builder
- Drag and drop interface
- Position-based player slots
- Real-time team validation
- Save/load team configurations

### Live Score Simulation
- Real-time score updates
- Game time progression
- Score change notifications
- Match statistics tracking

### Ticket Booking System
- Game selection dropdown
- Ticket type options
- Quantity selection
- Form validation

## 🔒 Security Features

- **Input Validation**: All forms include client-side validation
- **XSS Protection**: Sanitized content insertion
- **HTTPS Ready**: Secure connection support
- **Content Security Policy**: Ready for CSP implementation

## 📈 Analytics Ready

The website is prepared for analytics integration:
- Event tracking for user interactions
- Performance monitoring hooks
- Conversion tracking for ticket sales
- User engagement metrics

## 🛠️ Development

### Adding New Features
1. Update HTML structure in `index.html`
2. Add styling in `styles.css`
3. Implement functionality in `script.js`
4. Update service worker cache if needed

### Testing
- Test on multiple devices and browsers
- Verify PWA functionality
- Check accessibility with screen readers
- Validate HTML and CSS

## 📄 License

This project is created for educational and demonstration purposes. Feel free to use and modify for your own projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Support

For questions or support, please open an issue in the project repository.

---

**Thunder Hawks** - Unleashing the Storm on the Field! ⚡🏆