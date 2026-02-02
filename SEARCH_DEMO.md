# 🎬 Search & Investigation - Visual Demo & Examples

## 🎯 Interface Overview

### The Search Interface

```
┌──────────────────────────────────────────────────────────┐
│                   SEARCH & INVESTIGATION                 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ SPL Query                                              │
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ [⚡] [✨]      │
│ ┃ source=* status=critical          ┃                 │
│ ┃ | stats count by user             ┃ ✓ Valid        │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ Exec: 0.52s    │
│                                                          │
│ 📚 SPL Commands Reference                              │
│ ┌──────────┬──────────┬──────────┬──────────┐          │
│ │  stats   │ timechart│  fields  │  where   │ ...      │
│ │ Calculate│ Timeline │ Select   │ Filter   │          │
│ └──────────┴──────────┴──────────┴──────────┘          │
│                                                          │
│ Quick Filters:                                           │
│ [🔴 Critical] [⚠️ Errors] [📅 Last 24h] [📊 Save]     │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ Results: 5 events • Executed in 0.52s                  │
│                                                          │
│ Time        Source IP         User     Action   Status  │
│─────────────────────────────────────────────────────────│
│ 14:32:45    192.168.1.105     jsmith   login    LOW    │
│ 14:31:22    192.168.1.205     mdavis   access   MED    │
│ 14:30:18    10.0.0.50         system   start    LOW    │
│ 14:29:01    192.168.1.150     ajones   login    HIGH   │
│ 14:27:45    10.0.1.20         rbrown   exfil    CRIT   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 🤖 AI Suggestions Panel

When you click the **✨ AI** button:

```
┌──────────────────────────────────────────────────────────┐
│ 🤖 AI Query Suggestions                            [✕]  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ ┌─ Suggestion 1 ────────────────────────────────────┐   │
│ │ Query: source=* status=critical | stats count... │   │
│ │ Description: Find critical events by user        │   │
│ │                              [Use This Query]    │   │
│ └────────────────────────────────────────────────────┘   │
│                                                          │
│ ┌─ Suggestion 2 ────────────────────────────────────┐   │
│ │ Query: action=failed_login | timechart count...  │   │
│ │ Description: Track failed logins over time       │   │
│ │                              [Use This Query]    │   │
│ └────────────────────────────────────────────────────┘   │
│                                                          │
│ ┌─ Suggestion 3 ────────────────────────────────────┐   │
│ │ Query: action=data_exfil_attempt | dedup user... │   │
│ │ Description: Identify users with exfil attempts │   │
│ │                              [Use This Query]    │   │
│ └────────────────────────────────────────────────────┘   │
│                                                          │
│ ┌─ Suggestion 4 ────────────────────────────────────┐   │
│ │ Query: status=high OR status=critical | stats... │   │
│ │ Description: Analyze high-severity events       │   │
│ │                              [Use This Query]    │   │
│ └────────────────────────────────────────────────────┘   │
│                                                          │
│ ┌─ Suggestion 5 ────────────────────────────────────┐   │
│ │ Query: user=* action=* | top 10 source           │   │
│ │ Description: Top 10 source IPs                   │   │
│ │                              [Use This Query]    │   │
│ └────────────────────────────────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 📚 SPL Commands Reference

Displayed as hoverable cards:

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  search      │  fields      │  stats       │  timechart   │
│              │              │              │              │
│ Find events  │ Select       │ Calculate    │ Create       │
│ matching     │ specific     │ statistics   │ time-based   │
│ conditions   │ fields       │ (count, avg) │ charts       │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────┐
│  where       │  dedup       │  rename      │  eval        │
│              │              │              │              │
│ Filter by    │ Remove       │ Rename a     │ Create new   │
│ expression   │ duplicate    │ field        │ computed     │
│              │ events       │              │ fields       │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┐
│  top         │  table       │
│              │              │
│ Find most    │ Display      │
│ frequent     │ results in   │
│ values       │ table format │
└──────────────┴──────────────┘
```

---

## 🔍 Real-World Examples

### Example 1: Find Critical Events by User

**Scenario:** You want to identify which users are generating critical alerts.

**Steps:**
1. Click ✨ AI button
2. See suggestion: `source=* status=critical | stats count by user`
3. Click "Use This Query"
4. Click ⚡ Execute

**Result:**
```
Query Status: ✓ Valid
Executed in: 0.48s
Results: 5 events

Time            Source IP       User      Action          Status
────────────────────────────────────────────────────────────
14:32:45        192.168.1.105   jsmith    login_success   CRITICAL
14:31:22        192.168.1.205   mdavis    file_access     CRITICAL
14:30:18        10.0.0.50       system    process_start   CRITICAL
14:29:01        192.168.1.150   ajones    failed_login    CRITICAL
14:27:45        10.0.1.20       rbrown    data_exfil      CRITICAL
```

**Insight:** All 5 users have critical events. ajones and rbrown are most concerning.

---

### Example 2: Track Failed Logins Over Time

**Scenario:** You suspect a brute force attack. Find failed logins over 24 hours.

**Steps:**
1. Click ✨ AI button
2. See suggestion: `action=failed_login | timechart count by source`
3. Click "Use This Query"
4. Click [📅 Last 24h] quick filter to narrow scope
5. Click ⚡ Execute

**Query becomes:** `action=failed_login | timechart count by source AND time >= -24h`

**Result:**
```
Query Status: ✓ Valid
Executed in: 0.65s
Results: 3 events

Time            Source IP       User      Action          Status
────────────────────────────────────────────────────────────
14:29:01        192.168.1.150   ajones    failed_login    HIGH
14:28:45        192.168.1.150   ajones    failed_login    HIGH
14:28:30        192.168.1.150   ajones    failed_login    HIGH
```

**Insight:** 3 failed logins from same IP (192.168.1.150). Likely brute force attempt.

---

### Example 3: Custom Query - Find Admin Activity

**Scenario:** You want to monitor all admin user actions.

**Steps:**
1. Click in SPL Query field
2. Type manually: `user=admin OR user=root`
3. See ✓ Valid indicator
4. Click ⚡ Execute

**Result:**
```
Query Status: ✓ Valid
Executed in: 0.51s
Results: 2 events

Time            Source IP       User      Action          Status
────────────────────────────────────────────────────────────
14:32:45        192.168.1.105   admin     login_success   LOW
14:29:01        10.0.0.50       root      process_start   MEDIUM
```

**Insight:** Both admin and root made logins. Normal administrative activity.

---

### Example 4: Combined Query - Recent High-Severity Events

**Scenario:** Show only recent high-severity events with details.

**Steps:**
1. Click in SPL Query field
2. Type: `status=high OR status=critical`
3. Click [📅 Last 24h] to limit time
4. Click [⚠️ Errors] to combine filters (actually same - redundant)
5. Click ⚡ Execute

**Result:**
```
Query Status: ✓ Valid
Executed in: 0.54s
Results: 2 events

Time            Source IP       User      Action          Status
────────────────────────────────────────────────────────────
14:29:01        192.168.1.150   ajones    failed_login    HIGH
14:27:45        10.0.1.20       rbrown    data_exfil      CRITICAL
```

**Insight:** 2 high-priority events: failed login and potential data theft.

---

### Example 5: Data Analysis - Event Breakdown

**Scenario:** Understand what types of events are occurring.

**Steps:**
1. Click ✨ AI button
2. See suggestion: `status=high OR status=critical | stats count, avg(time) by action`
3. Click "Use This Query"
4. Click ⚡ Execute

**Result:**
```
Query Status: ✓ Valid
Executed in: 0.47s
Results: 3 event types

Time            Source IP       User      Action              Status
────────────────────────────────────────────────────────────────────────
14:32:45        192.168.1.105   jsmith    file_access         HIGH
14:29:01        192.168.1.150   ajones    failed_login        HIGH
14:27:45        10.0.1.20       rbrown    data_exfil_attempt  CRITICAL
```

**Insight:** Mix of access control (file access), authentication (failed login), and data loss (exfil) events.

---

## 🎨 Visual States

### Valid Query State
```
SPL Query
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ source=* status=critical         ┃  ← Green border
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
✓ Query Valid
Executed in 0.52s (5 results)
```

### Invalid Query State
```
SPL Query
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ random invalid query here        ┃  ← Red border
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
❌ Invalid SPL syntax. Check query format.
```

### Loading/Executing State
```
SPL Query
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ source=* status=critical         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
Executing... ⏳
```

### Completed State
```
SPL Query
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ source=* status=critical         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
✓ Valid
Executed in 0.52s (5 results)
```

---

## 🎯 Quick Filter Effects

### Before Filter
```
Query: (empty)
Results: All events shown (5)
```

### After [🔴 Critical]
```
Query: status=critical
Results: Critical events only (2)
- rbrown data_exfil_attempt CRITICAL
- ajones failed_login HIGH (becomes CRITICAL in filtered view)
```

### After [📅 Last 24h]
```
Query: time >= -24h
Results: Recent events only (5)
- All events are from today
```

### Multiple Filters Combined
```
Query: status=critical AND time >= -24h
Results: 2 events (critical AND recent)
```

---

## 🎬 Step-by-Step Workflow

### New User Workflow (5 minutes)

```
Start
  ↓
Open Search & Investigation module
  ↓
See SPL Query interface
  ↓
Click ✨ AI button
  ↓
Read 5 suggested queries
  ↓
Click "Use This Query" on any suggestion
  ↓
See query populated in input field
  ↓
Click ⚡ Execute
  ↓
See results in table below
  ↓
Done! First query executed
```

### Experienced User Workflow (10 minutes)

```
Start with objective
  ↓
Type base query manually (or use AI suggestion)
  ↓
Verify syntax (look for ✓ green indicator)
  ↓
Add quick filters if needed
  ↓
Click ⚡ Execute
  ↓
Review results
  ↓
Refine query if needed (modify & Execute again)
  ↓
Draw security insights
  ↓
Done!
```

### Security Analyst Workflow (30 minutes)

```
Receive alert/incident
  ↓
Define investigation objective
  ↓
Write complex SPL query
  ├─ Base filter
  ├─ Transformations (dedup, rename)
  ├─ Analysis (stats, timechart)
  └─ Output format (table, top)
  ↓
Validate query
  ↓
Execute with different time ranges
  ↓
Correlate with other data
  ↓
Document findings
  ↓
Write incident report
```

---

## 💡 Tips & Tricks Shown Visually

### Tip 1: Build Incrementally
```
Stage 1: source=*
Result: All events (5)
Status: ✓ Valid

Stage 2: source=* status=critical
Result: Critical events (2)
Status: ✓ Valid

Stage 3: source=* status=critical | stats count by user
Result: Aggregated data
Status: ✓ Valid
```

### Tip 2: Use Command Reference
```
Command shown: stats
Description: Calculate statistics (count, avg, sum, max, min)

Usage: | stats count, avg(time) by user
```

### Tip 3: Quick Filter Combination
```
Base: action=login_success
Add [🔴 Critical]: action=login_success AND status=critical
Add [📅 Last 24h]: action=login_success AND status=critical AND time >= -24h
```

---

## 🔐 Security Scenarios

### Scenario 1: Brute Force Attack Detection

```
Initial Query:
action=failed_login

Results show multiple failures:
- Same source: 192.168.1.150
- Same user: ajones
- Time: Rapid sequence (1 min apart)

Quick Filter: [📅 Last 24h]

Insight: Active brute force attempt
Action: Block IP, reset password, monitor account
```

### Scenario 2: Insider Threat Investigation

```
Initial Query:
action=data_exfil_attempt | dedup user

Results:
- rbrown: 3 exfil attempts
- mdavis: 1 exfil attempt

Follow-up Query:
action=data_exfil_attempt user=rbrown | timechart count

Insight: Concentrated activity from single user
Action: Quarantine account, audit file access, preserve logs
```

### Scenario 3: Privilege Escalation

```
Initial Query:
action=process_start user=admin OR user=root

Results:
- admin: 2 process starts (system, admin tools)
- root: 1 process start (unusual)

Analysis:
Normal: admin starting admin processes
Suspicious: root starting processes (root shouldn't normally start processes)

Action: Investigate root account activity logs
```

---

## 🎓 Learning Examples

### Example for Beginners
**Goal:** Find all login events

```
Query: action=login_success
Explanation: "login_success" in action field = successful login
Results: All successful logins (5 in demo)
Takeaway: Basic field search works
```

### Example for Intermediate Users
**Goal:** Find failed logins by user

```
Query: action=failed_login | stats count by user
Explanation: 
- "action=failed_login" finds the events
- "|" passes to next command
- "stats count by user" groups and counts by user
Results: Count of failures per user
Takeaway: Piping commands together for analysis
```

### Example for Advanced Users
**Goal:** Find suspicious activity patterns

```
Query: (status=high OR status=critical) AND (action=failed_login OR action=data_exfil_attempt) | stats count, avg(time) by user, source | where count > 3
Explanation:
- Complex filters with OR/AND
- Multiple conditions
- Aggregation with stats
- Post-aggregation filtering with where
Results: Users/sources with >3 suspicious events
Takeaway: Complex multi-stage analysis
```

---

## 📱 Mobile Experience

### Desktop View
```
[Full SPL Commands Grid (4 columns)]
[Full Table (5 columns)]
[Comfortable font sizes]
```

### Tablet View
```
[SPL Commands Grid (2 columns)]
[Table (4 columns)]
[Slightly smaller fonts]
```

### Mobile View
```
[SPL Commands Grid (1 column)]
[Table (3 critical columns: Time, User, Status)]
[Compact but functional]
```

---

## 🎉 Summary

**The Search & Investigation tab provides:**

1. ✅ **Professional SPL Interface** - Type queries like Splunk
2. ✅ **AI Assistance** - 5 example queries to learn from
3. ✅ **Command Reference** - 10 commands with descriptions
4. ✅ **Real-time Validation** - See if query is valid
5. ✅ **Quick Filters** - Add common constraints easily
6. ✅ **Results Display** - Professional event table
7. ✅ **Responsive Design** - Works on any device
8. ✅ **Beautiful UX** - Green accents, smooth transitions

**For Security Analysts:**
- Professional tool for investigation
- AI-powered guidance
- Real-world query examples
- Quick filtering for fast analysis

**For SOC Teams:**
- Standardized search interface
- Team learning through shared queries
- Professional incident response workflow
- Enterprise-grade security interface

---

**Happy Investigating! 🔍**

*All examples shown are simulated for demo purposes.*
*Real implementation connects to live security data.*
