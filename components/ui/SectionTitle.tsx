type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
        {children}
      </h2>
      <div className="w-16 h-1 bg-accent mt-3" />
    </div>
  );
}
