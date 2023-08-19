import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative -z-50 bg-footer h-auto pt-44 pb-20 px-6 md:px-24">
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

      <section className="flex flex-col md:flex-row md:space-x-24">
        <article className="md:basis-3/5 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
          <div className="md:basis-3/5 flex">
            <div className="basis-12">
              <Image
                src="/images/icon-location.svg"
                alt="icon location"
                width={0}
                height={0}
                className="w-4 h-auto"
              />
            </div>
            <p className="basis-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex">
              <div className="basis-12">
                <Image
                  src="/images/icon-phone.svg"
                  alt="icon phone"
                  width={0}
                  height={0}
                  className="w-5 h-auto"
                />
              </div>
              <p className="basis-full">+1-543-123-4567</p>
            </div>
            <div className="flex md:items-center">
              <div className="basis-12">
                <Image
                  src="/images/icon-email.svg"
                  alt="icon phone"
                  width={0}
                  height={0}
                  className="w-6 h-auto"
                />
              </div>
              <p className="basis-full">example@fylo.com</p>
            </div>
          </div>
        </article>

        <article className="flex basis-1/5 flex-col md:flex-row space-y-12 md:space-y-0">
          <ul className="flex basis-1/2 flex-col space-y-4">
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

          <ul className="flex basis-1/2 flex-col space-y-4">
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

        <article className="basis-1/6 h-24">
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
