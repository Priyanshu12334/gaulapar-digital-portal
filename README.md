# 🌱 सूर्यपुरा ग्राम विकास पोर्टल (Suryapura Rural Development Portal)

A premium, production-quality, mobile-first React application showcasing village transformation through digital empowerment, education, agriculture, road infrastructure, digital identity, and panchayat services.

Designed for farmers, students, panchayat members, citizens, and government officials, this portal showcases how modern Indian villages are adopting digital technology under the "Smart Village Campaign" (डिजिटल ग्राम पहल).

---

## 🚀 Live Demo & Visual Showcase

* **Theme**: Modern Indian Government-Tech Style (Forest Green, National Saffron, Slate Blue, Cream/White Backgrounds)
* **Design Philosophy**: High visual excellence, premium glassmorphic cards, smooth micro-interactions, responsive charts, and typography.
* **Interactive Tool**: Real-time **Digital ID Card Generator** (नागरिक डिजिटल पहचान पत्र) on successful citizen registration.

---

## 🛠️ Tech Stack

* **Frontend**: React.js (Vite)
* **Styling**: Tailwind CSS v3 (Custom color palettes, font configurations, and transitions)
* **Charts**: Recharts (Interactive Area & Bar graphs representing development metrics and user engagement)
* **Icons**: React Icons (Fi- Feather Icons, Fa- Font Awesome)
* **Build Tool**: Vite (Rolldown / ESBuild)

---

## 📂 Project Structure

```text
suryapura-vikas-portal/
├── public/
│   ├── favicon.svg          # Favicon icon
│   ├── village_landscape.png# Background generated artwork for Hero
│   └── rural_leader.png     # Portrait artwork of rural ambassador
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky glassmorphic responsive navbar with drawer
│   │   ├── Hero.jsx         # Indian village backdrop, Hindi titles, quick stats
│   │   ├── ImpactStats.jsx  # Count-up animated statistics cards
│   │   ├── Services.jsx     # Development programs cards (Agriculture, Education, etc.)
│   │   ├── Analytics.jsx    # Development analytics charts using Recharts
│   │   ├── SuccessStories.jsx# Success testimonials with ratings and initial avatars
│   │   ├── Timeline.jsx     # Vertical alternating progress timeline (2022-2025)
│   │   ├── CampaignShowcase.jsx# Interactive mock social media campaign posts
│   │   ├── CTA.jsx          # Dynamic call-to-action with registration trigger
│   │   ├── RegistrationModal.jsx# Register form with automatic digital ID generator
│   │   └── Footer.jsx       # Detailed bilingual gov footer with contact details
│   ├── App.jsx              # Main coordinator coordinating sections and state
│   ├── index.css            # Stylesheet containing custom Tailwind layers and animations
│   └── main.jsx             # React DOM entry point
├── tailwind.config.js       # Custom tailwind theme extensions & Gov-Tech palette
├── postcss.config.js        # PostCSS build pipeline integrations
├── vite.config.js           # Vite configuration
├── package.json             # Core dependency manifest
└── README.md                # Documentation and setup instructions
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (recommended version `v18.x` or higher).

### 2. Installation
Clone the repository, go into the directory, and run `npm install` to download dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Vite dev server at `http://localhost:5173`:
```bash
npm run dev
```

### 4. Build for Production
Compile the project into minified assets under the `dist/` directory:
```bash
npm run build
```

---

## ⚡ Vercel Deployment Instructions

Follow these instructions to deploy this application to **Vercel** for hosting:

### Method A: Deploy using the Vercel Dashboard (Recommended)
1. Commit and push the project to a **GitHub**, **GitLab**, or **Bitbucket** repository.
2. Sign in to your [Vercel Account](https://vercel.com).
3. Click on the **"New Project"** button in your dashboard.
4. Import the git repository containing `suryapura-vikas-portal`.
5. Vercel will auto-detect **Vite** as the framework preset.
6. Under **Build & Development Settings**, verify the settings:
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build` or `vite build`
   * **Output Directory**: `dist`
   * **Install Command**: `npm install`
7. Click **"Deploy"**. Your portal will be live on a secure HTTPS domain (e.g. `suryapura-vikas-portal.vercel.app`) in under a minute!

### Method B: Deploy using Vercel CLI
If you prefer deploying directly from your terminal:
1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Navigate to your project folder:
   ```bash
   cd suryapura-vikas-portal
   ```
3. Run the login command and follow instructions:
   ```bash
   vercel login
   ```
4. Run the deploy command:
   ```bash
   vercel
   ```
   * Confirm the project name and directory as default.
   * Vercel will generate a preview deployment.
5. Deploy to production (live URL):
   ```bash
   vercel --prod
   ```

---

## 🌟 Premium Features Implemented
* **Mobile-First Layouts**: Fully responsive grid systems optimizing spacing and sizing on mobile, tablet, and desktop screens.
* **Responsive Charts**: Recharts container dynamically sizes grids to prevent layout breaking on narrow viewports.
* **Hindi & English Bilingual**: Core titles and descriptions are provided in both Hindi and English, reflecting standard Indian governmental digital portals.
* **Animated Counter**: Numbers animate counting from `0` to target values when you scroll into view or load the page.
* **Interactive ID Card**: Fill in the registration form to obtain a downloadable, custom digital card containing verified tags and a mockup QR code.
* **Social Campaigns**: The requested social posts ("1000+ किसानों को डिजिटल पहचान" and "नया स्कूल, नया भविष्य") are represented as interactive card layouts with mock like, comment, share, and download features.
