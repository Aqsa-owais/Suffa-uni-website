"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

type Assignment = {
  id: number
  title: string
  subtitle: string
  detailsUrl: string
  submitUrl: string
}

const assignments: Assignment[] = [
  {
    id: 1,
    title: "Assignment 1",
    subtitle: "1st Assignment Instructions ",
    detailsUrl: "https://docs.google.com/document/d/1rLREBcYbFDGY4ADA0Ir54ZVq2pAcWgGwBuVAUXjOuIg/edit?tab=t.0#heading=h.jm555u21o2rn",
    submitUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeXDa5DGrWzg2jscrMDcLjV3EXut3oWV5YIv3AfxRSICccavg/viewform",
  },
  {
    id: 2,
    title: "Assignment 2",
    subtitle: "2nd Assignment Instructions",
    detailsUrl: "https://docs.google.com/document/d/1mO7aJTi_gz-z56TfuVV2BCMjTXH2_qj7GFTusismug4/edit?tab=t.0#heading=h.3waw299n8mvu",
    submitUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeQ0CdAOBuUt1-ZVcvOLOo2moaqllkNdTw9TVoMDjMj3r5AKg/viewform",
  },
  {
    id: 3,
    title: "Assignment 3",
    subtitle: "3rd Assignment Instructions",
    detailsUrl: "https://docs.google.com/document/d/16XGcm316HUaqWiTgTM6IERap3VF9deA2RVUXzasRJH8/edit?tab=t.0",
    submitUrl: "https://docs.google.com/forms/d/e/1FAIpQLScrWn2KVuKcebG2F9AWrvMfx9r4QHpLss5aAwKmqR_p6w5IDQ/viewform",
  },
  {
    id: 4,
    title: "Assignment 4",
    subtitle: "Machine Learning Quiz Submission Form",
    detailsUrl: "",
    submitUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd9nam_GtWQrR25ePqbmop6bqRkP1oZ6C0gJfZtAJV5kEkfkg/viewform",
  },
]

export function AssignmentsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {assignments.map((a) => (
        <Card key={a.id} className="bg-card border rounded-xl">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" aria-hidden="true" />
              {a.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{a.subtitle}</p>
            <div className="mt-4 flex items-center gap-3">
              <Button asChild variant="outline" className="border-accent bg-transparent">
                <Link href={a.detailsUrl} target="_blank" rel="noopener noreferrer">
                  Details <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={a.submitUrl} target="_blank" rel="noopener noreferrer">
                  Submit <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}