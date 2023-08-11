export const Button = ({ children }: { children: string }) => {
  return (
    <button className="button w-3/4 h-12 rounded-full my-10">{children}</button>
  );
};
