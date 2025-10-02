"use client"

export function SiteNavbar() {
  return (
    <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <img src="/images/logo.png" alt="iCodeGuru logo" className="h-8 w-8 rounded-sm" width={32} height={32} />
        <span className="font-semibold tracking-tight">iCodeGuru</span>
      </div>
      <div className="hidden md:block" aria-hidden="true" />
    </nav>
  )
}