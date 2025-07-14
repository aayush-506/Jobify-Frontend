import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://jobify-backend-hhd5.onrender.com", // backend URL
        changeOrigin: true,
        // Keep /api prefix in the request path
        rewrite: (path) => path, 
      },
    },
  },
});
