"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/api";
import { getUserId } from "@/lib/auth";

export default function SubjectsPage() {
  const router = useRouter();

  useEffect(() => {
    const userId = getUserId();

    // Not logged in
    if (!userId) {
      router.replace("/auth");
      return;
    }

    // Check access via backend
    fetch(`${API_BASE_URL}/access/subjects?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.allowed) {
          router.replace("/payment");
        }
      })
      .catch(() => {
        router.replace("/auth");
      });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Subjects</h1>
      <p>You have access. Subjects will be listed here.</p>
    </div>
  );
}
