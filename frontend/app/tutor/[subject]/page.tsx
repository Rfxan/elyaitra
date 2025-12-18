"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

/**
 * Elyaitra v1 supported subjects ONLY
 * Anything else must be blocked
 */
const ALLOWED_SUBJECTS = [
  "maths",
  "programming",
  "physics",
  "electrical",
];

export default function TutorPage() {
  const params = useParams();
  const router = useRouter();

  const rawSubject = params.subject;

  const subject =
    typeof rawSubject === "string"
      ? rawSubject
      : Array.isArray(rawSubject)
      ? rawSubject[0]
      : "";

  // 🔒 Block invalid subjects
  useEffect(() => {
    if (!subject || !ALLOWED_SUBJECTS.includes(subject)) {
      router.replace("/subjects");
    }
  }, [subject, router]);

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        {subject ? subject.toUpperCase() : "SUBJECT"} Tutor
      </h1>

      <p style={{ marginTop: 10, color: "#666" }}>
        Ask exam-focused questions from the syllabus.
      </p>

      <div
        style={{
          marginTop: 30,
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 20,
          minHeight: 300,
        }}
      >
        <p>Chat messages will appear here.</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="Ask a question..."
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}
