export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0f1e] text-white">
      <div className="mx-auto max-w-4xl px-4 text-center animate-fade-up">
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.04em' }}>
          Surnetics
        </h1>
        <p className="text-xl md:text-2xl text-slate-400"
          style={{ fontFamily: 'var(--font-body)' }}>
          Coming soon.
        </p>
      </div>
    </main>
  );
}
