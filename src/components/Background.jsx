export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-purple-600/20 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-pink-600/15 blur-[100px]" />
      <div className="absolute bottom-32 right-10 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[90px]" />
    </div>
  )
}
