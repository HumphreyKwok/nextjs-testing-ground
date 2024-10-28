import Link from "next/link";

export default function Todo() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Prisma - TODO</h1>
      <div className="flex">
        <p>No items yet</p>
      </div>
    </div>
  );
}
