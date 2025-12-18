"use client";

import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  async function simulatePayment() {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;

    await fetch("http://127.0.0.1:8000/payments/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: Number(userId),
        amount: 50,
      }),
    });

    router.push("/subjects");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Payment</h1>
      <p>₹50 one-time payment to unlock subjects.</p>

      <button onClick={simulatePayment}>
        Pay ₹50 (Simulate)
      </button>
    </div>
  );
}
