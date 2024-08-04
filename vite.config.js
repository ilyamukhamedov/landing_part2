import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/book_2/",
  server: {
    port: 5173,
  },
});
