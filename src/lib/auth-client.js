// lib/auth-client.js

import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL, // ⚠️ must be NEXT_PUBLIC_ for client-side
  plugins: [jwtClient()],
});

// Destructure from the SAME client instance
export const { signIn, signUp, signOut, useSession } = authClient;