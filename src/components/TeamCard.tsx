interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  initials: string;
  credentials?: string[];
}

export default function TeamCard({ name, title, bio, initials, credentials = [] }: TeamCardProps) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8">
      <div className="flex items-start gap-4 mb-5">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-[#0A1628] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">{initials}</span>
        </div>
        <div>
          <h3 className="text-[#0A1628] font-bold text-base">{name}</h3>
          <p className="text-[#0066FF] text-sm font-medium">{title}</p>
        </div>
      </div>
      <p className="text-[#8892A4] text-sm leading-relaxed mb-4">{bio}</p>
      {credentials.length > 0 && (
        <ul className="space-y-1">
          {credentials.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#2D3748]">
              <span className="text-[#0066FF] mt-0.5 flex-shrink-0">·</span>
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
