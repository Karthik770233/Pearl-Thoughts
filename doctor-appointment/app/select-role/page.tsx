"use client";

import { useRouter } from "next/navigation";

export default function SelectRole() {
  const router = useRouter();

  const setRole = async (role:string) => {
    await fetch("/api/set-role", {
      method: "POST",
      body: JSON.stringify({ role }),
    });

    router.push("/");
  };

  return (
    <div>
      <h2>Select Role</h2>

      <button onClick={()=>setRole("PATIENT")}>
        Patient
      </button>

      <button onClick={()=>setRole("DOCTOR")}>
        Doctor
      </button>
    </div>
  );
}
