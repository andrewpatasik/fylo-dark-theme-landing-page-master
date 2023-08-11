import { Background, Button } from "@/components";
import Image from "next/image";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const Details = () => {
  return (
    <section className="relative text-left px-6 mb-18">
      <div className="z-10 pt-3">
        <Image
          src="/images/illustration-stay-productive.png"
          alt="illustration-stay-productive"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto w-full h-auto"
        />
      </div>
      <h3 className={`${raleway.className} text-xl font-bold mt-12 mb-4`}>
        Stay productive, wherever you are
      </h3>
      <div className="tracking-tighter flex flex-col space-y-4">
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your life storage needs.
        </p>
        <p>
          Secure share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required.
        </p>
      </div>
      <Link href="#" className="flex items-center space-x-2 tracking-thighter border-b-2 w-fit pb-1 text-[#65E2D9] border-[#65E2D9]">
        <p>See how Fylo works</p>
        <Image
          src="/images/icon-arrow.svg"
          alt="illustration-stay-productive"
          width={0}
          height={0}
          sizes="100vw"
          className="w-5 h-5"
        />
      </Link>
    </section>
  );
};
