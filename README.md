<<<<<<< HEAD
# Gaulapar Digital Village Portal
=======
# 🌱 सूर्यपुरा ग्राम विकास पोर्टल (Suryapura Rural Development Portal)
>>>>>>> 2118925d72d71c6741d8152921e4b310a616bfa3

A bilingual, responsive React website for discovering the wider Gaulapar region near Haldwani, Nainital, Uttarakhand. It includes regional localities, places to explore, education, farming information, a photo gallery, and contact details.

## Development

```bash
npm install
npm run dev
```

## Build and lint

```bash
npm run build
npm run lint
```

## Regional content notes

<<<<<<< HEAD
- Place search links use OpenStreetMap or Google Maps. Some locality names are community-provided and may not resolve to a unique map pin; they are identified as such.
- Chorgaliya and Lakhanpur are shown as nearby southern places in Lalkuan, not as Gaulapar administrative boundaries.
- Crop cards describe broad seasonal context, not a crop census for each village. Confirm current cultivation locally or with the Uttarakhand Agriculture Department.
- OpenStreetMap data © OpenStreetMap contributors, ODbL 1.0.
- Regional photographs link to their Wikimedia Commons file pages for attribution and license details.
=======
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
=======
# suryapura-rural-development-portal
A modern and responsive rural development portal built with React, Vite, Tailwind CSS, Recharts, and React Icons. Showcasing education, agriculture, panchayat services, digital identity, and village development initiatives through a government-tech inspired user interface.
>>>>>>> 2118925d72d71c6741d8152921e4b310a616bfa3
