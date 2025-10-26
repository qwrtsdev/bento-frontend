import Link from "next/link";

export default function FriendItem({
  userId,
  name,
  online,
}: {
  userId: string;
  name: string;
  online: boolean;
}) {
  return (
    <Link
      href={`/chat/${userId}`}
      className="w-full p-4 hover:bg-neutral-700/30 dark:[&>p]:text-white [&>p]:select-none"
    >
      <p className="text-md">{name}</p>
      <p className="text-sm">{online ? "ออนไลน์" : "ออฟไลน์"}</p>
    </Link>
  );
}
