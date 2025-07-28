import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthCallback from "./pages/AuthCallback";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/sso-callback"
        element={
          <AuthenticateWithRedirectCallback
            signInFallbackRedirectUrl={"/auth-callback"}
          />
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />
    </Routes>
  );
}
