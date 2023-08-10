import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-6">
      <div>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={0}
          height={0}
          className="w-24 h-auto"
        />
      </div>
      <ul className="flex items-center space-x-6 text-xs sm:text-base text-gray-600">
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