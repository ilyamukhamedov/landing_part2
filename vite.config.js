import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/book-2/",
  server: {
    port: 5173, // or any other port number you're using
  },
});
