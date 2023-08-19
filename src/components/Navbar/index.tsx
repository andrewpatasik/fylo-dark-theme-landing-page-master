import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ['400', '700'], subsets: ["latin"]})

export const Navbar = () => {
  return (
    <nav className="intro w-full z-50 flex justify-between p-6 md:py-20 md:px-16">
      <div>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={0}
          height={0}
          className="w-20 md:w-36 h-auto"
        />
      </div>
      <ul className={`${raleway.className} flex items-center space-x-6 text-xs text-gray-400 md:space-x-10 md:text-sm `}>
        <li className="hover:text-white">
          <Link href="#">Features</Link>
        </li>
        <li className="hover:text-white">
          <Link href="#">Team</Link>
        </li>
        <li className="hover:text-white">
          <Link href="#">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};
