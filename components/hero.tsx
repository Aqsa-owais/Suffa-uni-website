"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="bg-secondary/60">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">Welcome to iCodeGuru</h1>
          <p className="mt-2 text-sm font-medium text-foreground">in collaboration with DHA Suffa University</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            iCodeGuru is a dynamic learning platform focused on bridging the gap between academia and the tech industry
            by offering practical, in-demand, and globally relevant courses. To explore more and become part of our
            learning community...
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#session-details">View Session Details</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-accent text-foreground hover:bg-secondary bg-transparent"
            >
              <Link href="#assignments">Go to Assignments</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/logo.png"
            alt="iCodeGuru brand mark"
            width={160}
            height={160}
            className="h-28 w-28 md:h-40 md:w-40 rounded"
          />
        </div>
      </div>
    </section>
  )
}
