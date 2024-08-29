import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import Dashboard from "./components/Dashboard";

export default function Page() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
