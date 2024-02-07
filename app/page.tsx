import {headers} from "next/headers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{headers().get("test-header") || "could not find header 'test-header'"}</h1>
    </main>
  );
}
