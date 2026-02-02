# 🚀 Facto-SIEM Quick Start Guide

## Getting Started

### Current Status
✅ Development server is **already running** at http://localhost:5173/

### Prerequisites
- Node.js 16+ (already installed)
- npm 8+ (already installed)
- Web browser

---

## Accessing the Dashboard

1. **Open your browser** and go to:
   ```
   http://localhost:5173/
   ```

2. **See the landing page** with 10 SOC modules:
   - 🔍 Search & Investigate
   - 📊 Telemetry & Collection
   - ⚠️ Alerts & Detection
   - 🚨 Incidents & Cases
   - 🔬 Detection Engineering
   - 🌐 Threat Intelligence
   - ⚡ Automated Response
   - 📈 Analytics & Reporting
   - 👥 User & Entity Behavior
   - ✅ Compliance & Auditing

3. **Click any module** to see the 3-panel dashboard layout

4. **Explore features**:
   - Left panel: Metrics, health status, feature buttons
   - Main panel: Event tables, data, content
   - Right panel: AI assistant, insights, alerts

---

## Development Commands

```bash
# Start dev server (if not running)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Stop dev server
# Press Ctrl+C in terminal
```

---

## File Navigation

### Most Important Files

| File | Purpose |
|------|---------|
| `src/pages/LandingPage.jsx` | Landing page with module grid |
| `src/pages/ModulePage.jsx` | Module detail view |
| `src/components/LeftPanel.jsx` | Left sidebar with metrics |
| `src/components/MainPanel.jsx` | Main content area |
| `src/components/RightPanel.jsx` | AI assistant sidebar |
| `src/App.jsx` | Routing and main app |
| `src/constants/modules.js` | Module data configuration |

### Styling Files

| File | Purpose |
|------|---------|
| `src/App.css` | **Global CSS variables** (change colors here!) |
| `src/pages/LandingPage.css` | Landing page styling |
| `src/pages/ModulePage.css` | Module page styling |
| `src/components/*.css` | Component-specific styles |

### Documentation

| File | Purpose |
|------|---------|
| `DESIGN_SYSTEM.md` | Complete design guidelines |
| `VISUAL_DESIGN.md` | Visual previews and examples |
| `REDESIGN_COMPLETE.md` | What was built and why |
| `PROJECT_SUMMARY.md` | Complete project overview |

---

## Customizing the Design

### Change Color Scheme

Edit `src/App.css` at the top:

```css
:root {
  /* Primary backgrounds */
  --bg-primary: #ffffff;        /* White background */
  --header-dark: #1f7a4f;       /* Header green */
  --accent-green: #2eb67d;      /* Bright green accents */
  
  /* Change these values to customize colors */
}
```

**All components automatically update!** (Hot reload)

### Change Fonts

In `src/App.css`:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  /* Use any font stack here */
}
```

### Add New Module

In `src/constants/modules.js`:

```javascript
{
  id: 'my-module',
  name: 'My New Module',
  icon: '🆕',
  description: 'Description here',
  badge: 'Category',
  features: ['Feature 1', 'Feature 2'],
  metrics: [
    { label: 'Metric 1', value: '123', trend: '↑ 5%' }
  ]
}
```

---

## Hot Reload Feature

✨ **Changes are instant!**

1. Edit any CSS file → Browser updates immediately
2. Edit any JSX file → Component refreshes
3. Edit module data → Grid updates instantly
4. No need to refresh the page!

---

## Module Layout Explanation

### 3-Panel Architecture

```
┌─────────────────────────────────────────┐
│ Header (Green gradient bar)              │
├───────────┬─────────────────────┬────────┤
│           │                     │        │
│   LEFT    │      MAIN           │ RIGHT  │
│  PANEL    │     PANEL           │ PANEL  │
│  280px    │    Flexible         │ 320px  │
│           │                     │        │
│ • Metrics │ • Search bar        │ • AI   │
│ • Health  │ • Data tables       │ • Alerts
│ • Buttons │ • Event details     │ • Tips │
│           │ • Content area      │        │
│           │                     │        │
└───────────┴─────────────────────┴────────┘
```

**Left Panel** (280px width)
- Metrics grid showing KPIs
- Health status indicator
- Feature navigation buttons
- Quick filters

**Main Panel** (Flexible width)
- Search bar with monospaced input
- Event/log tables
- Time range picker
- Content based on selected feature

**Right Panel** (320px width)
- AI Assistant ready message
- Action buttons
- Alert summary
- Module insights

---

## Common Tasks

### View Module Data
```javascript
// File: src/constants/modules.js
// Edit the MODULES array to see/change module data
```

### Change Header Color
```css
/* File: src/App.css */
--header-dark: #1f7a4f;  /* Deep green */
--header-light: #198754; /* Lighter green */
```

### Modify Table Columns
```jsx
// File: src/components/SearchExplorer.jsx
// Edit the table headers and row data structure
```

### Add New Feature Button
```jsx
// File: src/components/LeftPanel.jsx
// Add to the features.map() section
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save (auto-saved in Vite) |
| `F12` | Open Developer Tools |
| `Ctrl+R` | Hard refresh (if needed) |
| `Click module` | Navigate to module page |
| `← Back` button | Return to landing |

---

## Terminal Commands Reference

```bash
# Current working directory
cd c:\factosiem2

# Start development
npm run dev

# Install dependencies (already done)
npm install

# Build for production
npm run build

# View production build locally
npm run preview
```

---

## Browser Developer Tools

Press `F12` to open Developer Tools:

- **Elements** - Inspect CSS and HTML
- **Console** - View JavaScript errors
- **Network** - Check API calls
- **Performance** - Monitor load times
- **Responsive** - Test mobile sizes (Ctrl+Shift+M)

---

## Mobile Testing

### Test Responsive Design

1. Open DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Select device:
   - iPhone 12 (390x844)
   - iPad (768x1024)
   - Desktop (1920x1080)

The dashboard adapts to all sizes!

---

## Color Reference at a Glance

```
GREEN PALETTE (Enterprise SIEM)
├── Deep Green (#1F7A4F) ........... Headers
├── Bright Green (#2EB67D) ........ Accents, buttons, highlights
├── Soft Teal (#34B8A6) ........... Secondary accents
└── Low Severity (#28A745) ........ Healthy status

RED/ORANGE/YELLOW (Severity)
├── Critical (#DC3545) ............ 🔴 Red
├── High (#FD7E14) ............... 🟠 Orange
├── Medium (#FFC107) ............. 🟡 Yellow
└── Low (#28A745) ................ 🟢 Green

BACKGROUNDS
├── White (#FFFFFF) ............... Main backgrounds
├── Off-white (#F7F9FA) ........... Secondary
└── Light Gray (#EEF2F6) .......... Tertiary

TEXT
├── Charcoal (#1A1A1A) ............ Primary text
├── Dark Gray (#495057) ........... Secondary text
├── Muted Gray (#6C757D) .......... Labels/muted
└── Light Gray (#ADB5BD) .......... Disabled
```

---

## Performance Tips

### Optimize Performance
1. Use browser DevTools Performance tab
2. Check network tab for slow requests
3. Monitor console for JavaScript errors
4. Test on different devices

### Keep It Fast
- ✅ No heavy animations
- ✅ Minimal CSS complexity
- ✅ No unnecessary re-renders
- ✅ Lightweight dependencies

---

## Troubleshooting

### Dev server not starting?
```bash
# Kill any existing processes
# Restart server
npm run dev
```

### CSS not updating?
```bash
# Hard refresh browser
Ctrl+Shift+R (or Cmd+Shift+R on Mac)
```

### Need to reset everything?
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 already in use?
```bash
# Use different port
npm run dev -- --port 3000
```

---

## Next Steps

1. ✅ Explore the current design at http://localhost:5173/
2. ✅ Click through all 10 modules
3. ✅ Review DESIGN_SYSTEM.md for complete guidelines
4. ✅ Customize colors/fonts as needed
5. ✅ Add real data when ready
6. ✅ Deploy to production (npm run build)

---

## Resources

### Documentation Files
- `DESIGN_SYSTEM.md` - Complete design specifications
- `VISUAL_DESIGN.md` - Visual examples and previews
- `REDESIGN_COMPLETE.md` - Project details
- `PROJECT_SUMMARY.md` - Overview and features

### Online Resources
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com

---

## Support

For questions or issues:
1. Check the documentation files
2. Review the component code
3. Inspect with browser DevTools
4. Check console for error messages

---

## Final Notes

✅ **Everything is set up and running**
✅ **Hot reload is working (instant updates)**
✅ **Documentation is complete**
✅ **Ready for customization or deployment**

Just edit, save, and watch it update in real-time! 🎉

---

**Happy SIEM-ing!** 🔐🚀
