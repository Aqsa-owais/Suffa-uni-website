"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock3, Wifi, Info } from "lucide-react"

export function SessionDetails() {
  return (
    <Card className="bg-card border rounded-xl">
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DetailItem
            icon={<Clock3 className="h-5 w-5 text-accent" aria-hidden="true" />}
            title="Timing"
            value="9:00 PM – 11:00 PM (PKT)"
          />
          <DetailItem
            icon={<Calendar className="h-5 w-5 text-accent" aria-hidden="true" />}
            title="Days"
            value="Monday to Friday"
          />
          <DetailItem
            icon={<Wifi className="h-5 w-5 text-accent" aria-hidden="true" />}
            title="Mode"
            value="Online Live Sessions"
          />
        </div>

        <div className="mt-6 rounded-lg border border-accent/40 p-4 flex items-start gap-3">
          <Info className="h-5 w-5 text-accent mt-0.5" aria-hidden="true" />
          <p className="text-sm">
            <span className="font-semibold">Note:</span> Make sure to join on time. Attendance and participation are
            important for your progress.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function DetailItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-muted-foreground">{value}</div>
      </div>
    </div>
  )
}