# 🚀 Quick Start - Search & Investigation

## ⚡ 30-Second Setup

You're done! The Search & Investigation module is ready to use.

1. Open your Facto-SIEM dashboard: http://localhost:5173/
2. Click on **"Search and Investigation"** module
3. You see the SPL query interface!

---

## 🎯 Your First Query (2 minutes)

### Option A: Use AI Suggestion (Easiest)

```
1. Click ✨ AI button
   ↓
2. See 5 suggested queries
   ↓
3. Click "Use This Query" on any
   ↓
4. Click ⚡ Execute
   ↓
5. See results in the table!
```

### Option B: Use Quick Filter (Fast)

```
1. Click [🔴 Critical] button
   ↓
2. Click ⚡ Execute
   ↓
3. See critical events only!
```

### Option C: Write Custom Query (15 seconds)

```
1. Type in SPL Query field:
   status=critical
   
2. Click ⚡ Execute

3. See results!
```

---

## 📚 SPL Cheat Sheet

### Basic Syntax

```
search_filter | command | command
```

### Common Commands

| Command | Usage | Example |
|---------|-------|---------|
| **fields** | Select columns | `fields time, user, action` |
| **where** | Filter results | `where status=critical` |
| **stats** | Aggregate | `stats count by user` |
| **top** | Top N values | `top 10 source` |
| **dedup** | Remove duplicates | `dedup user` |

### Quick Filters

- `status=critical` → Critical only
- `status=high OR status=critical` → High/Critical
- `time >= -24h` → Last 24 hours
- `user=admin` → Specific user
- `source=192.168.*` → IP range

---

## 💡 5-Minute Examples

### 1. Find Critical Events
```spl
status=critical
```
Click [🔴 Critical] or type above → Execute

### 2. Find Failed Logins
```spl
action=failed_login
```

### 3. Find Specific User Activity
```spl
user=jsmith
```

### 4. Find Recent Activity
```spl
time >= -24h
```

### 5. Count Events by User
```spl
status=critical | stats count by user
```

---

## 🎨 Visual Guide

### Green ✓ (Query is Valid)
```
[SPL Query input shows ✓ Valid]
→ Safe to execute
```

### Red ❌ (Query has Error)
```
[SPL Query input shows ❌ Invalid]
→ Fix syntax before executing
```

### Execution Info
```
Executed in 0.52s (5 results)
→ Shows speed & number of results
```

---

## 🔍 Real Queries to Try

Copy and paste these:

### Query 1: Critical Events
```spl
source=* status=critical
```

### Query 2: Failed Logins
```spl
action=failed_login
```

### Query 3: High Priority
```spl
status=high OR status=critical
```

### Query 4: Count by User
```spl
status=critical | stats count by user
```

### Query 5: Last 24 Hours
```spl
time >= -24h
```

---

## ❓ FAQ

**Q: What's that ✨ AI button?**
A: Gives you 5 example queries to learn from!

**Q: Is my query syntax wrong?**
A: Look for red ❌ below the input. Fix and try again.

**Q: How do I add filters?**
A: Click [Critical] [Errors] [Last 24h] buttons to add filters automatically!

**Q: Can I combine filters?**
A: Yes! Click multiple buttons to add multiple filters.

**Q: How do I learn more?**
A: Read [SPL_GUIDE.md](./SPL_GUIDE.md) for complete guide!

---

## 📱 Mobile Tips

- Works on phone/tablet
- Swipe to scroll results
- Tap command names for descriptions
- Vertical layout on small screens
- All features accessible

---

## 🎓 Learning Path

```
Day 1 (Now):
  - Try the AI suggestions
  - Click quick filters
  - See results

Day 2-3:
  - Read SPL_GUIDE.md
  - Study the 5 examples
  - Write simple queries

Week 1:
  - Build complex queries
  - Use stats & analysis
  - Document patterns
```

---

## 🚨 Common Tasks

### Find All Failed Logins
```spl
action=failed_login
```

### Find Specific User
```spl
user=jsmith
```

### Find Critical Events
```spl
status=critical
```

### Find Recent Events
```spl
time >= -24h
```

### Find Specific IP
```spl
source=192.168.1.105
```

### Combine Multiple
```spl
user=admin AND status=critical
```

---

## 📖 Documentation Files

| File | Time | Purpose |
|------|------|---------|
| [SEARCH_FEATURES.md](./SEARCH_FEATURES.md) | 10 min | Feature overview |
| [SPL_GUIDE.md](./SPL_GUIDE.md) | 20 min | Complete reference |
| [SEARCH_DEMO.md](./SEARCH_DEMO.md) | 15 min | Visual examples |

---

## ✨ Key Features

✅ **SPL Query Interface** - Like Splunk!
✅ **AI Suggestions** - Learn by example
✅ **Commands Reference** - 10 built-in commands
✅ **Quick Filters** - One-click additions
✅ **Real-time Validation** - Know if syntax is correct
✅ **Results Display** - Professional event table
✅ **Mobile Friendly** - Works everywhere

---

## 🎯 Pro Tips

1. **Start with AI suggestions** - See examples first
2. **Use quick filters** - Faster than typing
3. **Read command descriptions** - Hover over commands
4. **Type slowly** - Watch the validation feedback
5. **Test simple first** - Build complexity gradually

---

## 🚀 Go Live

**You're ready to search and investigate!**

1. Open Facto-SIEM dashboard
2. Click "Search and Investigation" module
3. Try first query
4. You're done! 🎉

---

## 📞 Need Help?

- **Quick question?** → Read this page
- **Want to learn SPL?** → Read SPL_GUIDE.md
- **See examples?** → Check SEARCH_DEMO.md
- **Feature overview?** → See SEARCH_FEATURES.md
- **Something broken?** → Check console for errors

---

## 🎉 Summary

**You have:**
- ✨ Professional search interface
- 🤖 AI query suggestions
- 📚 Built-in command reference
- ⚡ Real-time validation
- 🎯 Quick filters
- 📊 Beautiful results display

**You can:**
- Search like Splunk
- Learn from examples
- Validate queries
- Filter quickly
- Investigate professionally

**You're ready to:**
- Hunt threats
- Investigate incidents
- Analyze events
- Protect your systems

**Happy Investigating! 🔍**

---

*Status: ✅ Ready to Use*
*Last Updated: January 28, 2026*
