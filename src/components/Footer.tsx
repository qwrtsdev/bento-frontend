import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <>
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
    </>
  );
}
