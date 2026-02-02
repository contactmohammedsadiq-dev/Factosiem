# Facto-SIEM Visual Design Preview

## Landing Page

```
┌─────────────────────────────────────────────────────────────────┐
│ ◆ Facto-siem      Enterprise Threat Intelligence • AI-Native... │ ← Green header
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Welcome to Your SOC Platform                                   │
│  Unified threat investigation, detection, and response across   │
│  your entire infrastructure. Select a module to begin.           │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 🔍 Search    │  │ 📊 Telemetry │  │ ⚠️  Alerts    │  ← White cards
│  │ & Investigate│  │ & Collection │  │ & Detection  │     with green
│  │ AI-powered   │  │ Real-time... │  │ Real-time... │     on hover
│  │ search       │  │              │  │              │
│  │ CORE         │  │ INFRASTRUCTURE  │ DETECTION    │
│  └──────────────┘  └──────────────┘  └──────────────┘
│  
│  More modules below...
│
```

---

## Module Page - 3-Panel Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│ ← Back    🔍 Search & Investigate                                    │ ← Green header
├──────────────────────────────────────────────────────────────────────┤
│            │                                                           │
│  LEFT      │  MAIN PANEL                                │ RIGHT       │
│ (280px)    │  (Flexible)                                │ (320px)     │
│            │                                             │             │
│ ┌────────┐ │ ┌─────────────────────────────────────────┐│ ┌────────┐│
│ │ METRICS │ │ │ Search logs (monospace input)    🔍    ││ │AI ASST ││
│ │         │ │ │ Error Events | Last 24h | High Pri   ││ │        ││
│ ├────────┤ │ │ ┌────────────────────────────────────┐ ││ ├────────┤│
│ │ 1,247  │ │ │ Time    │Source │User │Action│Status││ ││ │Ready   ││
│ │Queries │ │ │ Queries │ IP    │     │      │      ││ ││ │to help ││
│ │/Hour   │ │ ├─────────┼───────┼─────┼──────┼──────┤ ││ │        ││
│ ├────────┤ │ │ 14:32:45│192.168│john │login │LOW   ││ ││ │[Ask]   ││
│ │240ms   │ │ │ 14:31:22│192.168│mary │file  │MED   ││ ││ │[Tips]  ││
│ │ Avg    │ │ │ 14:30:18│10.0.0 │root │proc  │LOW   ││ ││ │[View]  ││
│ │Response│ │ │ 14:29:01│192.168│anna │login │HIGH  ││ ││ │        ││
│ ├────────┤ │ │ 14:27:45│10.0.1 │sys  │exfil │CRITICAL││ ├────────┤│
│ │Features│ │ │ └────────┴───────┴─────┴──────┴──────┘ ││ │ALERTS  ││
│ │[AI Log]│ │ │                                         ││ │        ││
│ │[Intent]│ │ │ [Showing 5 of 2,847 events]            ││ │Crit: 12││
│ │[Filter]│ │ │                                         ││ │High: 34││
│ │[Saved] │ │ │ ┌─────────────────────────────────────┐ ││ │Med: 89 ││
│ │[Hist]  │ │ │ Time Range Picker                    │ ││ │Low:214 ││
│ │         │ │ │ [5m][15m][1h][4h][24h][7d][Custom]  │ ││ │        ││
│ │ HEALTH  │ │ │ ▓░░░░░░░░░░░ Last 24 hours         │ ││ │Recent: ││
│ │ ● Sys   │ │ │ └─────────────────────────────────────┘ ││ │INC-001 ││
│ │ Healthy │ │ │                                         ││ │INC-002 ││
│ └────────┘ │ └─────────────────────────────────────────┘│ └────────┘│
│            │                                             │             │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Color Examples in Context

### Severity Indicators
```
┌─────────────────────────────────────────────┐
│ ALERT SEVERITY BREAKDOWN                    │
├─────────────────────────────────────────────┤
│ ● CRITICAL        12    ↑3      (RED)       │
│ ● HIGH            34    ↑8      (ORANGE)    │
│ ● MEDIUM          89    ↑14     (YELLOW)    │
│ ● LOW            214    ↑42     (GREEN)     │
└─────────────────────────────────────────────┘

Recent Alerts:
┌─ INC-001 Suspicious Login    CRITICAL ──┐
│ 2 min ago                                 │
├─ INC-002 Failed Auth x5      HIGH ───────┤
│ 12 min ago                                │
├─ INC-003 File Access Pattern HIGH ───────┤
│ 25 min ago                                │
└─ INC-004 Network Anomaly     MEDIUM ────┘
  1 hour ago
```

### Button States
```
Primary Button (Green):
┌──────────────┐
│  🔍 Search   │ ← #2EB67D green
└──────────────┘
Hover: Darker green (#198754)

Secondary Button (White):
┌─────────────────┐
│ Error Events    │ ← White with gray border
└─────────────────┘
Hover: Green border, green text

Active/Selected:
┌──────────────┐
│ AI Log Search│ ← Solid green (#2EB67D), white text
└──────────────┘
```

### Table Row Interaction
```
Normal:
─────────────────────────────────────────
Time    Source   User    Action   Status
─────────────────────────────────────────
14:32   192.168  john    login    low
14:31   192.168  mary    file     medium

Hover (Green highlight):
14:30───192.168──root────proc────low─────
        └ 3px green left border
```

### Card Hover Effect
```
Normal State:
┌─────────────────────┐
│ Metric Card         │ ← 1px light border
│ Value: 1,247        │ ← Subtle shadow
└─────────────────────┘

Hover State:
┌─────────────────────┐
│ Metric Card         │ ← 1px green border
│ Value: 1,247        │ ← Elevated shadow
└─────────────────────┘ ← Lifts slightly
```

---

## Typography Examples

### Page Title
```
32px, Weight 700, Dark Gray (#1A1A1A)
Welcome to Your SOC Platform
```

### Section Title
```
24px, Weight 700, Dark Gray (#1A1A1A)
Search & Investigate
```

### Label / Metadata
```
11px, Weight 700, UPPERCASE, Muted Gray (#6C757D), 0.5px letter-spacing
SEVERITY  |  STATUS  |  METRICS
```

### Log Data (Monospaced)
```
12px, Monaco/Menlo monospaced, Dark Gray (#495057)
2025-01-28 14:32:45 | 192.168.1.105 | jsmith | login_success | INFO
```

### Body Text
```
13px, Weight 400, Dark Gray (#495057), 1.6 line height
Unified threat investigation, detection, and response across your
entire infrastructure. Select a module to begin.
```

---

## Component Spacing Example

```
        24px (padding)
        ↓
┌───────────────────────────────┐
│ Section Title                 │ 14px height
├─────────────────────────────── ← 2px green border
│                               │
│  ┌──────────────┐  ┌────────┐│ 12px gap (between items)
│  │ Card 1       │  │ Card 2 ││
│  │              │  │        ││
│  └──────────────┘  └────────┘│
│                               │
└───────────────────────────────┘
        ↑
      32px (section gap)
```

---

## Responsive Breakpoints

### Desktop (>1200px)
```
┌────────┬────────────────────────┬────────┐
│ LEFT   │      MAIN              │ RIGHT  │
│ 280px  │      Flex              │ 320px  │
└────────┴────────────────────────┴────────┘
```

### Tablet (768px-1200px)
```
┌────────┬────────────────────────────────┐
│ LEFT   │           MAIN                 │
│ 280px  │           Flex                 │
├────────┴────────────────────────────────┤
│           RIGHT (below, collapsed)      │
│           Full width                    │
└─────────────────────────────────────────┘
```

### Mobile (<768px)
```
┌──────────────────────────────┐
│  TOP (collapsed header)       │
├──────────────────────────────┤
│     LEFT PANEL CONTENT       │
├──────────────────────────────┤
│     MAIN PANEL CONTENT       │
├──────────────────────────────┤
│     RIGHT PANEL CONTENT      │
└──────────────────────────────┘
```

---

## Design Principles in Action

### ✅ Data-Dense Yet Clean
- Monospaced fonts for logs make patterns easy to spot
- Minimal visual noise, every pixel has purpose
- White backgrounds maximize readability

### ✅ Professional & Trustworthy
- Green + white = enterprise security (Splunk heritage)
- Consistent spacing and alignment
- No unnecessary animations or gradients

### ✅ Analyst-First
- Tables optimized for long analysis sessions
- Color coding for quick severity assessment
- Search bar is first-class citizen
- Time picker always accessible

### ✅ High Contrast
- WCAG AA compliance for text (4.5:1)
- Severity colors distinct and meaningful
- Clear focus states for keyboard navigation

---

## Implementation Status

✅ Global theme variables defined
✅ Landing page redesigned
✅ Module page styled
✅ Component library updated
✅ Search explorer component
✅ Time range picker component
✅ Alert overview component
✅ All CSS transitions smooth (0.2s ease)
✅ Responsive layout tested
✅ Hot reload working

**Live Preview**: http://localhost:5173/
