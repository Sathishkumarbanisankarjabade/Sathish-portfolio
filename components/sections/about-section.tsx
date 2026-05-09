"use client"
import { motion } from "framer-motion"
import InteractiveTimeline from "@/components/interactive-timeline"
import LiveGitHubWidget from "@/components/widgets/live-github-widget"
import CurrentlyLearningWidget from "@/components/widgets/currently-learning-widget"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">About Me</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            I am a Master's student in Intelligent Robotics at Deggendorf Institute of Technology in Germany, with a
            Mechanical Engineering background and hands-on experience in robotics perception, computer vision, ROS 2,
            Gazebo simulation, and Python-based development.
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mt-4">
            I have developed robotics perception pipelines on Linux, including a YOLOv8-based QR victim-detection module
            for an AI-driven Search & Rescue TurtleBot3 system using ROS 2, Gazebo, SLAM, Nav2, and TurtleBot3.
            My work is focused on reliable perception integration, confidence-based detection, evidence logging, and
            map-frame victim reporting.
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mt-4">
            I am currently strengthening my Python and C++ skills for robotics software development, with interests in
            autonomous navigation, SLAM, mobile robots, simulation, and AI-based perception systems.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <InteractiveTimeline />
        </motion.div>

        {/* Dynamic Widgets */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <LiveGitHubWidget />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <CurrentlyLearningWidget />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
