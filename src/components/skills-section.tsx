"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Brain,
  Code,
  TrendingUp,
  PieChart,
} from "lucide-react";

const skills = [
  {
    category: "Lenguajes de Programación",
    icon: Code,
    items: ["Python", "R", "SQL", "JavaScript", "TypeScript", "C++", "Java"],
  },
  {
    category: "Herramientas",
    icon: BarChart3,
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
  },
  {
    category: "Visualización",
    icon: PieChart,
    items: ["Power BI", "Matplotlib", "Excel", "Seaborn", "Rechart"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLServer",
      "SQLite",
      "Firestore",
      "Supabase",
    ],
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: ["Regression", "Classification"],
  },
  {
    category: "Análisis Estadístico",
    icon: TrendingUp,
    items: [
      "Distribuciones de probabilidad",
      "Modelos estadísticos",
      "Test de hipótesis",
      "Validación de modelos",
      "Comparación de escenarios",
    ],
  },
];

export function SkillsSection() {
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
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una amplia caja de herramientas para extraer insights de los datos y
            construir soluciones inteligentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
