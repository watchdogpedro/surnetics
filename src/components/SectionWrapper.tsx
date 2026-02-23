import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  gray?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  gray = false,
}: SectionWrapperProps) {
  const bg = dark ? "bg-[#0A1628]" : gray ? "bg-[#F5F7FA]" : "bg-white";
  return (
    <section id={id} className={`${bg} py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
