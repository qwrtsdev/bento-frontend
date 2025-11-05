import Image from "next/image";
import Footer from "@/components/Footer";
import { login } from "@/utils/supabase/actions";

export default async function Login() {
  return (
    <div className=" dark:bg-neutral-950 dark:text-neutral-100">
      <div className="flex flex-col gap-8 items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center gap-8 sm:px-0 px-2">
          <Image src="/images/logo.png" alt="Logo" width={38} height={38} />
          <div className="text-center space-y-4">
            <p className="text-3xl sm:text-4xl font-thin">
              เข้าสู่ระบบเพื่อเริ่มต้น
            </p>
            <p className="text-5xl sm:text-6xl font-bold ">
              เชื่อมต่อกันให้มากขึ้น
            </p>
          </div>
        </div>

        <form action={login}>
          <button className="bg-blue-700 px-4 py-2 rounded-md text-white group hover:bg-blue-800 transition-colors">
            <Image
              src="/images/google.png"
              alt="Google Logo"
              width={22}
              height={22}
              className="inline mr-2 group"
            />
            เข้าสู่ระบบด้วย Google
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
