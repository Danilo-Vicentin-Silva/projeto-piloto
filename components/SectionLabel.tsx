interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      {children}
    </div>
  );
}
