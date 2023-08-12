export const Button = ({ children, className }: { children: string, className?: string }) => {
  return (
    <button className={`button w-3/4 h-12 rounded-full ${className}`}>{children}</button>
  );
};
