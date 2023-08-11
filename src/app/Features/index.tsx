import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

export const Features = () => {
  return (
    <ul className="grid sm:grid-cols-2 text-center px-6 mb-20">
      <li className="flex flex-col justify-center items-center py-14">
        <Image
          src="/images/icon-access-anywhere.svg"
          alt="icon illustration for feature one access anywhere"
          width={0}
          height={0}
          className="w-1/5 h-auto"
        />
        <div>
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3`}>
            Access your file, anywhere
          </h3>
          <p className="tracking-tighter">
            The ability to use smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </li>

      <li className="flex flex-col justify-center items-center py-14">
        <Image
          src="/images/icon-security.svg"
          alt="icon illustration for feature two security"
          width={0}
          height={0}
          className="w-1/5 h-auto"
        />
        <div>
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3`}>
            Security you can trust
          </h3>
          <p className="tracking-tighter">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </li>

      <li className="flex flex-col justify-center items-center py-14">
        <Image
          src="/images/icon-collaboration.svg"
          alt="icon illustration for feature three collaboration"
          width={0}
          height={0}
          className="w-1/5 h-auto"
        />
        <div>
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3`}>
            Real-time collaboration
          </h3>
          <p className="tracking-tighter">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
      </li>

      <li className="flex flex-col justify-center items-center py-14">
        <Image
          src="/images/icon-any-file.svg"
          alt="icon illustration for feature four multi-format file storage"
          width={0}
          height={0}
          className="w-1/5 h-auto"
        />
        <div>
          <h3 className={`${raleway.className} text-xl font-bold mt-8 mb-3`}>
            Store any type of file
          </h3>
          <p className="tracking-tighter">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all files types to be securely stored and
            shared.
          </p>
        </div>
      </li>
    </ul>
  );
};
