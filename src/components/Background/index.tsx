import Image from "next/image";

export const Background = ({ imageString }: { imageString: string }) => {
  return (
    <Image
      src={imageString}
      alt="background"
      width={0}
      height={0}
      className="-z-10 w-full h-auto absolute left-0 bottom-0"
      draggable={false}
    />
  );
};
