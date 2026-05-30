import { personal } from '../data/personal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] bg-black/40 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
