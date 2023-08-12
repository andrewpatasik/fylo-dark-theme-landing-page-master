import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative -z-50 bg-footer h-96 text-center px-6 pt-60">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={0}
        height={0}
        className="w-32 h-auto"
        priority
      />

    </footer>
  );
};
