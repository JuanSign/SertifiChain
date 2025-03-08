import { Actor, Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { sertifichain_backend } from '../../../../declarations/sertifichain_backend'

export const Route = createFileRoute("/home/autentikasi")({
  component: AuthPage,
});

function AuthPage() {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principal, setPrincipal] = useState("");

  /**
   * Get the correct Internet Identity URL based on the current environment
   */
  const identityProvider = () => {
    console.log(import.meta.env.DFX_NETWORK);
    console.log(import.meta.env.CANISTER_ID_INTERNET_IDENTITY);
    if (import.meta.env.VITE_DFX_NETWORK === "local") {
      return `http://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.localhost:4943`;
    } else if (import.meta.env.VITE_DFX_NETWORK === "ic") {
      return `https://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.ic0.app`;
    } else {
      return `https://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.dfinity.network`;
    }
  };

/**
 * Replace backend actor identity with the identity from AuthClient
 */
const onIdentityUpdate = async (client: AuthClient) => {
  if (!client) return;

  const identity = client.getIdentity();
  const agent = Actor.agentOf(sertifichain_backend);

  if (agent) {
    agent.replaceIdentity?.(identity);
  }

  setIsAuthenticated(await client.isAuthenticated());
  setPrincipal(identity.getPrincipal().toText());
};

  /**
   * Create AuthClient and load session if available
   */
  const createAuthClient = async () => {
    const client = await AuthClient.create();
    setAuthClient(client);
    await onIdentityUpdate(client);
  };

  /**
   * Login with AuthClient
   */
  const handleLogin = async () => {
    if (!authClient) return;

    await new Promise<void>((resolve, reject) =>
      authClient.login({
        identityProvider: identityProvider(),
        onSuccess: resolve,
        onError: reject,
      })
    );

    await onIdentityUpdate(authClient);
  };

  /**
   * Logout with AuthClient
   */
  const handleLogout = async () => {
    if (authClient) {
      await authClient.logout();
      setIsAuthenticated(false);
      setPrincipal("");
    }
  };

  useEffect(() => {
    createAuthClient();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1E] text-white font-poppins">
      <div className="relative w-[100%] max-w-[1000px] min-h-[750px] p-[2px] rounded-[50px] bg-gradient-to-bl from-white/10 via-transparent to-[#1E2432] 
                      border border-white/20 shadow-[0px_0px_50px_rgba(255,255,255,0.1)] backdrop-blur-xl overflow-hidden transition-transform duration-300">
        <div className="bg-gradient-to- from-[#1B3E88]/30 via-[#8D9EC3]/5 to-transparent p-10 rounded-lg text-center">
          {/* Logo */}
          <h1 className="mt-17 text-center text-[36px] font-semibold leading-tight">
            <span
              className="bg-gradient-to-r from-[#3355FF] to-[#69CFB5] bg-clip-text text-transparent"
              style={{ textShadow: "2px 2px 10px rgba(105, 207, 181, 0.8)" }}
            >
              Sertifichain
            </span>
          </h1>

          {/* Status */}
          {isAuthenticated ? (
            <p className="text-lg mt-5">Logged in as: {principal}</p>
          ) : (
            <p className="text-lg mt-5">Not logged in</p>
          )}

          {/* Buttons */}
          <div className="w-full flex justify-center">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="mt-9 w-full max-w-[400px] py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-400 
                          text-[16px] text-white font-medium shadow-md hover:scale-105 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="mt-9 w-full max-w-[400px] py-3 rounded-lg bg-gradient-to-r from-[#102552] to-[#1B3E88] 
                          text-[16px] text-white font-medium shadow-md hover:scale-105 transition"
              >
                Login with Internet Identity
              </button>
            )}
          </div>

          {/* Powered by */}
          <div className="text-center mt-13 text-[14px] flex flex-col items-center pb-4">
            <span className="text-[#FF8000] font-semibold">Powered by:</span>
            <img src="/icp.png" alt="ICP Logo" className="h-6 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
