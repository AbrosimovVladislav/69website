type BadgeProps = {
  children: React.ReactNode;
  variant?: "red" | "dark";
};

export default function Badge({ children, variant = "red" }: BadgeProps) {
  const styles = {
    red: "bg-accent text-white",
    dark: "bg-card text-muted border border-border",
  };

  return (
    <span className={`inline-block text-xs font-semibold uppercase px-2 py-1 rounded ${styles[variant]}`}>
      {children}
    </span>
  );
}
