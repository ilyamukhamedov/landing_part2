import { defineConfig, loadEnv } from "vite";
// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   // base: "/book_2/",
//   server: {
//     port: 5173,
//   },
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env.VITE_PATH);
  return {
    plugins: [react()],
    base: env.VITE_PATH || "/",
    server: {
      port: 5173,
    },
  };
});
