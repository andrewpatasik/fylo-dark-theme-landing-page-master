import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const Details = () => {
  return (
    <section className="relative flex flex-col md:flex-row text-left px-6 md:px-16 my-20 md:space-x-16">
      <div className="z-10 pt-3 md:basis-1/2">
        <Image
          src="/images/illustration-stay-productive.png"
          alt="illustration-stay-productive"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="flex md:flex-col md:space-y-4 md:px-16">
        <h3
          className={`${raleway.className} text-xl md:text-4xl font-bold mt-12 mb-4`}
        >
          Stay productive,<span className="md:block md:mt-2">wherever you are</span>
        </h3>
        <div className="tracking-tighter md:tracking-normal flex flex-col space-y-4">
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your life storage needs.
          </p>
          <p>
            Secure share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <Link
          href="#"
          className="flex items-center space-x-2 tracking-thighter border-b-2 w-fit pb-1 text-[#65E2D9] border-[#65E2D9]"
        >
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
      </div>
    </section>
  );
};
