import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChangeProvider } from "./components/Changecam.tsx";

createRoot(document.getElementById("root")!).render(
  <ChangeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ChangeProvider>
);
