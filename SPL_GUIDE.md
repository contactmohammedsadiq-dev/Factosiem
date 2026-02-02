# 🔍 Facto-SIEM Search & Investigation - SPL Guide

## Overview

The Search & Investigation tab now includes a powerful **SPL (Splunk Processing Language)** query interface with **AI-powered suggestions** to help security analysts investigate events and threats efficiently.

---

## 🎯 Key Features

### 1. **SPL Query Bar**
- **Monospaced input** for comfortable query writing
- **Syntax validation** - Real-time feedback on query validity
- **Query hints** - SPL command reference built-in
- **Multi-line support** - Write complex queries easily

### 2. **AI-Powered Query Suggestions**
- **5 pre-built query templates** - Click to use instantly
- **Query descriptions** - Understand what each query does
- **"Use This Query" buttons** - Apply suggestions with one click
- **Learn from examples** - Study real SPL patterns

### 3. **Quick Filters**
- **Critical Only** - Filter for critical severity events
- **Errors & Alerts** - Show high/critical severity events
- **Last 24h** - Limit to recent events
- **Save Search** - Store for later use (future feature)

### 4. **SPL Commands Reference**
- **10 essential commands** listed with descriptions
- **Hover for details** - Visual guidance while writing
- **Copy-friendly format** - Easy to incorporate into queries

---

## 📚 SPL Command Reference

### Search Commands

| Command | Purpose | Example |
|---------|---------|---------|
| **search** | Find events matching conditions | `search source=192.168.* status=critical` |
| **fields** | Select specific fields to display | `fields time, user, action, status` |
| **where** | Filter by expression | `where status=high OR status=critical` |
| **dedup** | Remove duplicate events | `dedup user \| fields time, action` |
| **rename** | Rename a field | `rename source as sourceIP` |

### Analysis Commands

| Command | Purpose | Example |
|---------|---------|---------|
| **stats** | Calculate statistics | `stats count, avg(time), max(severity) by user` |
| **timechart** | Create time-based analysis | `timechart count by status` |
| **top** | Find most frequent values | `top 10 source, top 5 user` |
| **table** | Display as formatted table | `table time, user, action, status` |
| **eval** | Create computed fields | `eval risk_level=if(status=critical, "HIGH", "MEDIUM")` |

---

## 🚀 How to Use SPL Queries

### Basic Query Structure

```spl
<source_filter> | <transformation> | <analysis> | <output>
```

**Components:**
1. **Source Filter** - Find events matching conditions
2. **Pipe (|)** - Pass results to next command
3. **Transformations** - Modify, clean, or enrich data
4. **Analysis** - Aggregate and calculate
5. **Output** - Display results

### Example Queries

#### 1. **Find Critical Events by User**
```spl
source=* status=critical | stats count by user
```
- Shows how many critical events each user has
- Useful for user behavior analysis

#### 2. **Track Failed Logins Over Time**
```spl
action=failed_login | timechart count by source
```
- Displays failed login attempts over time
- Helps identify attack patterns

#### 3. **Identify Data Exfiltration Attempts**
```spl
action=data_exfil_attempt | dedup user | fields user, time, source
```
- Lists unique users attempting data exfiltration
- Removes duplicates to focus on unique offenders

#### 4. **High-Severity Event Summary**
```spl
status=high OR status=critical | stats count, avg(time) by action
```
- Analyzes high-severity events by action type
- Shows frequency and timing patterns

#### 5. **Top 10 Source IPs**
```spl
user=* action=* | top 10 source
```
- Identifies most active/problematic source IPs
- Useful for threat intelligence

---

## 🤖 AI Query Suggestions

Click the **✨ AI** button to reveal 5 AI-powered query suggestions:

### Available Suggestions

1. **Find critical events by user**
   - Query: `source=* status=critical | stats count by user`
   - Use case: Identify which users are generating critical alerts

2. **Track failed logins over time**
   - Query: `action=failed_login | timechart count by source`
   - Use case: Monitor brute force attacks

3. **Identify unique users with exfil attempts**
   - Query: `action=data_exfil_attempt | dedup user | fields user, time, source`
   - Use case: Find insider threats

4. **Analyze high-severity events**
   - Query: `status=high OR status=critical | stats count, avg(time) by action`
   - Use case: Understand major threat patterns

5. **Top 10 source IPs**
   - Query: `user=* action=* | top 10 source`
   - Use case: Identify suspicious IP addresses

---

## ⚡ Quick Filters Explained

### Critical Only
```spl
status=critical
```
- Shows **ONLY critical severity events**
- Narrows focus to highest-priority threats
- **Best for:** Emergency response

### Errors & Alerts
```spl
status=high OR status=critical
```
- Shows **high AND critical severity events**
- Filters out low/medium alerts
- **Best for:** Daily threat hunting

### Last 24h
```spl
time >= -24h
```
- Limits to **events in the last 24 hours**
- Combines with other filters
- **Best for:** Recent incident investigation

### How Filters Work

Filters **add to your query**:
```
[your query] AND [filter]
```

Example:
- Your query: `action=failed_login`
- Click "Last 24h"
- Result: `action=failed_login AND time >= -24h`

---

## ✅ Query Validation

### Valid Queries Show Green:
- ✓ `source=192.168.1.*`
- ✓ `status=critical | stats count by user`
- ✓ `action=* | top 10 source`

### Invalid Queries Show Red Error:
- ✗ `random text here`
- ✗ `gibberish | foo bar`
- ✗ Invalid field names

**Pro Tip:** Copy from SPL Commands Reference to ensure syntax!

---

## 📊 Understanding Results

### Execution Time
- Shows how long the query took to execute
- **< 1 second** = Fast and responsive
- **1-2 seconds** = Normal for large datasets
- **> 2 seconds** = Consider filtering more

### Result Count
- Number of events matching your query
- **Higher = Broader search**
- **Lower = More targeted search**

### Event Table
Shows: `Time | Source IP | User | Action | Status`

Hover over any row to:
- Highlight the event
- Green left border indicates focus
- Use for quick scanning

---

## 💡 Pro Tips & Tricks

### Tip 1: Build Queries Incrementally
```spl
# Start simple
status=critical

# Add a filter
status=critical AND user=*

# Add analysis
status=critical AND user=* | stats count by user
```

### Tip 2: Use SPL Commands Reference
- Hover over command items to see options
- Green command name = ready to copy
- Read description before using

### Tip 3: Combine Filters
```spl
# Multiple conditions with AND
source=192.168.* AND user=admin AND action=login_success

# OR for alternatives
status=high OR status=critical

# Mix AND + OR (use parentheses to group)
(user=admin OR user=root) AND status=critical
```

### Tip 4: Learn from AI Suggestions
- Study the provided queries
- Understand the pattern: `search | transform | analyze`
- Modify for your needs

### Tip 5: Use Shortcuts
- **Ctrl+Enter** - Execute query (future feature)
- **Clear button** - Reset query field
- **Copy command** - Use references as templates

---

## 🎓 Learning Path

### Beginner (Day 1)
1. Read this guide
2. Try the AI suggestions (click ✨ AI)
3. Click "Use This Query" on a suggestion
4. Observe the results
5. **Understand:** Basic query → Results table

### Intermediate (Week 1)
1. Modify AI suggestions slightly
2. Add quick filters
3. Change field names
4. Combine multiple conditions with AND/OR
5. **Understand:** Query building blocks

### Advanced (Month 1)
1. Write queries from scratch
2. Use stats for aggregation
3. Use timechart for trends
4. Create complex filters
5. **Understand:** Data analysis patterns

---

## 🔧 Customization Guide

### Adding Custom Queries

Edit `SearchExplorer.jsx` to add your own AI suggestions:

```jsx
const aiSuggestions = [
  { 
    query: 'YOUR_SPL_QUERY_HERE', 
    description: 'What this query finds' 
  },
  // Add more...
];
```

### Adding Custom Commands

Add to the `splCommands` object:

```jsx
const splCommands = {
  search: 'Find events matching conditions',
  // Add your command:
  yourcommand: 'What your command does',
};
```

### Changing Filter Behavior

Modify the `applyQuickFilter()` function:

```jsx
case 'custom':
  query = (query ? query + ' AND ' : '') + 'your_filter_here';
  break;
```

---

## 🚀 Best Practices

### Writing Effective Queries

✅ **DO:**
- Start simple, build complexity
- Use meaningful field names
- Test with small filters first
- Document complex queries
- Use | (pipe) between commands

❌ **DON'T:**
- Forget the pipe | between commands
- Use invalid field names
- Search for too many results at once
- Forget to filter by severity
- Use complex nested expressions without testing

### Investigation Workflow

1. **Define your objective**
   - "Find all failed logins by admin users"
   
2. **Start with a base filter**
   - `action=failed_login AND user=admin`
   
3. **Add analysis**
   - `| stats count, avg(time) by source`
   
4. **Review results**
   - Look for patterns
   
5. **Refine further**
   - Add more filters if needed

---

## 🔐 Security Analyst Tips

### Threat Hunting Queries

**Finding Suspicious Login Activity:**
```spl
action=failed_login OR action=login_success | stats count by user | where count > 10
```

**Identifying Data Access Anomalies:**
```spl
action=file_access | timechart count by user, source | where count > avg
```

**Detecting Privilege Escalation:**
```spl
action=process_start AND user=admin | dedup source | fields source, time, user
```

### Incident Response Queries

**During Incident:**
```spl
source=192.168.1.* status=critical | fields time, user, action | top 20 user
```

**Post-Incident Analysis:**
```spl
user=attacker_username | stats count by action, source | table action, source, count
```

---

## 📖 SPL Resources

### Within Fatto-SIEM
- **SPL Commands Reference** - In the search bar (always visible)
- **AI Suggestions** - Click ✨ AI for examples
- **This Guide** - SPL_GUIDE.md in project root

### Official Splunk Resources
- **Splunk Search Reference** - Full documentation
- **SPL Cheat Sheet** - Quick command reference
- **Splunk Training** - Official courses

---

## ❓ FAQ

### Q: What's the difference between `search` and `where`?
**A:** 
- `search` - Finds matching events at the beginning
- `where` - Filters results within a command chain

### Q: Can I save my custom queries?
**A:** Yes! Click "📊 Save Search" button (feature coming soon)

### Q: Why is my query invalid?
**A:** Most common issues:
- Missing pipe | between commands
- Invalid field name (use Reference)
- Syntax error (check example format)

### Q: How do I search multiple fields?
**A:** Use AND/OR operators:
```spl
(user=admin OR user=root) AND (status=high OR status=critical)
```

### Q: Can I combine multiple queries?
**A:** Yes, use pipes:
```spl
query1 | filter1 | analyze1 | output1
```

---

## 🎯 Summary

The Search & Investigation tab provides:

| Feature | Purpose | How to Use |
|---------|---------|-----------|
| **SPL Query Bar** | Write queries | Type directly, use Reference |
| **AI Suggestions** | Learn & build queries | Click ✨ AI, then Use |
| **SPL Commands Ref** | Find command syntax | Hover over commands |
| **Quick Filters** | Add common filters | Click buttons |
| **Results Table** | View matched events | Scroll & interact |

---

## 🎓 Next Steps

1. **Try an AI Suggestion** - Click ✨ AI, use a query
2. **Modify It** - Add a quick filter
3. **Execute** - Click ⚡ Execute
4. **Analyze** - Review the results
5. **Build Your Own** - Create custom queries
6. **Share** - Document and save useful queries

---

**Happy Investigating! 🔍**

*Last Updated: January 28, 2026*
*Status: Complete and Production Ready*
