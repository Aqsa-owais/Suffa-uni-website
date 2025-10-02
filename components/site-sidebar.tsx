"use client"

import Link from "next/link"
import { Home, Clock3, FileText, Video, Info } from "lucide-react"

export function SiteSidebar() {
  return (
    <aside className="w-64 border-r bg-background/80 hidden md:block">
      <nav className="sticky top-0 p-4">
        <div className="text-sm font-semibold mb-2">Navigation</div>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="#home" className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-secondary">
              <Home className="h-4 w-4 text-accent" aria-hidden="true" />
              Home
            </Link>
          </li>
          <li>
            <Link href="#session-details" className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-secondary">
              <Clock3 className="h-4 w-4 text-accent" aria-hidden="true" />
              Session Details
            </Link>
          </li>
          <li>
            <Link href="#assignments" className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-secondary">
              <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
              Assignments
            </Link>
          </li>
          <li>
            <Link href="#recordings" className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-secondary">
              <Video className="h-4 w-4 text-accent" aria-hidden="true" />
              Recordings
            </Link>
          </li>
          <li>
            <Link href="#about" className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-secondary">
              <Info className="h-4 w-4 text-accent" aria-hidden="true" />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}