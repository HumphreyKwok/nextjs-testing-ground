import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Next.JS Testing Groud.</h1>
      <div className="flex flex-col items-center gap-2">
        <Link href="/next-auth" className="hover:underline">
          Next Auth V5
        </Link>
        <Link href="/prisma/inventory/dashboard" className="hover:underline">
          Prisma - Inventory
        </Link>
        <Link href="/prisma/todo" className="hover:underline">
          Prisma - Todo
        </Link>
      </div>
    </div>
  );
}
