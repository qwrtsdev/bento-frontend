import Image from "next/image";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="w-full flex flex-col dark:bg-neutral-950 dark:text-neutral-100">
      <div className="h-screen overflow-y-hidden scrollbar-hide flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="uppercase">
            <h1>connect people</h1>
            <p>in the way you want</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
