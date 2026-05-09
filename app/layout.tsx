import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Sathish Jabade - Intelligent Robotics Portfolio",
  description:
    "Master's student in Intelligent Robotics focused on ROS 2, computer vision, autonomous systems, and robotics software development.",
  keywords: ["Intelligent Robotics", "ROS 2", "computer vision", "robotics", "portfolio"],
  authors: [{ name: "Sathish Kumar Bani Sankar Jabade" }],
  openGraph: {
    title: "Sathish Jabade - Intelligent Robotics Portfolio",
    description:
      "Master's student in Intelligent Robotics focused on ROS 2, computer vision, autonomous systems, and robotics software development.",
    type: "website",
  },
  generator: "senotron",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
