import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative -z-50 bg-footer h-auto pt-44 px-6">
      <div className="my-16">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={0}
          height={0}
          className="w-40 h-auto mx-4"
          priority
        />
      </div>

      <section className="flex flex-col space-y-24">
        <article className="flex flex-col space-y-4">
          <div className="flex space-x-7">
            <div className="w-auto pt-1">
              <Image
                src="/images/icon-location.svg"
                alt="icon location"
                width={0}
                height={0}
                className="w-4 h-5"
              />
            </div>
            <p className="basis-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex space-x-7">
            <div className="w-auto">
              <Image
                src="/images/icon-phone.svg"
                alt="icon phone"
                width={0}
                height={0}
                className="w-5 h-4"
              />
            </div>
            <p className="basis-full">+1-543-123-4567</p>
          </div>
          <div className="flex space-x-7 items-baseline">
            <div className="w-auto">
              <Image
                src="/images/icon-email.svg"
                alt="icon phone"
                width={0}
                height={0}
                className="w-7 h-5"
              />
            </div>
            <p className="basis-full">example@fylo.com</p>
          </div>
        </article>

        <article className="flex flex-col space-y-12">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Jobs</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>

          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Terms</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
          </ul>
        </article>

        <article className="h-24">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="#">
                <div className="w-auto p-2 rounded-full border border-white">
                  <Image
                    src="/images/facebook-f.svg"
                    alt="icon fb"
                    width={0}
                    height={0}
                    className="w-4 h-4"
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="w-auto p-2 rounded-full border border-white">
                  <Image
                    src="/images/x-twitter.svg"
                    alt="icon x-twitter"
                    width={0}
                    height={0}
                    className="w-4 h-4"
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="w-auto p-2 rounded-full border border-white">
                  <Image
                    src="/images/instagram.svg"
                    alt="icon instagram"
                    width={0}
                    height={0}
                    className="w-4 h-4"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
};
