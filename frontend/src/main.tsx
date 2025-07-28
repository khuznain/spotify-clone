import { ClerkProvider } from "@clerk/clerk-react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AuthProviders from "./providers/AuthProviders.tsx";
import "./index.css";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <AuthProviders>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProviders>
    </ClerkProvider>
  </StrictMode>
);
