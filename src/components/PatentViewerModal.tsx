"use client";

import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";

interface PatentViewerModalProps {
  patentNumber: string;
  title: string;
  pdfFile: string | null; // null = pending application, open Google Patents
  googlePatentsUrl: string;
  onClose: () => void;
}

export default function PatentViewerModal({
  patentNumber,
  title,
  pdfFile,
  googlePatentsUrl,
  onClose,
}: PatentViewerModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#0A1628] px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-0.5">
              US Patent
            </p>
            <p className="text-white font-bold text-lg leading-tight">
              {patentNumber}
            </p>
            <p className="text-white/50 text-xs mt-0.5 leading-snug max-w-lg">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={googlePatentsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/20 text-white/80 text-xs font-semibold hover:border-white/50 hover:text-white transition-colors"
            >
              Google Patents <ExternalLink size={12} />
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-[#F5F7FA] overflow-hidden">
          {pdfFile ? (
            <iframe
              src={`${pdfFile}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              className="w-full h-full border-0"
              title={`Patent ${patentNumber}`}
            />
          ) : (
            // Pending applications — redirect to Google Patents
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-8">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F0FF] flex items-center justify-center">
                <ExternalLink size={28} className="text-[#0066FF]" />
              </div>
              <div>
                <p className="text-[#0A1628] font-bold text-xl mb-2">
                  Patent Application
                </p>
                <p className="text-[#8892A4] text-sm leading-relaxed max-w-sm">
                  This application is pending. View the full filing on Google Patents.
                </p>
              </div>
              <a
                href={googlePatentsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors"
              >
                View on Google Patents <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
