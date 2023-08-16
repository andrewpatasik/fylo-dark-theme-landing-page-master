export const Button = ({ children, className }: { children: string, className?: string }) => {
  return (
    <button className={`button h-12 rounded-full ${className}`}>{children}</button>
  );
};
