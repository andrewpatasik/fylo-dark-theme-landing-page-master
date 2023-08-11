import Image from "next/image";

export const Background = ({ imageString }: { imageString: string }) => {
  return (
    <div className="-z-50 intro w-full h-[22rem] absolute left-0">
      <Image
        src={imageString}
        alt="background"
        width={0}
        height={0}
        className="-z-10 w-full h-auto absolute bottom-0"
        draggable={false}
      />
    </div>
  );
};
