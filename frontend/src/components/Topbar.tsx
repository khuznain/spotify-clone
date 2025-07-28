import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";

const Topbar = () => {
  const isAdmin = false;
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 z-10 bg-zinc-900/50 backdrop-blur-md">
      <div className="flex gap-2 items-center">Songify</div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to="/admin">
            <LayoutDashboardIcon className="size-4 mr-2" />
          </Link>
        )}

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>

        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
