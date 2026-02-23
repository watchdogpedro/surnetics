import { Shield, Calendar, Award, FileText } from "lucide-react";

interface PatentCardProps {
  number: string;
  title: string;
  inventor: string;
  assignee: string;
  filed: string;
  granted: string;
  expires: string;
  claims: number;
  citations: number;
  status: "ACTIVE" | "PENDING" | "EXPIRED";
}

export default function PatentCard({
  number,
  title,
  inventor,
  assignee,
  filed,
  granted,
  expires,
  claims,
  citations,
  status,
}: PatentCardProps) {
  return (
    <div className="bg-white border-2 border-[#0066FF] rounded-2xl overflow-hidden shadow-xl shadow-blue-100/40">
      {/* Header */}
      <div className="bg-[#0A1628] px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-1">
            US Patent
          </p>
          <p className="text-white font-bold text-xl md:text-2xl tracking-tight">
            {number}
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide self-start sm:self-auto ${
            status === "ACTIVE"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${status === "ACTIVE" ? "bg-green-400" : "bg-yellow-400"}`} />
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="px-6 md:px-8 py-6">
        <h3 className="text-[#0A1628] font-bold text-lg md:text-xl leading-snug mb-6">
          &ldquo;{title}&rdquo;
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-[#8892A4] text-xs font-medium uppercase tracking-wide mb-1">
              Inventor
            </p>
            <p className="text-[#2D3748] text-sm font-semibold">{inventor}</p>
          </div>
          <div>
            <p className="text-[#8892A4] text-xs font-medium uppercase tracking-wide mb-1">
              Assignee
            </p>
            <p className="text-[#2D3748] text-sm font-semibold">{assignee}</p>
          </div>
          <div className="flex items-start gap-2">
            <Calendar size={14} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[#8892A4] text-xs font-medium uppercase tracking-wide mb-0.5">
                Filed
              </p>
              <p className="text-[#2D3748] text-sm">{filed}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Award size={14} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[#8892A4] text-xs font-medium uppercase tracking-wide mb-0.5">
                Granted
              </p>
              <p className="text-[#2D3748] text-sm">{granted}</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 divide-x divide-[#E2E8F0] bg-[#F5F7FA] rounded-xl overflow-hidden">
          <div className="px-4 py-4 text-center">
            <p className="text-[#0A1628] font-bold text-2xl">{claims}</p>
            <p className="text-[#8892A4] text-xs mt-0.5">Claims</p>
          </div>
          <div className="px-4 py-4 text-center">
            <p className="text-[#0066FF] font-bold text-2xl">{citations}</p>
            <p className="text-[#8892A4] text-xs mt-0.5">Citations</p>
          </div>
          <div className="px-4 py-4 text-center">
            <p className="text-[#0A1628] font-bold text-2xl">{expires}</p>
            <p className="text-[#8892A4] text-xs mt-0.5">Expires</p>
          </div>
        </div>

        {/* Footer note */}
        <div className="flex items-start gap-2 mt-5 p-3 bg-[#E8F0FF] rounded-lg">
          <Shield size={14} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
          <p className="text-[#0066FF] text-xs leading-relaxed">
            Cited by {citations} subsequent patents — evidence of broad industry influence and technological relevance across multiple sectors.
          </p>
        </div>
      </div>
    </div>
  );
}
