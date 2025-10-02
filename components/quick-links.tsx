"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Video } from "lucide-react"

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-card border rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" aria-hidden="true" />
            Assignments
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">View assignment details and submit your work.</div>
          {/* Replace href with your actual Assignments link */}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://your-assignments-link.example.com" target="_blank" rel="noopener noreferrer">
              Open <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card border rounded-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-accent" aria-hidden="true" />
            Recordings
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">Access all lecture recordings in one place.</div>
          {/* Replace href with your actual Recordings link */}
          <Button asChild variant="outline" className="border-accent hover:bg-secondary bg-transparent">
            <Link href="https://your-recordings-link.example.com" target="_blank" rel="noopener noreferrer">
              Open <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
