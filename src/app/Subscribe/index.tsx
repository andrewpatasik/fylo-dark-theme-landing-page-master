import { Button } from "@/components";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const Subscribe = () => {
  return (
    <section className="relative flex flex-col h-72 px-6">
      <div className="bg-subscribe flex flex-col items-center justify-center space-y-8 py-8 px-6 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h3 className={`${raleway.className} text-xl font-bold mb-4`}>Get early access today</h3>
          <p className="text-center tracking-[-0.75px]">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <input className="w-full h-12 rounded-full px-8 text-xs text-gray-500" type="text" placeholder="email@example.com" />
          <Button className="w-full font-bold">Get Started For Free</Button>
        </div>
      </div>
    </section>
  );
};
