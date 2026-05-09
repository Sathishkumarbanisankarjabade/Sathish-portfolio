'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Braces,
  GitBranch,
  Github,
  Terminal,
  Cpu,
  Zap,
  Map,
  Navigation,
  Box,
  Eye,
  Target,
  Camera,
  Scan,
  Wind,
  ArrowUpDown,
  Crosshair,
  Wrench,
  Layers,
  CheckCircle,
  Hammer,
  Briefcase,
  MessageCircle,
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
    { name: 'Links', href: '#links' },
  ]

  return (
    <div className="bg-white text-slate-900">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full z-50 border-b border-gray-200 bg-white shadow-md backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-lg font-semibold text-sky-600">Sathish Jabade</div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-sky-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
            <div className="space-y-2 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-sky-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section
  id="home"
  className="bg-gradient-to-br from-white via-slate-50 to-sky-50 pt-28 pb-14"
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm">
          Robotics Software · ROS 2 · Computer Vision
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          Sathish Jabade
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">
          Robotics master&apos;s student focused on ROS 2, autonomous navigation,
          computer vision, and simulation-based robotics development.
        </p>

        

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md"
          >
            View Projects
          </a>

          <a
            href="/Cv_SathishJabade.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-sky-500 bg-white px-7 py-3 text-sm font-semibold text-sky-700 transition hover:-translate-y-0.5 hover:bg-sky-50"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Profile Photo - no outer frame */}
      <motion.div
        className="flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-sky-100/70 blur-3xl" />
          <img
            src="/profile-photo.jpg"
            alt="Sathish Jabade profile"
            className="h-[340px] w-[340px] object-contain sm:h-[390px] sm:w-[390px] lg:h-[430px] lg:w-[430px]"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* About Section */}
<motion.section
  id="about"
  className="bg-white py-14 md:py-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          About Me
        </h2>
        <p className="mt-3 max-w-md text-base text-slate-600">
          From mechanical engineering to robotics software and autonomous systems
        </p>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-[32px] border border-orange-200 bg-gradient-to-br from-slate-100 via-orange-50 to-orange-200 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl md:p-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-300/30 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-slate-300/40 blur-2xl" />

        <div className="relative">
          <p className="text-base leading-8 text-slate-800 md:text-lg">
            I come from a{" "}
            <span className="font-semibold text-orange-700">
              Mechanical Engineering
            </span>{" "}
            background and moved into robotics because I am interested in how
            machines can sense, move, and make decisions.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-800 md:text-lg">
            During my studies, I have worked on practical robotics and computer
            vision projects involving{" "}
            <span className="font-semibold text-orange-700">TurtleBot3</span>,{" "}
            <span className="font-semibold text-orange-700">ROS 2</span>,{" "}
            <span className="font-semibold text-orange-700">Gazebo</span>,{" "}
            <span className="font-semibold text-orange-700">SLAM</span>,{" "}
            <span className="font-semibold text-orange-700">Nav2</span>,{" "}
            <span className="font-semibold text-orange-700">OpenCV</span>, and{" "}
            <span className="font-semibold text-orange-700">
              YOLO-based detection
            </span>
            .
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>



      {/* Divider */}
      <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Projects Section */}
<motion.section
  id="projects"
  className="py-16 md:py-24 bg-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Projects
      </h2>
      <p className="mt-2 text-lg text-slate-600">
        Hands-on work across robotics, vision, and engineering systems
      </p>
    </div>

    <div className="space-y-8">
      {/* Project 1 */}
      <motion.div
        className="rounded-[32px] border border-sky-200 bg-gradient-to-br from-sky-50 via-blue-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-xl font-bold text-sky-700">
              01
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-700">
              🤖
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-950">
              AI-Driven{" "}
              <span className="text-sky-600">Search &amp; Rescue</span> with{" "}
              <span className="text-cyan-600">TurtleBot3</span>
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Built a{" "}
              <span className="font-semibold text-sky-600">
                Search &amp; Rescue robotics pipeline
              </span>{" "}
              using{" "}
              <span className="font-semibold text-cyan-600">TurtleBot3</span>{" "}
              for autonomous exploration, mapping, and victim detection in a
              simulated environment.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">

              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Developed a{" "}
                    <span className="font-semibold text-sky-600">
                      YOLOv8-based QR/victim detection
                    </span>{" "}
                    module.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Added{" "}
                    <span className="font-semibold text-cyan-600">
                      confidence filtering
                    </span>{" "}
                    to reduce false detections.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Logged timestamped evidence and reported victim coordinates
                    in the{" "}
                    <span className="font-semibold text-blue-600">
                      map frame
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Technologies Used
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "ROS 2 Humble",
                  "TurtleBot3",
                  "Gazebo",
                  "SLAM",
                  "Nav2",
                  "YOLOv8",
                  "Python",
                  "Linux",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        className="rounded-[32px] border border-sky-200 bg-gradient-to-br from-sky-50 via-blue-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-xl font-bold text-sky-700">
              02
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-700">
              📷
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-950">
              Vehicle Speed Estimation using{" "}
              <span className="text-violet-600">
                Lucas–Kanade Optical Flow
              </span>
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Developed a{" "}
              <span className="font-semibold text-violet-600">
                computer-vision pipeline
              </span>{" "}
              to estimate vehicle speed from highway videos using{" "}
              <span className="font-semibold text-indigo-600">
                feature tracking
              </span>{" "}
              and optical flow.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Implemented{" "}
                    <span className="font-semibold text-violet-600">
                      Lucas–Kanade optical flow
                    </span>{" "}
                    for tracking feature-point motion.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Visualized{" "}
                    <span className="font-semibold text-indigo-600">
                      motion vectors
                    </span>{" "}
                    for debugging and validation.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Added optional{" "}
                    <span className="font-semibold text-purple-600">
                      perspective transformation
                    </span>{" "}
                    for better road-plane measurement.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Technologies Used
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Python",
                  "OpenCV",
                  "Lucas–Kanade Optical Flow",
                  "Perspective Transform",
                  "Computer Vision",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project 3 */}
      <motion.div
        className="rounded-[32px] border border-sky-200 bg-gradient-to-br from-sky-50 via-blue-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-xl font-bold text-sky-700">
              03
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-700">
              ⚙️
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-950">
              <span className="text-emerald-600">Solar Powered</span> Mini
              Electric Tiller
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Designed and fabricated a{" "}
              <span className="font-semibold text-emerald-600">
                solar-powered mini electric tiller
              </span>{" "}
              to reduce manual agricultural labour with a focus on low-cost and
              eco-friendly operation.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Designed the{" "}
                    <span className="font-semibold text-emerald-600">
                      mechanical structure
                    </span>{" "}
                    for practical agricultural use.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Integrated{" "}
                    <span className="font-semibold text-green-600">
                      battery storage and solar energy
                    </span>{" "}
                    concept.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Focused on{" "}
                    <span className="font-semibold text-teal-600">
                      low-cost, eco-friendly operation
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Technologies Used
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Mechanical Design",
                  "Solar Energy",
                  "Battery Storage",
                  "Fabrication",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project 4 */}
      <motion.div
        className="rounded-[32px] border border-sky-200 bg-gradient-to-br from-sky-50 via-blue-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-xl font-bold text-sky-700">
              04
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-700">
              🚴
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-950">
              Compact{" "}
              <span className="text-rose-600">Foldable Electric Bicycle</span>
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Designed and developed a{" "}
              <span className="font-semibold text-rose-600">
                compact foldable electric bicycle
              </span>{" "}
              for urban commuting and sustainable mobility.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Designed a{" "}
                    <span className="font-semibold text-rose-600">
                      foldable structure
                    </span>{" "}
                    for portability.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Focused on{" "}
                    <span className="font-semibold text-pink-600">
                      sustainable urban mobility
                    </span>
                    .
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600">•</span>
                  <span>
                    Worked on practical{" "}
                    <span className="font-semibold text-red-600">
                      fabrication and compact mechanical design
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Technologies Used
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Mechanical Design",
                  "CAD",
                  "Fabrication",
                  "Sustainable Mobility",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Divider */}
      <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Experience Section */}
<motion.section
  id="experience"
  className="py-16 md:py-24 bg-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Experience
      </h2>
      <p className="mt-2 text-lg text-slate-600">
        Practical exposure from automotive training and quality inspection work
      </p>
    </div>

    <div className="space-y-8">
      {/* Experience 1 */}
      <motion.div
        className="rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-bold text-emerald-700">
              01
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
              🚗
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-semibold text-emerald-700">
              05/2023 – 06/2023
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Automotive 4-Wheeler Expert Training
            </h3>

            <p className="mt-1 font-semibold text-emerald-700">
              APSSDC – SIEMENS Center, Anantapur, India
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Completed hands-on training in diagnosis and maintenance of
              four-wheeled automobiles. Gained practical workshop knowledge in
              vehicle systems, maintenance processes, and automotive industry
              practices.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Key Focus
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Vehicle Diagnosis",
                  "Automotive Maintenance",
                  "Workshop Practice",
                  "Vehicle Systems",
                  "Technical Training",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-medium text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience 2 */}
      <motion.div
        className="rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-bold text-emerald-700">
              02
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
              🔍
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-semibold text-emerald-700">
              06/2020 – 10/2020
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Quality Control Inspector
            </h3>

            <p className="mt-1 font-semibold text-emerald-700">
              KSH Automotive Pvt. Ltd, Penukonda, India
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Performed dimensional and surface quality inspection of metal
              parts using precision tools. Supported production monitoring,
              visual inspection, final inspection before shipment, and
              shop-floor quality control activities.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Key Focus
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Quality Inspection",
                  "Dimensional Checking",
                  "Surface Inspection",
                  "Production Monitoring",
                  "Final Inspection",
                  "Shop-floor Teamwork",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-medium text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Divider */}
      <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Education Section */}
<motion.section
  id="education"
  className="py-16 md:py-24 bg-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Education
      </h2>
      <p className="mt-2 text-lg text-slate-600">
        My academic path from mechanical engineering to intelligent robotics
      </p>
    </div>

    <div className="space-y-8">
      {/* Education 1 */}
      <motion.div
        className="rounded-[32px] border border-violet-200 bg-gradient-to-br from-violet-50 via-purple-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-xl font-bold text-violet-700">
              01
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-700">
              🎓
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-semibold text-violet-700">
              03/2025 – Present
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Master of Engineering in Robotics
            </h3>

            <p className="mt-1 font-semibold text-violet-700">
              Deggendorf Institute of Technology
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Focused on robotics, autonomous systems, simulation, control,
              perception, and software development for intelligent robotic
              platforms.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Focus Areas
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Robotics",
                  "Autonomous Systems",
                  "Simulation",
                  "Control",
                  "Perception",
                  "Robot Software",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-medium text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education 2 */}
      <motion.div
        className="rounded-[32px] border border-violet-200 bg-gradient-to-br from-violet-50 via-purple-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-xl font-bold text-violet-700">
              02
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-700">
              🛠️
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-semibold text-violet-700">
              10/2021 – 05/2024
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Bachelor of Technology in Mechanical Engineering
            </h3>

            <p className="mt-1 font-semibold text-violet-700">
              PVKK Institute of Technology, India
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-600">
              Grade: 2.0
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Built a strong foundation in mechanical design, manufacturing,
              engineering analysis, fabrication, and practical mechanical
              systems.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Focus Areas
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Mechanical Design",
                  "Manufacturing",
                  "Fabrication",
                  "Engineering Analysis",
                  "Sustainable Systems",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-medium text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education 3 */}
      <motion.div
        className="rounded-[32px] border border-violet-200 bg-gradient-to-br from-violet-50 via-purple-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-xl font-bold text-violet-700">
              03
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-700">
              📘
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 inline-flex rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-semibold text-violet-700">
              06/2018 – 04/2021
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Diploma in Mechanical Engineering
            </h3>

            <p className="mt-1 font-semibold text-violet-700">
              PVKK Institute of Technology, India
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-600">
              CGPA: 75.54
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Developed core mechanical engineering knowledge through practical
              training, workshop exposure, design fundamentals, and technical
              coursework.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Focus Areas
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Mechanical Fundamentals",
                  "Workshop Practice",
                  "Design Basics",
                  "Manufacturing Processes",
                  "Technical Drawing",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-violet-200 bg-white px-3 py-1 text-sm font-medium text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Divider */}
      <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Skills Section */}
<motion.section
  id="skills"
  className="py-16 md:py-24 bg-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold tracking-tight sm:text-5xl"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <motion.span
            initial={{ scale: 0.8, opacity: 0, rotate: -4 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="inline-block text-6xl font-black leading-none sm:text-7xl"
          >
            T
          </motion.span>
          <span className="-ml-1 align-baseline">echnical Skills</span>
        </span>
      </motion.h2>

      <p className="mt-2 text-lg text-gray-600">
        Technologies and tools I use for robotics, computer vision, and
        engineering work
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      {/* Programming Languages */}
      <motion.div
        className="rounded-[28px] border border-sky-100 bg-sky-50/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
            <Code className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Programming Languages
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { name: "Python", icon: Code },
            { name: "C++", icon: Braces },
            { name: "MATLAB", icon: Braces },
          ].map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-sky-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <Icon className="mb-3 h-7 w-7 text-sky-600" />
              <p className="text-center text-sm font-semibold text-slate-700">
                {name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Robotics & Simulation */}
      <motion.div
        className="rounded-[28px] border border-emerald-100 bg-emerald-50/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Cpu className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Robotics & Simulation
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { name: "ROS 2 Humble", icon: Cpu },
            { name: "TurtleBot3", icon: Zap },
            { name: "Gazebo", icon: Box },
            { name: "SLAM", icon: Map },
            { name: "Nav2", icon: Navigation },
            { name: "ROS 2 Topics", icon: GitBranch },
          ].map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <Icon className="mb-3 h-7 w-7 text-emerald-600" />
              <p className="text-center text-sm font-semibold text-slate-700">
                {name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Computer Vision & Perception */}
      <motion.div
        className="rounded-[28px] border border-violet-100 bg-violet-50/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
            <Camera className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Computer Vision & Perception
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { name: "OpenCV", icon: Camera },
            { name: "QR/Object Detection", icon: Scan },
            { name: "Lucas–Kanade Optical Flow", icon: Wind },
            { name: "Feature Tracking", icon: Crosshair },
            { name: "Perspective Transform", icon: ArrowUpDown },
            { name: "Confidence Filtering", icon: CheckCircle },
          ].map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-violet-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
            >
              <Icon className="mb-3 h-7 w-7 text-violet-600" />
              <p className="text-center text-sm font-semibold text-slate-700">
                {name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Development Tools & OS */}
      <motion.div
        className="rounded-[28px] border border-amber-100 bg-amber-50/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <Terminal className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Development Tools & OS
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: Github },
            { name: "VS Code", icon: Code },
            { name: "Docker", icon: Box },
            { name: "Ubuntu Linux", icon: Terminal },
          ].map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-amber-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
            >
              <Icon className="mb-3 h-7 w-7 text-amber-600" />
              <p className="text-center text-sm font-semibold text-slate-700">
                {name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Engineering Background */}
      <motion.div
        className="rounded-[28px] border border-rose-100 bg-rose-50/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
            <Wrench className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Engineering Background
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { name: "Mechanical Design", icon: Wrench },
            { name: "AutoCAD", icon: Layers },
            { name: "Quality Inspection", icon: CheckCircle },
            { name: "Automotive Workshop", icon: Briefcase },
            { name: "Fabrication", icon: Hammer },
            { name: "Sustainable Mobility Systems", icon: Zap },
          ].map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-rose-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-md"
            >
              <Icon className="mb-3 h-7 w-7 text-rose-600" />
              <p className="text-center text-sm font-semibold text-slate-700">
                {name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Divider */}
      <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Publications Section */}
<motion.section
  id="publications"
  className="py-16 md:py-24 bg-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Publications
      </h2>
      <p className="mt-2 text-lg text-slate-600">
        Published work from my mechanical engineering projects
      </p>
    </div>

    <div className="space-y-8">
      {/* Publication 1 */}
      <motion.div
        className="rounded-[32px] border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-xl font-bold text-amber-700">
              01
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
              📄
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 inline-flex rounded-full border border-amber-200 bg-white px-3 py-1 text-sm font-semibold text-amber-700">
              August 2024
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Fabrication of Solar Powered Mini Electric Tiller
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Published in the International Journal of Advances in Engineering
              and Management, Vol. 6, Issue 8, August 2024, pp. 274–284.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Focus Areas
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Solar Energy",
                  "Mechanical Design",
                  "Agricultural Equipment",
                  "Battery Storage",
                  "Fabrication",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-amber-200 bg-white px-3 py-1 text-sm font-medium text-amber-700 transition hover:border-amber-300 hover:bg-amber-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://ijaem.net/issue_dcp/Fabrication%20of%20Solar%20Powered%20Mini%20Electric%20Tiller.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-amber-300 bg-white px-5 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-100 hover:border-amber-400"
            >
              View Paper →
            </a>
          </div>
        </div>
      </motion.div>

      {/* Publication 2 */}
      <motion.div
        className="rounded-[32px] border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex items-center gap-4 md:w-24 md:flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-xl font-bold text-amber-700">
              02
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
              📘
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 inline-flex rounded-full border border-amber-200 bg-white px-3 py-1 text-sm font-semibold text-amber-700">
              August 2024
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              Design, Analyse and Fabrication of Compact Foldable Electric
              Bicycle
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Published in the International Journal of Advances in Engineering
              and Management, Vol. 6, Issue 8, August 2024, pp. 480–488.
            </p>

            <div className="mt-5">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
                Focus Areas
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Mechanical Design",
                  "Foldable Structure",
                  "Electric Mobility",
                  "Fabrication",
                  "Sustainable Transport",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-amber-200 bg-white px-3 py-1 text-sm font-medium text-amber-700 transition hover:border-amber-300 hover:bg-amber-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://ijaem.net/issue_dcp/Design%2C%20Analyse%20and%20Fabrication%20of%20Compact%20Foldable%20Electric%20Bicycle.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-amber-300 bg-white px-5 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-100 hover:border-amber-400"
            >
              View Paper →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Divider */}
      <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 md:py-24 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Open to opportunities, collaborations, and robotics-focused roles
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900 mb-3">Email</p>
                <a href="mailto:jabadesbanisankar@gmail.com" className="text-sky-600 font-semibold hover:text-sky-700 transition">
                  jabadesbanisankar@gmail.com
                </a>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900 mb-3">Location</p>
                <p className="text-slate-700">Cham, Germany</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Links Section */}
<motion.section
  id="links"
  className="py-16 md:py-24 bg-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Links
      </h2>
      <p className="mt-2 text-lg text-slate-600">
        Connect with me across professional and social platforms
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* GitHub */}
      <motion.a
        href="https://github.com/SathishKumarBaniSankarJabade"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-white/10" />

        <div className="relative">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Github className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold">GitHub</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            Explore my robotics, computer vision, and engineering project
            repositories.
          </p>

          <p className="mt-6 text-sm font-semibold text-white">
            View Profile →
          </p>
        </div>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/sathish-kumar-bani-sankar-jabade-b32a6a1a0/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-[32px] border border-blue-200 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-8 text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-white/15" />

        <div className="relative">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <Briefcase className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold">LinkedIn</h3>
          <p className="mt-2 text-sm leading-6 text-blue-50">
            Connect with me professionally for robotics, internships, and
            working-student opportunities.
          </p>

          <p className="mt-6 text-sm font-semibold text-white">
            Connect →
          </p>
        </div>
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/bani_sankar_/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-[32px] border border-pink-200 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 p-8 text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-white/15" />

        <div className="relative">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <Camera className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold">Instagram</h3>
          <p className="mt-2 text-sm leading-6 text-pink-50">
            Follow my personal updates, student life, and project journey.
          </p>

          <p className="mt-6 text-sm font-semibold text-white">
            Follow →
          </p>
        </div>
      </motion.a>

      {/* X / Twitter */}
      <motion.a
        href="https://x.com/bani_sankar"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-gradient-to-br from-zinc-950 via-zinc-800 to-neutral-700 p-8 text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute right-[-30px] top-[-30px] h-28 w-28 rounded-full bg-white/10" />

        <div className="relative">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold">X / Twitter</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-200">
            Follow short updates about robotics, learning, and projects.
          </p>

          <p className="mt-6 text-sm font-semibold text-white">
            Follow →
          </p>
        </div>
      </motion.a>
    </div>
  </div>
</motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-slate-600">© 2026 Sathish Jabade. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/Banisankar" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sathish-kumar-bani-sankar-jabade-b32a6a1a0/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/bani_sankar_/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
              Instagram
            </a>
            <a href="https://x.com/bani_sankar" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
              X / Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSend = () => {
    const subject = formData.subject || 'Portfolio inquiry'
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    window.location.href = `mailto:jabadesbanisankar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-semibold text-slate-900">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(event) => handleChange('name', event.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(event) => handleChange('email', event.target.value)}
            placeholder="Your email"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900">Subject</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(event) => handleChange('subject', event.target.value)}
            placeholder="Subject"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900">Message</label>
          <textarea
            value={formData.message}
            onChange={(event) => handleChange('message', event.target.value)}
            placeholder="Your message"
            rows={5}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <button
          type="button"
          onClick={handleSend}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Send Message
        </button>
      </div>
    </div>
  )
}
function RobotSVG() {
  return (
    <svg viewBox="0 0 160 180" className="h-56 w-56" role="img" aria-label="Robot illustration">
      <defs>
        <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect x="34" y="18" width="92" height="72" rx="18" fill="url(#robotGradient)" opacity="0.18" />
      <rect x="46" y="24" width="68" height="52" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="4" />
      <circle cx="65" cy="44" r="8" fill="#3b82f6" />
      <circle cx="95" cy="44" r="8" fill="#3b82f6" />
      <rect x="72" y="58" width="16" height="5" rx="2.5" fill="#0f172a" />
      <path d="M59 72c4 3 14 3 18 0" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <rect x="44" y="86" width="72" height="64" rx="18" fill="#e2e8f0" />
      <rect x="56" y="96" width="48" height="28" rx="10" fill="#ffffff" />
      <rect x="58" y="132" width="16" height="26" rx="8" fill="#94a3b8" />
      <rect x="86" y="132" width="16" height="26" rx="8" fill="#94a3b8" />
      <rect x="22" y="100" width="18" height="12" rx="6" fill="#3b82f6" />
      <rect x="120" y="100" width="18" height="12" rx="6" fill="#10b981" />
      <circle cx="52" cy="30" r="6" fill="#10b981" />
      <circle cx="108" cy="30" r="6" fill="#3b82f6" />
    </svg>
  )
}
