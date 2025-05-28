"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Calendar, ExternalLink, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Certificate } from "@/types/certificate";

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {certificate.title}
                  </h2>
                  <p className="text-blue-400">{certificate.issuer}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                {/* Certificate Image */}
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <img
                      src={certificate.image || "/placeholder.svg"}
                      alt={`${certificate.title} Certificate`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Detalles del Certificado
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-3 text-blue-400" />
                        <span className="text-sm">
                          <strong>Fecha de entrega:</strong> {certificate.date}
                        </span>
                      </div>
                      {certificate.credentialId && (
                        <div className="flex items-center text-gray-300">
                          <Shield className="w-4 h-4 mr-3 text-green-400" />
                          <span className="text-sm">
                            <strong>ID de certificado:</strong>{" "}
                            {certificate.credentialId}
                          </span>
                        </div>
                      )}
                      {certificate.validUntil && (
                        <div className="flex items-center text-gray-300">
                          <Clock className="w-4 h-4 mr-3 text-purple-400" />
                          <span className="text-sm">
                            <strong>Valido hasta:</strong>{" "}
                            {certificate.validUntil}
                          </span>
                        </div>
                      )}
                    </div>

                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </Button>
                  </div>
                </div>

                {/* Description and Skills */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Sobre este Certificado
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Habilidades demostradas
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {certificate.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                          <span className="text-gray-300 text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Stats */}
                  <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-800/30">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Estadísticas del Logro
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">
                          {certificate.skills.length}
                        </div>
                        <div className="text-gray-400 text-sm">
                          Habilidades adquiridas
                        </div>
                      </div>
                      {certificate.validUntil && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-1">
                            {certificate.validUntil === "Lifetime" ? "∞" : "3"}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {certificate.validUntil === "Lifetime"
                              ? "Valido de por vida"
                              : "años de validez"}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
