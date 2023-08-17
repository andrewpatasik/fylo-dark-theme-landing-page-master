import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const Features = () => {
  return (
    <ul className="md:w-3/4 md:mx-auto grid grid-cols-2 text-center px-6">
      <li className="flex flex-col items-center justify-center py-14">
        <div className="basis-24">
          <Image
            src="/images/icon-access-anywhere.svg"
            alt="icon illustration for feature one access anywhere"
            width={0}
            height={0}
            className="w-1/5 md:w-20"
          />
        </div>
        <div>
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3 md:mt-0`}>
            Access your file, anywhere
          </h3>
          <p className="tracking-tighter md:tracking-thight md:px-20">
            The ability to use smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </li>

      <li className="flex flex-col justify-center items-center py-14">
        <div className="basis-24">
          <Image
            src="/images/icon-security.svg"
            alt="icon illustration for feature two security"
            width={0}
            height={0}
            className="w-1/5 md:w-20"
          />
        </div>
        <div className="basis-full">
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3 md:mt-0`}>
            Security you can trust
          </h3>
          <p className="tracking-tighter md:tracking-thight md:px-20">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </li>

      <li className="flex flex-col justify-center items-center py-14">
        <div className="basis-24">
          <Image
            src="/images/icon-collaboration.svg"
            alt="icon illustration for feature three collaboration"
            width={0}
            height={0}
            className="w-1/5 md:w-20"
          />
        </div>
        <div>
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3 md:mt-0`}>
            Real-time collaboration
          </h3>
          <p className="tracking-tighter md:tracking-thight md:px-20">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
      </li>

      <li className="flex flex-col justify-center items-center py-14">
        <div className="basis-24">
          <Image
            src="/images/icon-any-file.svg"
            alt="icon illustration for feature four multi-format file storage"
            width={0}
            height={0}
            className="w-1/5 md:w-20"
          />
        </div>
        <div>
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3 md:mt-0`}>
            Store any type of file
          </h3>
          <p className="tracking-tighter md:tracking-thight md:px-20">
            Whether you&lsquo;re sharing holidays photos or work documents, Fylo
            has you covered allowing for all files types to be securely stored
            and shared.
          </p>
        </div>
      </li>
    </ul>
  );
};
