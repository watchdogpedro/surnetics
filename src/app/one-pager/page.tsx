import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Surnetics — Microfluidics Patent Portfolio",
  description: "One-page overview of the Surnetics microfluidics patent portfolio available for sale or licensing.",
  robots: { index: false, follow: false },
};

export default function OnePagerPage() {
  const patents = [
    { number: "US 12,263,480", title: "Diagnostic Device with Integrated Sampler and Holder", year: "2025" },
    { number: "US 12,083,517", title: "Microfluidic Products with Controlled Fluid Flow", year: "2024" },
    { number: "US 11,583,858", title: "Microfluidic Diagnostics with Controlled Fluid Flow", year: "2023" },
    { number: "US 10,821,438", title: "Microfluidic Diagnostics with Controlled Fluid Flow", year: "2020" },
    { number: "US 9,968,930",  title: "Microfluidic Products with Controlled Fluid Flow", year: "2018" },
  ];

  const applications = [
    { label: "Point-of-Care Diagnostics", buyers: "Abbott, Roche, bioMérieux, Siemens Healthineers, BD" },
    { label: "Molecular Diagnostics & PCR", buyers: "Thermo Fisher, Qiagen, Hologic, GenMark" },
    { label: "Immunoassays & Biosensing", buyers: "Abbott, Siemens, Luminex, Bio-Rad" },
    { label: "LNP & Drug Delivery", buyers: "Pfizer, Moderna, AstraZeneca, Evonik" },
    { label: "Clinical Lab Automation", buyers: "Danaher, Beckman Coulter, Cepheid, Sysmex" },
    { label: "Wearable Biosensors", buyers: "Dexcom, Medtronic, Abbott FreeStyle" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', Arial, sans-serif;
          background: #fff;
          color: #0A1628;
        }

        .page {
          width: 8.5in;
          min-height: 11in;
          margin: 0 auto;
          padding: 0;
          background: #fff;
          position: relative;
        }

        /* Top header */
        .header {
          background: #0A1628;
          padding: 32px 48px 28px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .header-left h1 {
          color: #fff;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }

        .header-left p {
          color: rgba(255,255,255,0.5);
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 500;
        }

        .header-right {
          text-align: right;
        }

        .header-right .badge {
          display: inline-block;
          background: #0066FF;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 8px;
        }

        .header-right p {
          color: rgba(255,255,255,0.4);
          font-size: 11px;
        }

        .blue-bar {
          height: 3px;
          background: #0066FF;
        }

        /* Body */
        .body {
          padding: 36px 48px 32px;
        }

        /* Intro */
        .intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        .intro-text p {
          font-size: 13px;
          line-height: 1.7;
          color: #4A5568;
          margin-bottom: 12px;
        }

        .intro-text p strong {
          color: #0A1628;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          align-content: start;
        }

        .stat-box {
          border: 1px solid #E2E8F0;
          border-radius: 4px;
          padding: 14px 16px;
          text-align: center;
          background: #F8FAFC;
        }

        .stat-box .value {
          font-size: 24px;
          font-weight: 800;
          color: #0066FF;
          letter-spacing: -0.5px;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-box .label {
          font-size: 9px;
          color: #8892A4;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        /* Section label */
        .section-label {
          font-size: 9px;
          font-weight: 700;
          color: #0066FF;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        /* Patent table */
        .patent-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 28px;
        }

        .patent-table th {
          text-align: left;
          font-size: 9px;
          font-weight: 700;
          color: #8892A4;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 0 0 8px 0;
          border-bottom: 1px solid #E2E8F0;
        }

        .patent-table td {
          font-size: 12px;
          color: #2D3748;
          padding: 9px 0;
          border-bottom: 1px solid #F0F4F8;
          vertical-align: top;
        }

        .patent-table td:first-child {
          font-weight: 700;
          color: #0066FF;
          white-space: nowrap;
          padding-right: 16px;
          width: 120px;
        }

        .patent-table td:last-child {
          color: #8892A4;
          text-align: right;
          width: 40px;
        }

        /* Applications grid */
        .app-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-bottom: 28px;
        }

        .app-card {
          border: 1px solid #E2E8F0;
          border-radius: 4px;
          padding: 12px 14px;
        }

        .app-card .app-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1628;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .app-card .app-buyers {
          font-size: 9.5px;
          color: #8892A4;
          line-height: 1.5;
        }

        /* Deal structures */
        .deal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-bottom: 32px;
        }

        .deal-card {
          background: #0A1628;
          border-radius: 4px;
          padding: 14px 16px;
          text-align: center;
        }

        .deal-card .deal-name {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .deal-card .deal-desc {
          font-size: 9.5px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }

        /* Divider */
        .divider {
          height: 1px;
          background: #E2E8F0;
          margin: 24px 0;
        }

        /* Technology callout */
        .tech-callout {
          border-left: 3px solid #0066FF;
          background: #F0F4FF;
          padding: 16px 20px;
          border-radius: 2px;
          margin-bottom: 28px;
        }

        .tech-callout p {
          font-size: 12px;
          line-height: 1.7;
          color: #4A5568;
        }

        .tech-callout p strong {
          color: #0A1628;
        }

        /* Footer */
        .footer {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          padding: 20px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .footer .contact-block p {
          font-size: 11px;
          color: #4A5568;
          line-height: 1.6;
        }

        .footer .contact-block strong {
          color: #0A1628;
          font-size: 12px;
          font-weight: 700;
        }

        .footer .url {
          font-size: 14px;
          font-weight: 700;
          color: #0066FF;
          text-decoration: none;
        }

        /* Print styles */
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page { width: 100%; margin: 0; }
          .no-print { display: none; }
        }

        /* Screen preview button */
        .print-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #0066FF;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          z-index: 999;
          box-shadow: 0 2px 8px rgba(0,102,255,0.4);
        }

        @media print { .print-btn { display: none; } }
      `}</style>

      <PrintButton />

      <div className="page">

        {/* Header */}
        <div className="header">
          <div className="header-left">
            <h1>Surnetics</h1>
            <p>Microfluidics Patent Portfolio</p>
          </div>
          <div className="header-right">
            <div className="badge">Available for Acquisition or License</div>
            <p>surnetics.com/ip-portfolio</p>
          </div>
        </div>
        <div className="blue-bar" />

        {/* Body */}
        <div className="body">

          {/* Intro + Stats */}
          <div className="intro">
            <div className="intro-text">
              <p>
                Surnetics holds a portfolio of <strong>5 granted US patents</strong> covering a platform technology that moves
                fluids through microfluidic channels passively — <strong>no pump, no valve, no external power.</strong>
              </p>
              <p>
                The mechanism is a precision surface energy gradient coating applied to the channel wall that
                generates a net capillary force, self-propelling fluid at a controlled, tunable velocity.
                Flow rate, start point, and stop point are determined entirely by the coating design.
              </p>
              <p>
                Surnetics is the <strong>only commercial source</strong> for this technology. No other company
                can offer pump-free microfluidic flow control based on surface energy gradients.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-box"><div className="value">5</div><div className="label">Granted US Patents</div></div>
              <div className="stat-box"><div className="value">2041</div><div className="label">Protection Through</div></div>
              <div className="stat-box"><div className="value">44+</div><div className="label">Patent Citations</div></div>
              <div className="stat-box"><div className="value">$12B+</div><div className="label">Addressable Market</div></div>
            </div>
          </div>

          {/* Technology Callout */}
          <div className="tech-callout">
            <p>
              <strong>Core Innovation:</strong> A continuous gradient in surface wettability along the channel wall creates
              an unbalanced capillary force. The liquid experiences a net force toward the low-contact-angle end and
              self-propels — enabling multiple independent flow rates on a single device layer, passive stop/start zones,
              and precise velocity control with no electronics.
            </p>
          </div>

          {/* Patent Table */}
          <div className="section-label">Patent Portfolio — 5 Granted US Patents</div>
          <table className="patent-table">
            <thead>
              <tr>
                <th>Patent Number</th>
                <th>Title</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {patents.map((p) => (
                <tr key={p.number}>
                  <td>{p.number}</td>
                  <td>{p.title}</td>
                  <td>{p.year}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Applications */}
          <div className="section-label">Commercial Applications & Target Acquirers</div>
          <div className="app-grid">
            {applications.map((a) => (
              <div key={a.label} className="app-card">
                <div className="app-label">{a.label}</div>
                <div className="app-buyers">{a.buyers}</div>
              </div>
            ))}
          </div>

          {/* Deal Structures */}
          <div className="section-label">Available Deal Structures</div>
          <div className="deal-grid">
            <div className="deal-card">
              <div className="deal-name">Outright Sale</div>
              <div className="deal-desc">Full assignment of all patent rights. Clean acquisition with no ongoing obligations.</div>
            </div>
            <div className="deal-card">
              <div className="deal-name">Exclusive License</div>
              <div className="deal-desc">Exclusive rights in defined field of use or geography. Surnetics retains ownership.</div>
            </div>
            <div className="deal-card">
              <div className="deal-name">Field-of-Use License</div>
              <div className="deal-desc">Non-exclusive license for specific application area. Multiple licensees possible.</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="footer">
          <div className="contact-block">
            <strong>Paul Denman</strong>
            <p>Co-Founder &amp; Director of Business Development, Surnetics LLC</p>
            <p>paul@surnetics.com</p>
          </div>
          <a href="https://surnetics.com/ip-portfolio/" className="url">
            surnetics.com/ip-portfolio
          </a>
        </div>

      </div>
    </>
  );
}
