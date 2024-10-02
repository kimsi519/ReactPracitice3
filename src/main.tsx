import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ShoppingCart from "./pages/ShoppingCart.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingCart />
  </StrictMode>
);
