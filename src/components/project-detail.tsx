"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  CheckCircle,
} from "lucide-react";
import { Github } from "@/components/ui/github";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {project.category}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {project.duration}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Users className="w-4 h-4 mr-1" />
                {project.team}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden border border-gray-800"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>

            {/* Demo Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900 rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-bold mb-6">Project Demo</h2>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} Demo Video`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-700"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/*               <p className="text-gray-400 mt-4 text-sm">
                Watch this demo to see the project in action and understand its
                key features and functionality.
              </p> */}
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-red-400">
                  Desafíos
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-green-400">
                  Soluciones
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-800/30"
            >
              <h3 className="text-2xl font-bold mb-6">
                Resultados clave e impacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <p className="text-gray-300">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4">Tecnologías usadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4">Enlaces del proyecto</h3>
              <div className="space-y-3">
                {project.demoUrl !== "" && (
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Código fuente
                </Button>
                {project.frontendGithubUrl && (
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Frontend Código fuente
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
