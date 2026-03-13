import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const base = "inline-flex items-center justify-center font-bold uppercase tracking-wide rounded-lg transition-colors";

const variants = {
  primary: "bg-accent hover:bg-accent-hover text-white",
  outline: "border border-white text-white hover:bg-white hover:text-page",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
