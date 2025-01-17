import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BarLoader } from "react-spinners";

function ProtectedRoutes({ children }) {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();
  
  if (!isLoaded) {
    return <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />; 
  }

  
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  
  if (user && !user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" />;
  }

  return children;
}

export default ProtectedRoutes;
