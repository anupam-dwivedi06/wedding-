# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# password mongodb connection sring 

5JxPXKEEZMEnWAlo

---

## Backend server

A simple Express server now collects form submissions into a MongoDB database instead of using SheetBest. To get it running:

1. `cd server`
2. Copy `.env.example` to `.env` and fill in a valid `MONGO_URI` pointing at your MongoDB instance.
3. `npm install` (one time) and then `npm run dev` (requires `nodemon`) or `npm start`.

By default the backend listens on port 5000. The following endpoints are available:

- `POST /api/inquiries` – used by the contact form to store a new inquiry
- `GET /api/inquiries` – returns all saved inquiries (used by the admin dashboard)

The Vite development server is configured to proxy `/api` requests to the backend via `vite.config.js`.

## Admin dashboard

The React app includes a basic administration page. Navigate to http://localhost:3000/admin (or your deployed host) to view a table of all inquiries.

