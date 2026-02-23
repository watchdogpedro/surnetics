import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface MarketCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function MarketCard({ icon, title, description, href = "/markets/" }: MarketCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[#E2E8F0] rounded-xl p-6 hover:border-[#0066FF] hover:shadow-lg hover:shadow-blue-100/60 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-[#E8F0FF] flex items-center justify-center mb-5 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-[#0A1628] font-semibold text-base mb-2 group-hover:text-[#0066FF] transition-colors duration-200">
        {title}
      </h3>
      <p className="text-[#8892A4] text-sm leading-relaxed">{description}</p>
      <div className="flex items-center gap-1 mt-4 text-[#0066FF] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Learn more <ArrowRight size={12} />
      </div>
    </Link>
  );
}
