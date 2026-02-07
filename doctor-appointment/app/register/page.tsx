"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
   // ✅ NEW

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();   // ✅ NEW

  const handleRegister = async (e:any) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   // ✅ GOOD PRACTICE
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ Go to role selection
      router.push("/select-role");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Create Account</button>
<br /><br />

<button onClick={() => signIn("google")}>
  Sign up with Google
</button>

      </form>
    </div>
  );
}
