"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface ApplicationItem {
  title: string;
  tagline: string;
  fluidRole: string;
  criticality: string;
  impact: string;
  details: string[];
}

interface ApplicationAccordionProps {
  items: ApplicationItem[];
}

export default function ApplicationAccordion({ items }: ApplicationAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.title}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-[#0066FF]/40 bg-white shadow-lg md:col-span-2"
                : "border-[#E2E8F0] bg-white hover:border-[#0066FF]/30 hover:shadow-md cursor-pointer"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left p-6 flex items-start justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[#0A1628] font-bold text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">
                  {item.tagline}
                </p>
              </div>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0066FF] text-white rotate-180"
                    : "bg-[#F5F7FA] text-[#8892A4]"
                }`}
              >
                <ChevronDown size={16} />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 animate-fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#F5F7FA] rounded-xl p-4">
                    <p className="text-[#0066FF] text-[10px] font-bold uppercase tracking-widest mb-1.5">
                      Role of Fluid Control
                    </p>
                    <p className="text-[#2D3748] text-sm leading-relaxed">
                      {item.fluidRole}
                    </p>
                  </div>
                  <div className="bg-[#F5F7FA] rounded-xl p-4">
                    <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                      Why It&apos;s Critical
                    </p>
                    <p className="text-[#2D3748] text-sm leading-relaxed">
                      {item.criticality}
                    </p>
                  </div>
                  <div className="bg-[#E8F0FF] rounded-xl p-4">
                    <p className="text-[#0066FF] text-[10px] font-bold uppercase tracking-widest mb-1.5">
                      Surnetics Impact
                    </p>
                    <p className="text-[#2D3748] text-sm leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-[#8892A4] text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
