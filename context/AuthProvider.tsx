//app/context/AuthProvider.tsx


"use client";

import { useEffect } from "react";
import { getMe } from "@/lib/clientApi";
import { useUserStore } from "@/store/userStore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const setUser = useUserStore((state) => state.setUser);
    
useEffect(() => {
  const init = async () => {
    try {
      const data = await getMe();
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    }
  };

  init();
}, [setUser]);

  return children;
}