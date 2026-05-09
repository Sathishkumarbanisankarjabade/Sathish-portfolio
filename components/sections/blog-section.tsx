"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "Fabrication of Solar Powered Mini Electric Tiller",
    excerpt:
      "International Journal of Advances in Engineering and Management, Volume 6, Issue 8, August 2024.",
    date: "2024-08-01",
    readTime: "Published",
    tags: ["Solar Energy", "Fabrication", "Mechanical Design"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Design, Analyse and Fabrication of Compact Foldable Electric Bicycle",
    excerpt:
      "International Journal of Advances in Engineering and Management, Volume 6, Issue 8, August 2024.",
    date: "2024-08-01",
    readTime: "Published",
    tags: ["Sustainable Mobility", "CAD", "Fabrication"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

const researchHighlights = [
  {
    name: "ROS 2 Search & Rescue Pipeline",
    description:
      "Integrated TurtleBot3 perception, SLAM, Nav2, and YOLOv8 QR detection into an autonomous rescue workflow.",
    domain: "Robotics",
  },
  {
    name: "Vehicle Speed Estimation",
    description:
      "Developed a computer vision pipeline using Lucas–Kanade optical flow for speed estimation from highway video.",
    domain: "Computer Vision",
  },
  {
    name: "Sustainable Mobility Design",
    description:
      "Designed and fabricated a compact foldable electric bicycle and a solar-powered mini electric tiller.",
    domain: "Engineering",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">Publications & Research</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Selected publications and research highlights from robotics, computer vision, and sustainable engineering work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">📚 Publications</h3>

            <div className="space-y-6">
              {publications.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="glass-morphism border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-1">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-32 md:h-full object-cover rounded-l-lg"
                          />
                        </div>

                        <div className="md:col-span-2 p-6">
                          <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">{post.title}</h4>

                          <p className="text-white/70 mb-4 line-clamp-2">{post.excerpt}</p>

                          <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-white/10 text-white">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="glass-morphism border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 bg-transparent"
                          >
                            <a href="https://github.com/Banisankar" target="_blank" rel="noopener noreferrer">
                              View GitHub
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">🔍 Research Highlights</h3>

            <div className="space-y-4 mb-8">
              {researchHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="glass-morphism border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{highlight.name}</h4>
                        <span className="text-white/60 text-sm">{highlight.domain}</span>
                      </div>

                      <p className="text-white/70 mb-3">{highlight.description}</p>

                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-white/10 text-white">
                          {highlight.domain}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-purple-400 hover:text-purple-300"
                        >
                          <a href="https://github.com/Banisankar" target="_blank" rel="noopener noreferrer">
                            View GitHub
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* GitHub Activity Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Card className="glass-morphism border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">📊 GitHub Research Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 72 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${
                          i % 5 === 0
                            ? "bg-green-400"
                            : i % 3 === 0
                            ? "bg-green-400/60"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm mt-4">
                    Explore my GitHub for robotics code, perception implementations, and ongoing research work.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
