import Footer from "@/components/Footer";
import { CircleAlert } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex flex-col dark:bg-neutral-950 dark:text-neutral-100">
      <div className="h-screen overflow-y-hidden scrollbar-hide flex justify-center">
        <div className="max-w-4xl w-full h-full flex justify-center items-center flex-col gap-6">
          <CircleAlert className="inline" />
          <p className="text-center">
            ไม่มีหน้า landing page ในขณะนี้
            <br />
            เนื่องจากยังทำไม่เสร็จเลยจ้า แหะๆ
          </p>
          <Link
            href="/app/chat"
            className="px-3 py-2 bg-neutral-950 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-300"
          >
            เข้าสู่แอพลิเคชั่น
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
