import Link from "next/link";

export default function Error() {
  return (
    <div>
      <p>something went wrong</p>
      <Link href="/" className="bg-blue-700 p-2">
        Go back home
      </Link>
    </div>
  );
}
