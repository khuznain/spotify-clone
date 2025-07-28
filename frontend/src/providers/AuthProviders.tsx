import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";
import { Loader } from "lucide-react";

const updateTokenApi = async (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateToken = async () => {
      try {
        const token = await getToken();
        updateTokenApi(token);
      } catch (error) {
        updateTokenApi(null);
        console.log("Error updating token", error);
      } finally {
        setLoading(false);
      }
    };
    updateToken();
  }, [getToken]);

  if (loading) {
    return (
      <div className="h-screen w-full  flex justify-center items-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return children;
};

export default AuthProviders;
