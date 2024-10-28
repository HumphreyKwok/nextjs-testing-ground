import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Prisma - Inventory</h1>
      <div className="flex">
        <p>No items yet</p>
      </div>
    </div>
  );
}
