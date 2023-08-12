import { Background, Button } from "@/components";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const HeroSection = () => {
  return (
    <section className="relative text-center px-6 mb-20">
      <Background imageString="/images/bg-curvy-mobile.svg" />
      <div className="z-10 pt-3 pt-10">
        <Image
          src="/images/illustration-intro.png"
          alt="illustration-intro"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <h1
        className={`${raleway.className} text-2xl font-bold my-8 leading-normal`}
      >
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="tracking-tight">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button className="my-10">Get Started</Button>
    </section>
  );
};
