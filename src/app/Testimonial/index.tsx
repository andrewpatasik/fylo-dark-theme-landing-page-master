import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const Testimonial = () => {
  return (
    <ul className="relative flex flex-col sm:flex-row mx-5 mb-20 space-y-8 md:w-11/12 md:mx-auto md:space-y-0 md:space-x-8">
      <Image
        src="/images/bg-quotes.png"
        alt="quotes"
        width={0}
        height={0}
        sizes="100"
        className="-z-10 absolute w-5 md:w-12 h-auto left-1 top-4 md:left-6 md:-top-8"
      />
      <li className="testimonial-card flex flex-col space-y-5 py-8 px-5 rounded">
        <div>
          <p className="text-sm leading-relaxed tracking-thight">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Image
            src="/images/profile-1.jpg"
            alt="profile-1"
            width={0}
            height={0}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h4 className={`${raleway.className} font-bold`}>Satish Patel</h4>
            <p className="text-xs tracking-wide">Founder & CEO, Huddle</p>
          </div>
        </div>
      </li>

      <li className="testimonial-card flex flex-col space-y-5 py-8 px-5 rounded">
        <div>
          <p className="text-sm leading-relaxed tracking-thight">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Image
            src="/images/profile-2.jpg"
            alt="profile-2"
            width={0}
            height={0}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h4 className={`${raleway.className} font-bold`}>Bruce McKenzie</h4>
            <p className="text-xs tracking-wide">Founder & CEO, Huddle</p>
          </div>
        </div>
      </li>

      <li className="testimonial-card flex flex-col space-y-5 py-8 px-5 rounded">
        <div>
          <p className="text-sm leading-relaxed tracking-thight">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Image
            src="/images/profile-3.jpg"
            alt="profile-3"
            width={0}
            height={0}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h4 className={`${raleway.className} font-bold`}>Iva Boyd</h4>
            <p className="text-xs tracking-wide">Founder & CEO, Huddle</p>
          </div>
        </div>
      </li>
    </ul>
  );
};
