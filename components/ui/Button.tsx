import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external,
  onClick,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-200 rounded-md";

  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-red-dark shadow-lg hover:shadow-xl",
    secondary: "bg-brand-black text-white hover:bg-gray-800",
    outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
    white: "bg-white text-brand-red hover:bg-gray-100 shadow-lg hover:shadow-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
