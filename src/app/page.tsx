import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Next.JS Testing Groud.</h1>
      <div className="flex">
        <Link href="/next-auth" className="hover:underline">
          Next Auth V5
        </Link>
      </div>
    </div>
  );
}
