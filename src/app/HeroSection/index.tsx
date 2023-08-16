import { Background, Button } from "@/components";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const HeroSection = () => {
  return (
    <section className="relative text-center px-6 mb-4">
      <Background imageString="/images/bg-curvy-mobile.svg" />
      <div className=" md:mx-auto md:w-1/2">
        <div className="z-10 pt-8">
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
          className={`${raleway.className} text-2xl font-bold my-6 leading-normal md:text-4xl md:leading-relaxed md:tracking-wide`}
        >
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="tracking-tight md:text-lg md:tracking-normal md:px-14">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button className="my-8 w-4/5 md:w-2/5">Get Started</Button>
      </div>
    </section>
  );
};
