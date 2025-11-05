import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import cssnano from "cssnano";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/", // Serve at root
    plugins: [react(), tailwindcss()],
    css: {
      postcss: {
        plugins:
          mode === "production"
            ? [
                cssnano({
                  preset: [
                    "default",
                    { discardComments: { removeAll: true } }, // Remove all comments
                  ],
                }),
              ]
            : [],
      },
    },
    server: {
      open: true, // Opens browser automatically
      host: false, // Set to true to access from network devices
      proxy: {
        "/api": {
          target: "http://localhost:5000", // Backend API URL
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
