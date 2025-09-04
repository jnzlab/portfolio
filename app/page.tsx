"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Code,
  ExternalLink,
  Globe,
  Award,
  Calendar,
  Building,
  GraduationCap,
  User,
  Briefcase,
  FolderOpen,
  Trophy,
  GitBranch,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const skills = {
    "Languages & Frameworks": ["TypeScript", "Next.js (App Router)", "Node.js", "SQL (PostgreSQL)"],
    Frontend: ["Tailwind CSS", "Radix UI", "ShadCN", "Recharts", "React Hook Form"],
    Backend: ["Drizzle ORM", "Server Actions (Next.js)", "Clerk Auth", "REST APIs"],
    DevOps: ["Git", "Vercel (CI/CD)", "Environment config"],
    Tools: ["Notion (docs)", "Figma (UI handoff)", "LLM APIs (AI integration)"],
  }

  const experience = [
    {
      title: "Full-Stack Web Developer",
      company: "GIFT University",
      location: "Gujranwala, Punjab",
      period: "May 2024 - Mar 2025",
      website: "https://gift.edu.pk/",
      achievements: [
        "Developed AI-powered dermatology platform for skin diagnostics using Next.js, FastAPI, and Cloudinary.",
        "Integrated ML and image analysis to enable symptom checking and personalized expert recommendations.",
        "Implemented secure authentication, media handling, and responsive UI with Clerk, Neon DB, and ShadCN.",
      ],
      demoLink: "https://youtu.be/UrXWt5hY0UE",
    },
    {
      title: "Remote Full-Stack Web Developer",
      company: "Innovorus",
      location: "Sialkot, Punjab",
      period: "Apr 2025 - July 2025",
      website: "https://www.innovorus.com/",
      achievements: [
        "Built a full-featured School Management System using Next.js 15, TypeScript, and Drizzle ORM.",
        "Collaborated with Innovorus engineers to design scalable dashboards and role-based access.",
        "Integrated Clerk, Neon DB, and Cloudinary to streamline school operations and media handling.",
      ],
      demoLink: "https://sms-ashy.vercel.app/",
    },
  ]

  const projects = [
    {
      title: "Wellness Tracking App",
      description:
        "Built a full-stack wellness tracker with Next.js 15, TypeScript, and PostgreSQL to log and visualize hydration, sleep, mood, and workouts. Integrated Clerk Auth, Drizzle ORM, and Recharts for secure, real-time tracking. Achieved Lighthouse scores: SEO 100, Accessibility 96.",
      link: "https://wellness-tracking-app.vercel.app/",
      status: "Live",
    },
    {
      title: "Resume Checker",
      description:
        "Built a multi-tenant SaaS Resume Checker for automated CV screening and job management using Next.js, Drizzle ORM, and PostgreSQL RLS. Enabled AI-based resume analysis, job posting, and subscription tracking with strict data isolation across organizations.",
      link: "#",
      status: "In Development",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg">Jameel.dev</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-6">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/jnzlab" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24 lg:py-32 px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Jameel Ahmad
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">Full Stack Web Developer</p>
            <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground px-4">
              2+ years of SaaS experience building modern web applications with Next.js, TypeScript, and cutting-edge
              technologies
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Button asChild className="w-full sm:w-auto">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="https://github.com/jnzlab" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8" id="about">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center space-x-2 mb-8">
            <User className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Web Developer with over 2 years of experience in building SaaS applications.
                I specialize in modern web technologies including Next.js, TypeScript, and PostgreSQL, with a strong
                focus on creating scalable and user-friendly applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor's in Computer Science at GIFT University, I've had the opportunity to
                work on diverse projects ranging from AI-powered healthcare platforms to comprehensive school management
                systems.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold">Bachelor of Computer Science</h3>
                  <p className="text-sm text-muted-foreground">GIFT University</p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    2021 - 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center space-x-2 mb-8">
            <Code className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tighter">Skills & Technologies</h2>
          </div>
          <div className="grid gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8" id="experience">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center space-x-2 mb-8">
            <Briefcase className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tighter">Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader className="pb-4">
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-lg sm:text-xl">{job.title}</CardTitle>
                      <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 space-y-1 sm:space-y-0">
                        <Link href={job.website} target="_blank" className="flex items-center hover:underline">
                          <Building className="mr-1 h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{job.company}</span>
                        </Link>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3 flex-shrink-0" />
                          {job.location}
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="mr-1 h-3 w-3" />
                        {job.period}
                      </Badge>
                      {job.demoLink && (
                        <Button variant="outline" size="sm" asChild className="w-fit bg-transparent">
                          <Link href={job.demoLink} target="_blank">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/50" id="projects">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center space-x-2 mb-8">
            <FolderOpen className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  {project.link !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.link} target="_blank">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        View Project
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center space-x-2 mb-8">
            <Trophy className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tighter">Achievements & Contributions</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>CERTs Challenge 2022</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Led university team to 1st place at district level and 6th internationally out of 59 teams in
                  emergency response and mass casualty management challenge.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GitBranch className="h-5 w-5" />
                  <span>Open Source Contributions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Contributed to open source projects including:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Clerk</Badge>
                    <Badge variant="outline">Neon</Badge>
                    <Badge variant="outline">Appwrite</Badge>
                    <Badge variant="outline">IOPaint</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center space-x-2 mb-8">
            <Mail className="h-6 w-6" />
            <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm sm:text-base">
                I'm currently seeking a full-time Junior Full Stack Developer role. Let's connect and discuss how I can
                contribute to your team!
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <Link
                    href="mailto:jameelahmad221b@gmail.com"
                    className="hover:underline break-all text-sm sm:text-base"
                  >
                    jameelahmad221b@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base">+92(349)7660082</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base">Gujranwala, Punjab</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Github className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <Link
                    href="https://github.com/jnzlab"
                    target="_blank"
                    className="hover:underline break-all text-sm sm:text-base"
                  >
                    github.com/jnzlab
                  </Link>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <Link
                    href="https://jameelahmad.vercel.app/"
                    target="_blank"
                    className="hover:underline break-all text-sm sm:text-base"
                  >
                    jameelahmad.vercel.app
                  </Link>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Contact</CardTitle>
                <CardDescription className="text-sm">Send me a message directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="mailto:jameelahmad221b@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="https://github.com/jnzlab" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js, TypeScript, and Tailwind CSS. © 2025 Jameel Ahmad.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/jnzlab" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="mailto:jameelahmad221b@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
