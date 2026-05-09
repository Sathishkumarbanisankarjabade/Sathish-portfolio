"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, FolderKanban } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center bg-white px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Sathish Jabade 
          </h1>

          <p className="mb-5 max-w-lg text-xl leading-relaxed text-slate-700 md:text-2xl">
            Robotics Master&apos;s student focused on <span className="whitespace-nowrap">ROS 2</span>, autonomous navigation, computer vision, and <span className="whitespace-nowrap">simulation-based development</span>.
          </p>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600">
            I work on mobile robot perception, SLAM, Nav2 navigation, YOLOv8 detection pipelines, and <span className="whitespace-nowrap">Python/C++</span> robotics software for autonomous systems.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="whitespace-nowrap rounded-full bg-sky-600 px-8 py-6 text-base font-semibold text-white shadow-sm transition hover:bg-sky-700 hover:shadow-md"
            >
              <a href="#projects">
                <FolderKanban className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="whitespace-nowrap rounded-full border-sky-500 px-8 py-6 text-base font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              <a
                href="/Cv_SathishJabade.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="whitespace-nowrap rounded-full border-slate-300 px-8 py-6 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Profile Photo - no frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/profile-photo.jpg"
            alt="Sathish Jabade profile"
            className="h-[360px] w-[360px] object-contain md:h-[430px] md:w-[430px]"
          />
        </motion.div>
      </div>
    </section>
  )
}