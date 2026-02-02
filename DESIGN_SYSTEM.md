# Facto-SIEM Design System

## Modern Enterprise SIEM Dashboard UI
A Splunk-inspired, green-and-white interface designed for SOC analysts working long hours.

---

## Color Palette

### Primary
- **Background**: White (#FFFFFF) and Off-white (#F7F9FA)
- **Primary Green**: Deep green (#1F7A4F) for headers and navigation
- **Accent Green**: Bright Splunk-style green (#2EB67D) for highlights and CTAs

### Secondary
- **Gray**: Muted gray (#6C757D) for secondary text
- **Teal**: Soft teal (#34B8A6) for subtle accents
- **Text Dark**: Charcoal (#1A1A1A) for primary text
- **Text Secondary**: Dark gray (#495057) for body text

### Severity Colors
- **Critical**: Red (#DC3545) - High-priority threats
- **High**: Orange (#FD7E14) - Important alerts
- **Medium**: Yellow (#FFC107) - Warning-level events
- **Low**: Green (#28A745) - Informational events

### Utilities
- **Border Light**: #E9ECEF
- **Border**: #DEE2E6
- **Background Secondary**: #F7F9FA
- **Background Tertiary**: #EEF2F6

---

## Typography

### Font Stack
**UI Elements**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`

**Log/Event Data**: `'Monaco', 'Menlo', 'Ubuntu Mono', monospace` (12px)

### Hierarchy
- **Page Title**: 32px, Weight 700, -0.5px letter spacing
- **Section Title**: 24px, Weight 700
- **Subsection**: 16px, Weight 700
- **Label/Metadata**: 11px, Weight 700, uppercase, 0.5px letter spacing
- **Body Text**: 13px, Weight 400, 1.6 line height
- **Small Text**: 12px, Weight 400
- **Tiny Text**: 11px, Weight 600

---

## Shadows & Elevation

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);
```

- **SM**: Cards, light hover states, subtle depth
- **MD**: Headers, modals, action buttons on hover
- **LG**: Not commonly used; reserved for overlays

---

## Components

### Header/Navigation
- **Background**: Linear gradient from #1F7A4F to #198754
- **Border**: 3px solid #2EB67D accent line
- **Elevation**: Medium shadow
- **Padding**: 16-24px
- **Text Color**: White with green accents

### Buttons
**Primary (CTA)**
- Background: #2EB67D
- Text: White
- Hover: #198754 (darker green)
- State: Active = darker shade with shadow

**Secondary**
- Background: White
- Border: 1px #DEE2E6
- Text: #495057
- Hover: Green border (#2EB67D), green text

**Tertiary (Disabled)**
- Background: #F7F9FA
- Text: #ADB5BD
- Border: 1px #E9ECEF
- Cursor: not-allowed

### Cards
- Background: White or off-white
- Border: 1px #E9ECEF or #DEE2E6
- Border-radius: 6-8px
- Padding: 12-28px
- Shadow: --shadow-sm
- Hover: Border color → green, shadow → md

### Tables
**Header Row**
- Background: #F7F9FA
- Border-bottom: 2px #2EB67D
- Text: 12px, uppercase, #6C757D, 0.5px letter-spacing
- Padding: 12px 16px

**Data Row**
- Padding: 14px 16px
- Border-bottom: 1px #E9ECEF
- Hover: Background rgba(46, 182, 125, 0.04), left border 3px green
- Font: 13px, #495057
- Monospaced for log data (12px, Monaco)

**No bottom border on last row**

### Search Bar
- Background: White
- Border: 1px #DEE2E6
- Border-radius: 6px
- Focus: Border #2EB67D, shadow 0 0 0 3px rgba(46, 182, 125, 0.1)
- Font-family: Monospaced
- Placeholder: #ADB5BD

### Pills/Badges
- Padding: 4-8px horizontal, 4px vertical
- Border-radius: 4px
- Font: 11px, 600 weight
- By severity:
  - Critical: Red bg + text
  - High: Orange bg + text
  - Medium: Yellow bg + text
  - Low: Green bg + text
- Semi-transparent backgrounds: rgba(color, 0.15)

### Metrics/KPI Cards
- Background: White
- Border: 1px #E9ECEF
- Label: 10px uppercase, #6C757D
- Value: 18px, weight 700, #1F7A4F (dark green)
- Trend: 11px, #28A745, weight 600

### Timeline/Sparkline
- Track: #E9ECEF
- Fill: Linear gradient (light to bright green)
- Handle: 12px circle, #2EB67D, white border
- Labels: 11px, #6C757D

---

## Layout

### 3-Panel Architecture
**Left Panel**: 280px
- Metrics grid (2 columns)
- Health indicator
- Feature navigation buttons
- Background: #F7F9FA

**Main Panel**: Flex 1
- Primary content area
- Search results, logs, events
- Data-dense tables
- Background: White

**Right Panel**: 320px
- AI assistant interface
- Alert summary
- Insights panel
- Background: #F7F9FA

### Responsive Breakpoints
- **Desktop** (>1200px): 3-panel layout
- **Tablet** (768px-1200px): Panels stack, left/right collapse
- **Mobile** (<768px): Single column, stacked panels

---

## Interaction Patterns

### Hover States
- **Cards**: Slight elevation increase (shadow md), border color shifts to green
- **Buttons**: Color intensity increases, shadow appears
- **Table Rows**: Light green background highlight, green left border appears
- **Filters**: Green text, green border on hover

### Focus States
- **Input fields**: Border #2EB67D, outer shadow with green tint
- **Buttons**: Standard browser focus outline (can customize with green)
- **Links**: Underline #2EB67D, text color #2EB67D

### Active/Selected
- **Buttons**: Darker green background, white text, shadow
- **Filters**: Active pill state with solid green background
- **Table rows**: Green highlight, left border indicator

### Loading
- **Spinners**: Green (#2EB67D) rotation animation
- **Progress bars**: Green fill on gray background
- **Pulse animations**: Used for status indicators

---

## Data Visualization

### Color Scheme for Charts
- **Series 1**: #2EB67D (primary green)
- **Series 2**: #34B8A6 (teal accent)
- **Series 3**: #1F7A4F (dark green)
- **Severity overlay**: Use severity colors (red/orange/yellow/green)

### Chart Types
- **Line Charts**: Green lines on white background
- **Bar Charts**: Green bars, gray grid lines
- **Pie Charts**: Multi-green palette with segments
- **Heat Maps**: Green intensity gradient

---

## Spacing & Sizing

### Base Unit: 4px
- **4px**: Tiny gaps, internal padding
- **8px**: Small gaps, element spacing
- **12px**: Card padding, button padding
- **16px**: Section padding, component spacing
- **20px**: Panel padding
- **24px**: Header/section padding
- **28px**: Large card padding
- **32px**: Page content padding
- **48px**: Hero section padding

### Border Radius
- **4px**: Pills, small badges, inputs
- **6px**: Cards, buttons, moderate elements
- **8px**: Large cards
- **12px**: Not commonly used (keep minimal)

---

## Accessibility

- **Color Contrast**: All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Focus Indicators**: Visible green border/shadow (not just color)
- **Icon + Text**: Always pair icons with text labels
- **Severity Colors**: Always accompanied by text labels (not color-only)
- **Monospaced Logs**: Easy to scan and copy
- **Line Height**: 1.5-1.6 for readability

---

## UI Style Summary

✅ **Minimal, flat enterprise design**
✅ **Clean tables with thin dividers**
✅ **High-density layouts for logs and events**
✅ **Subtle shadows (never harsh shadows)**
✅ **Rounded corners for friendliness, not excessive**
✅ **Monospaced font for log data**
✅ **Professional, clean typography**
✅ **Green-and-white = trusted, powerful SIEM**
✅ **Splunk-inspired but with fresh refinement**
✅ **Analyst-first usability**

---

## Implementation Notes

- Use CSS custom properties (CSS variables) for all colors
- Implement responsive design from mobile-first perspective
- Add smooth transitions (0.2s ease) for all interactive states
- Keep shadows minimal and purposeful
- Ensure sufficient whitespace between elements
- Use grid layouts for consistency
- Test with actual log data (not Lorem Ipsum)
- Provide clear visual hierarchy
- Make alerts/errors unmissable (red prominence)
- Support dark mode readability (good contrast ratios)
