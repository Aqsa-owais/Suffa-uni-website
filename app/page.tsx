import { SiteNavbar } from "@/components/site-navbar"
import { Hero } from "@/components/hero"
import { SessionDetails } from "@/components/session-details"
import { SiteFooter } from "@/components/site-footer"
import { SiteSidebar } from "@/components/site-sidebar"
import { AssignmentsGrid } from "@/components/assignments-grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b bg-background">
        <SiteNavbar />
      </header>

      <div className="flex flex-1">
        <SiteSidebar />

        <main className="flex-1">
          <Hero />

          <section aria-labelledby="session-details" className="py-10 md:py-14">
            <div className="container mx-auto px-4 md:px-6">
              <h2 id="session-details" className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                 Latest Trends in Technology 2025
              </h2>
              <p className="mt-2 text-muted-foreground">Key information about the live class schedule and format.</p>
              <div className="mt-6">
                <SessionDetails />
              </div>
            </div>
          </section>

          <section
            id="assignments"
            aria-labelledby="assignments-title"
            className="py-10 md:py-14 bg-secondary/60 border-y"
          >
            <div className="container mx-auto px-4 md:px-6">
              <h2 id="assignments-title" className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                Assignments
              </h2>
              <p className="mt-2 text-muted-foreground">
                View assignment details and submit your work.
              </p>
              <div className="mt-6">
                <AssignmentsGrid />
              </div>
            </div>
          </section>

          <section id="recordings" aria-labelledby="recordings-title" className="py-10 md:py-14">
            <div className="container mx-auto px-4 md:px-6">
              <h2 id="recordings-title" className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                Lecture Recordings
              </h2>
              <p className="mt-2 text-muted-foreground">Access all lecture recordings in one place.</p>

              <div className="mt-6">
                <Card className="bg-card border rounded-xl">
                  <CardHeader>
                    <CardTitle>All Recorded Lectures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Open the recordings sheet organized by week and topic.</p>
                    {/* Replace href with your actual Recordings link */}
                    <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="https://docs.google.com/spreadsheets/d/1jKni6pGRUb-eE6Fsh0TZQ2BcMBm1GNYgiUjqF4-NCjw/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">
                        Open Recordings Sheet
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="about" aria-labelledby="about-title" className="py-10 md:py-14">
            <div className="container mx-auto px-4 md:px-6">
              <h2 id="about-title" className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                About iCodeGuru
              </h2>
              <p className="mt-4 leading-relaxed text-pretty">
                iCodeGuru empowers students to learn practical programming through structured sessions, hands-on
                assignments, and curated resources. Stay consistent, participate actively, and use the provided links to
                submit work and revisit lectures.
              </p>
            </div>
          </section>
        </main>
      </div>

      <SiteFooter />
    </div>
  )
}
