"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Youtube, Linkedin, Globe } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t bg-secondary/60">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="iCodeGuru logo" className="h-7 w-7 rounded-sm" width={28} height={28} />
            <span className="font-semibold tracking-tight">iCodeGuru</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Replace href values with your social links */}
            <Link
              href="https://icode.guru/join/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <Globe className="h-5 w-5 hover:opacity-80" />
            </Link>
            <Link href="https://www.facebook.com/iCodeguru/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:opacity-80" />
            </Link>
            <Link href="https://www.youtube.com/@iCodeGuru0" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-5 w-5 hover:opacity-80" />
            </Link>
            <Link href="https://www.linkedin.com/company/icode-guru/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:opacity-80" />
            </Link>
          </div>

          {/* Replace href with your Feedback Form link */}
          <Button asChild variant="outline" className="border-accent bg-transparent">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSessmxG9HB18z6cVLgLYoJQcDazMyoPyb5W_BFF6ByF-IidhA/viewform" target="_blank" rel="noopener noreferrer">
              Feedback Form
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} iCodeGuru. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
