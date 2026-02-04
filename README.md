# 🛡️ PIP Helper

**Making PIP applications less overwhelming.**

Understand activities → Select descriptors → Get your estimated points — all offline, all private.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![React](https://img.shields.io/badge/react-19-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.9-blue)
![PWA](https://img.shields.io/badge/PWA-offline%20ready-purple)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

🔗 **Live App:** [piphelperuk.vercel.app](https://piphelperuk.vercel.app)

---

## ✨ What It Does

| Feature | Description |
|---------|-------------|
| 📋 **Activity Walkthrough** | Step-by-step guide through all 11 PIP activities with plain English explanations |
| 🧠 **Mental Health Prompts** | Targeted prompts for each activity to help you recognise how your condition affects you |
| 📊 **Points Calculator** | Estimates your Daily Living and Mobility points with payment rates |
| 💾 **Auto-Save** | Progress saved locally — close the browser and come back anytime |
| 📧 **Email Summary** | Send yourself a copy of your answers via email |
| 🖨️ **Print Summary** | Print-friendly summary to take to appointments |
| 📱 **Install as App** | Works offline as a PWA on phone, tablet, or desktop |
| ♿ **Fully Accessible** | High contrast mode, text size controls, keyboard navigation, screen reader support |

---

## 🎬 Demo

> 🚧 **Screenshots coming soon** — app is live at [piphelperuk.vercel.app](https://piphelperuk.vercel.app)

<!--
TODO: Add screenshots
![Home Page](screenshots/home.png)
![Activity Page](screenshots/activity.png)
![Summary Page](screenshots/summary.png)
-->

---

## 🏗️ How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                      PIP Helper                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────┐     ┌───────────────┐                   │
│  │   Home Page   │────▶│  Activity     │──── x11 ────┐     │
│  │               │     │  Walkthrough  │             │     │
│  │  • What is PIP│     │               │             │     │
│  │  • Payment    │     │  • Descriptor │             │     │
│  │    rates      │     │    selection  │             │     │
│  │  • Start CTA  │     │  • MH prompts │             │     │
│  └───────────────┘     │  • Your notes │             │     │
│                        └───────────────┘             │     │
│                                                      ▼     │
│  ┌───────────────┐     ┌───────────────┐                   │
│  │   Resources   │◄────│   Summary     │                   │
│  │               │     │               │                   │
│  │  • Gov.uk     │     │  • Points     │                   │
│  │  • Charities  │     │    breakdown  │                   │
│  │  • Advice     │     │  • Payment    │                   │
│  │  • Crisis     │     │    estimates  │                   │
│  │    helplines  │     │  • Email/Print│                   │
│  └───────────────┘     └───────────────┘                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  localStorage                        │   │
│  │  • Form responses    • Accessibility prefs           │   │
│  │  • Progress state    • Timestamps                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  No backend. No database. Everything stays on your device.  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 PIP Activities Covered

### Daily Living (9 Activities)

| # | Activity | Points Range |
|---|----------|-------------|
| 1 | Preparing food | 0–8 |
| 2 | Taking nutrition | 0–8 |
| 3 | Managing therapy or monitoring health | 0–8 |
| 4 | Washing and bathing | 0–8 |
| 5 | Managing toilet needs | 0–8 |
| 6 | Dressing and undressing | 0–8 |
| 7 | Communicating verbally | 0–8 |
| 8 | Reading and understanding written information | 0–8 |
| 9 | Engaging with other people face to face | 0–8 |

### Mobility (2 Activities)

| # | Activity | Points Range |
|---|----------|-------------|
| 1 | Planning and following journeys | 0–8 |
| 2 | Moving around | 0–8 |

### Points Thresholds

| Component | Standard Rate | Enhanced Rate |
|-----------|--------------|---------------|
| Daily Living | 8+ points (£72.65/week) | 12+ points (£108.55/week) |
| Mobility | 8+ points (£28.70/week) | 12+ points (£75.75/week) |
| **Max combined** | | **£184.30/week** |

---

## 🧠 Mental Health Focus

Each activity includes 7–8 targeted mental health prompts to help you think about how your condition affects you day-to-day:

| Activity | Example Prompts |
|----------|----------------|
| Preparing food | "Do you lack motivation to cook?" "Do you forget you've started cooking?" |
| Washing & bathing | "Does depression make showering feel impossible?" "Do you need reminding?" |
| Engaging with people | "Do you avoid people due to anxiety or paranoia?" "Do voices distract you?" |
| Following journeys | "Does anxiety stop you leaving the house?" "Do you get confused or disoriented?" |
| Dressing | "Do you wear the same clothes for days because changing feels overwhelming?" |

> These prompts are based on common experiences — they help you describe the **reality** of living with your condition, not just the clinical diagnosis.

---

## 🚀 Quick Start

### Use the Live App (Recommended)

1. Visit **[piphelperuk.vercel.app](https://piphelperuk.vercel.app)**
2. Optional: Install as an app (browser menu → "Install PIP Helper")
3. Works offline after first visit

### Run Locally

```bash
# Clone the repo
git clone https://github.com/PhillipTodorov/PIPHelper.git
cd PIPHelper

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Optional: Email Feature

To enable the "Email summary" feature:

```bash
# Copy the example env file
cp .env.example .env

# Add your EmailJS credentials (free at emailjs.com)
# 1. Create account at https://www.emailjs.com/
# 2. Add an email service (Gmail, Outlook, etc.)
# 3. Create a template with variables: to_email, subject, message
# 4. Copy your keys into .env
```

Without EmailJS configured, the email button falls back to your device's default mail app.

---

## 🗂️ Project Structure

```
PIPHelper/
├── index.html                    # HTML entry point
├── package.json                  # Dependencies & scripts
├── vite.config.ts                # Vite + PWA configuration
├── tailwind.config.js            # Custom accessible theme
├── tsconfig.json                 # TypeScript config
├── .env.example                  # EmailJS credentials template
├── vercel.json                   # Deployment config
│
├── public/                       # Static assets
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── pwa-192x192.png
│   └── pwa-512x512.png
│
├── src/
│   ├── App.tsx                   # Routing & layout
│   ├── main.tsx                  # React entry point
│   ├── index.css                 # Global styles & a11y
│   ├── types.ts                  # TypeScript interfaces
│   ├── vite-env.d.ts             # Vite environment types
│   │
│   ├── pages/
│   │   ├── Home.tsx              # Welcome page & overview
│   │   ├── Activity.tsx          # Activity walkthrough (dynamic route)
│   │   ├── Summary.tsx           # Points breakdown & export
│   │   └── Resources.tsx         # Support links & crisis info
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Sticky header + accessibility controls
│   │   │   ├── Footer.tsx        # Disclaimer footer
│   │   │   └── ProgressBar.tsx   # Activity progress indicator
│   │   ├── ui/
│   │   │   ├── Button.tsx        # Reusable button (4 variants)
│   │   │   ├── Card.tsx          # Card container
│   │   │   ├── RadioGroup.tsx    # Descriptor selection (keyboard accessible)
│   │   │   └── TextArea.tsx      # Notes input with hints
│   │   └── questions/
│   │       └── MentalHealthPrompt.tsx  # Collapsible MH prompts
│   │
│   ├── context/
│   │   ├── FormContext.tsx        # Form state + localStorage persistence
│   │   └── AccessibilityContext.tsx  # Text size & contrast settings
│   │
│   ├── data/
│   │   ├── index.ts              # Constants & data exports
│   │   ├── dailyLivingActivities.ts  # 9 activities with descriptors & prompts
│   │   └── mobilityActivities.ts     # 2 activities with descriptors & prompts
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.ts    # localStorage with tab sync
│   │   └── usePWAInstall.ts      # PWA install prompt handler
│   │
│   └── utils/
│       └── pointsCalculator.ts   # Points, rates & payment calculation
│
└── dist/                         # Production build output
    ├── sw.js                     # Service worker (auto-generated)
    ├── manifest.webmanifest      # PWA manifest
    └── assets/                   # Bundled JS/CSS
```

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19, TypeScript 5.9 |
| **Build** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Routing** | React Router 6 |
| **PWA** | Vite PWA Plugin + Workbox |
| **Email** | EmailJS (optional) |
| **Deployment** | Vercel |

---

## 🔐 Privacy & Data

**Everything stays on your device:**
- ✅ No backend server — runs entirely in your browser
- ✅ No database — all data stored in localStorage
- ✅ No tracking or analytics
- ✅ No cookies
- ✅ Works offline after first visit
- ✅ Email feature sends directly to you (no data stored)

**Your answers never leave your device** unless you choose to email them to yourself.

**What's gitignored:**
- `.env` (EmailJS keys)
- `node_modules/`
- `dist/` (build output)
- `.claude/` (dev tooling)

---

## ♿ Accessibility

Built with WCAG 2.1 AA compliance in mind:

| Feature | Implementation |
|---------|---------------|
| **Keyboard navigation** | Full tab/enter/space support throughout |
| **Screen readers** | ARIA labels, roles, and live regions |
| **Text size** | Adjustable 0.8x–1.5x via header controls |
| **High contrast** | Toggle in header for enhanced contrast |
| **Focus indicators** | Visible focus rings on all interactive elements |
| **Skip link** | "Skip to content" for keyboard users |
| **Calm design** | Blue/slate palette, no red, no flashing |
| **Print styles** | Clean print layout for summary page |
| **Reduced motion** | Respects `prefers-reduced-motion` |

---

## 🗺️ Roadmap

**Completed:**
- [x] All 11 PIP activities with descriptors and points
- [x] Mental health-specific prompts for every activity
- [x] Points calculator with payment estimates
- [x] Auto-save progress to localStorage
- [x] PWA with offline support
- [x] Email summary via EmailJS
- [x] Print-friendly summary
- [x] Accessibility controls (text size, high contrast)
- [x] Curated resources page with crisis helplines
- [x] Deployed to Vercel

**Planned:**
- [ ] Evidence gathering checklists
- [ ] Daily activity diary
- [ ] Assessment day preparation guide
- [ ] Mandatory reconsideration / appeals guide
- [ ] PDF export of completed form
- [ ] Multi-language support

---

## ❓ FAQ

**Q: Is this an official DWP tool?**
A: No. PIP Helper is an independent tool to help you **prepare** your application. You still submit your claim through the DWP.

**Q: Are the points estimates accurate?**
A: They're based on the official PIP descriptor points, but the actual assessment is done by a healthcare professional. Use these estimates as a guide, not a guarantee.

**Q: Do I need to install anything?**
A: No. Visit the website and it works immediately. You can optionally install it as an app for offline use.

**Q: Is my data safe?**
A: Yes. Everything is stored locally in your browser. No data is sent to any server. You can clear all data at any time from the summary page.

**Q: Can I use this on my phone?**
A: Yes. It's fully responsive and works on any device. You can install it as an app from your browser menu.

**Q: Why is this focused on mental health?**
A: Many people with mental health conditions score lower on PIP than they should because the form doesn't prompt you to think about how your condition affects daily activities. The mental health prompts help you describe the full picture.

**Q: Does it work offline?**
A: Yes. After your first visit, the app is cached and works without an internet connection.

**Q: How do I clear my data?**
A: Click "Start over" on the summary page, or clear site data in your browser settings.

---

## 🤝 Contributing

This project was built to help people navigate the PIP application process. If you'd like to contribute:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## ⚠️ Disclaimer

PIP Helper is **not** affiliated with the Department for Work and Pensions (DWP). It is a free, independent tool designed to help you understand and prepare for the PIP application process. The points estimates are based on official descriptors but are **not** a substitute for professional advice. Always seek guidance from [Citizens Advice](https://www.citizensadvice.org.uk/) or a welfare rights advisor if you need help with your claim.

---

## 📄 License

MIT — use it, share it, help someone with it.

---

<p align="center">
  <i>Built because nobody should face PIP alone.</i>
</p>
