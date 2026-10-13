# SoilSense AI (frontend)
React + Vite + TypeScript + Tailwind v3. Demo mode by default: sample data, demo sign-in, no real AI/auth/DB.
```
npm install
cp .env.example .env
npm run dev        # development
npm run build && npm run preview   # production build; test PWA/install here
```
- `VITE_DEMO_MODE=false` + `VITE_API_BASE_URL` switches `src/services/api.ts` to FastAPI calls (cookie-based sessions, `credentials: include`).
- Interpretation thresholds are demo values in `src/utils/thresholds.ts`.
- PWA: `vite.config.ts` (static assets only; API responses and user data are never cached). Add PNG icons (192/512) for broader installability.
- Translations: `src/locales/en.json`, `hi.json`.
