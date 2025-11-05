import Link from "next/link";
import Footer from "@/components/Footer";
import { CircleAlert } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full flex flex-col dark:bg-neutral-950 dark:text-neutral-100">
      <div className="h-screen overflow-y-hidden scrollbar-hide flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="text-center flex flex-col justify-center items-center h-full gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">
                <CircleAlert className="inline mr-2" />
                มีบางอย่างผิดปกติ
              </h1>
              <p>
                เกิดปัญหาในการเข้าสู่ระบบ
                <br />
                กรุณาตรวจสอบว่าคุณ
                <span className="underline">มีสิทธิ์ในการใช้งาน</span>
              </p>
            </div>
            <Link
              href="/auth/login"
              className="px-3 py-2 bg-neutral-950 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-300"
            >
              กลับไปเข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
