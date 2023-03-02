"use client";

import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function AuthContext({ children }) {
  return (
  <SessionProvider>
<Auth>
  {children}
</Auth>
</SessionProvider>
)
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading..</div>
  }

  return children
}