// app/api/incidents/route.ts
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const resolved = url.searchParams.get("resolved")

  // Mock data
  const data = [
    {
      id: "1",
      type: "Unattended Bag",
      thumbnailUrl: "https://via.placeholder.com/150",
      tsStart: new Date().toISOString(),
      tsEnd: new Date().toISOString(),
      camera: {
        location: "Rear Exit",
      },
    },
    {
      id: "2",
      type: "Fence Breach",
      thumbnailUrl: "https://via.placeholder.com/150",
      tsStart: new Date().toISOString(),
      tsEnd: new Date().toISOString(),
      camera: {
        location: "South Side",
      },
    },
  ]

  return NextResponse.json(data)
}
