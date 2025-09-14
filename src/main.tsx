import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { registerSW } from "virtual:pwa-register";

import { Memory } from "./components/Memory";
import { loackBack, loadBg, loadDeck } from "./utilities/images";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Memory />
  </StrictMode>,
);

const preloadImages = () => {
  loackBack();
  loadBg(); 
  loadDeck();
};
preloadImages();

// register service worker
registerSW({
  onNeedRefresh() {
    console.log("New version available");
  },
  onOfflineReady() {
    console.log("App is ready to work offline!");
  },
});
