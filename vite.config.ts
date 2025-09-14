import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      base: "/card-symphony/",
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,jpg,svg,mp3,woff,woff2,ttf,eot}'
        ],
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
      },
      manifest: {
        name: "Card Symphony",
        short_name: "CardSymphony",
        description:
          "A relaxing memory card game with early 2000s anime aesthetic",
        theme_color: "#f1ab36",
        background_color: "#c9ada7",
        display: "standalone",
        orientation: "portrait",
        start_url: "/card-symphony/",
        scope: "/card-symphony/",
        display_override: ["window-controls-overlay", "standalone"],
        categories: ["games", "entertainment"],
      },
    }),
  ],
  base: "/card-symphony/",
});
