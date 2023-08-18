import { Button } from "@/components";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const Subscribe = () => {
  return (
    <section className="relative flex flex-col h-44">
      <div className="bg-subscribe absolute w-11/12 md:w-4/6 flex flex-col items-center justify-center inset-x-0 mx-auto space-y-8 py-8 px-6 md:py-12 md:px-16 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h3 className={`${raleway.className} text-xl md:text-3xl md:tracking-wide font-bold mb-4`}>Get early access today</h3>
          <p className="text-center tracking-[-0.75px]">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <input className="w-full md:basis-3/4 h-12 md:h-14 rounded-full px-8 text-xs text-gray-500" type="text" placeholder="email@example.com" />
          <Button className="w-full md:basis-1/3 h-12 md:h-14 font-bold">Get Started For Free</Button>
        </div>
      </div>
    </section>
  );
};
