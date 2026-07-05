type SectionLabelProps = {
  number: string;
  label: string;
};

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-[14px]">
      <span className="font-display text-[14px] font-bold text-accent">
        {number}
      </span>
      <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-faint">
        {label}
      </span>
      <span className="h-px flex-grow bg-line" />
    </div>
  );
}
