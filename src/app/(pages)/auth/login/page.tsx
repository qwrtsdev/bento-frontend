import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
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

      <div className="flex justify-center border-t border-neutral-800">
        <div className="w-full max-w-4xl">
          <div className="text-center flex flex-row justify-between 4xl:px-0 px-6 py-6 vertical-align items-center select-none">
            <div className="items-baseline text-left">
              <p className="text-xs">
                made with &#10084;&#65039; by{" "}
                <a
                  href="https://github.com/qwrtsdev"
                  target="_blank"
                  className="hover:underline hover:cursor-pointer font-bold"
                >
                  qwrtsdev
                </a>
              </p>

              <p className="text-xs">
                powered by{" "}
                <a
                  href="http://pavichcloud.thddns.net"
                  target="_blank"
                  className="hover:underline hover:cursor-pointer font-bold"
                >
                  PavichCloud
                </a>
              </p>
            </div>
            <div className="self-baseline">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
