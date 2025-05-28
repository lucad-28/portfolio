"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Github } from "@/components/ui/github";
import { Linkedin } from "@/components/ui/linkedin";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const profile = {
  github: "https://github.com/lucad-28",
  linkedin: "https://www.linkedin.com/in/aldair-rivera-3b83731a6/",
};

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white"
          >
            AR
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Aldair Rivera Llancari
            </span>
          </h1>

          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <h2 className="text-2xl md:text-3xl text-gray-300">
                Estudiante de Ingeniería de Sistemas
              </h2>
              <span className="text-blue-400 text-xl font-light md:text-2xl">
                |
              </span>
              <h2 className="text-xl font-extralight md:text-2xl text-gray-300">
                7° Ciclo
              </h2>
            </div>
            <h3 className="text-lg md:text-xl text-gray-300 font-light">
              Universidad Nacional Mayor de San Marcos
            </h3>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Apasionado por la ciencia/analisis de datos y su transformación en
            en insights valiosos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <Mail className="w-5 h-5 text-blue-400" />
            <span>rivera.llaldair@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <Phone className="w-5 h-5 text-blue-400" />
            <span>(+51) 900 665 570</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Perú, Lima</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
          >
            <Link
              href={profile.github}
              target="_blank"
              className="flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            <Link
              href={profile.linkedin}
              target="_blank"
              className="flex items-center"
            >
              <Linkedin className="w-2 h-2 mr-2" />
              LinkedIn
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
