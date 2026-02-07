import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Doctor Appointment App</h1>

      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">Register</Link>
    </div>
  );
}
