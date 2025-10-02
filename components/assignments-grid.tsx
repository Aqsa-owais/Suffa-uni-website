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
    subtitle: "Introduction to Programming Concepts",
    detailsUrl: "https://your-assignment-1-details.example.com",
    submitUrl: "https://your-assignment-1-submit.example.com",
  },
  {
    id: 2,
    title: "Assignment 2",
    subtitle: "Data Structures and Algorithms",
    detailsUrl: "https://your-assignment-2-details.example.com",
    submitUrl: "https://your-assignment-2-submit.example.com",
  },
  {
    id: 3,
    title: "Assignment 3",
    subtitle: "Object-Oriented Programming",
    detailsUrl: "https://your-assignment-3-details.example.com",
    submitUrl: "https://your-assignment-3-submit.example.com",
  },
  {
    id: 4,
    title: "Assignment 4",
    subtitle: "Web Development Basics",
    detailsUrl: "https://your-assignment-4-details.example.com",
    submitUrl: "https://your-assignment-4-submit.example.com",
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
