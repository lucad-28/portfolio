"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Award, Calendar, BookOpen } from "lucide-react";
import { CertificateModal } from "@/components/certificate-modal";
import { Certificate } from "@/types/certificate";
import { CERTIFICATES } from "@/types/mockup";

export function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certificados
            </span>{" "}
            Académicos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Certificados obtenidos en cursos y programas de formación
            profesional en analisis/ciencia de datos, gestión de proyectos y
            cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                    {certificate.title}
                  </h3>
                  <p className="text-blue-400 text-sm">{certificate.issuer}</p>
                </div>
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{certificate.date}</span>
              </div>

              <div className="mb-4">
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  className="w-full h-28 md:h-32 object-cover rounded-2xl"
                />
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {certificate.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {certificate.skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                    +{certificate.skills.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex items-center text-blue-400 text-sm font-medium">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>Ver Certificado</span>
              </div>
            </motion.div>
          ))}
        </div>

        <CertificateModal
          certificate={selectedCertificate}
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      </div>
    </section>
  );
}
