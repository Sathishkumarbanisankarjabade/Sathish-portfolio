"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, GitCommit } from "lucide-react"

export default function LiveGitHubWidget() {
  const githubData = {
    projects: 4,
    publications: 2,
    lastUpdate: "Recently",
  }

  return (
    <Card className="glass-morphism border-white/20 hover:border-green-400/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Github className="h-5 w-5 text-green-400" />
          GitHub Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-2xl font-bold text-green-400">{githubData.projects}</div>
            <div className="text-sm text-white/60">Robotics Projects</div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-2xl font-bold text-yellow-400">{githubData.publications}</div>
            <div className="text-sm text-white/60">Publications</div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitCommit className="h-4 w-4 text-cyan-400" />
            <span className="text-white/80">Last update:</span>
          </div>
          <Badge variant="secondary" className="bg-green-400/20 text-green-400">
            {githubData.lastUpdate}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-white/60">Recent Focus:</div>
          <div className="space-y-1">
            <div className="text-sm text-white/80">🚀 Refining perception pipelines for TurtleBot3 Search & Rescue.</div>
            <div className="text-sm text-white/80">✨ Improving optical flow vehicle speed estimation workflows.</div>
            <div className="text-sm text-white/80">🔧 Documenting robotics and simulation work on GitHub.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
