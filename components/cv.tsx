"use client"

import { Download, FileText, Award, Briefcase, Code } from "lucide-react"

export default function CV() {
  const handleDownloadCV = () => {
    // Para usar un PDF real, reemplaza esta función con una ruta a tu archivo CV
    const link = document.createElement("a")
    link.href = "/CV_Jose_Rodriguez.pdf" // Reemplaza con tu archivo CV
    link.download = "CV_Jose_Rodriguez.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const cvSections = [
    {
      icon: Award,
      title: "Formación Académica",
      items: [
        { name: "Ingeniería en Informática", institution: "Universidad Nacional Autónoma", year: "2020 - 2024" },
        { name: "Diplomado en Desarrollo Web Full Stack", institution: "Plataforma Online", year: "2022" },
      ],
    },
    {
      icon: Briefcase,
      title: "Experiencia Profesional",
      items: [
        {
          name: "Desarrollador Full Stack Senior",
          institution: "Tech Solutions Inc.",
          year: "2023 - Presente",
          description: "Desarrollo de aplicaciones web con React y Node.js, gestión de equipos pequeñas",
        },
        {
          name: "Desarrollador Frontend",
          institution: "Digital Agency Pro",
          year: "2021 - 2023",
          description: "Creación de interfaces modernas con React y Tailwind CSS",
        },
      ],
    },
    {
      icon: Code,
      title: "Habilidades Técnicas",
      items: [
        { name: "Frontend", description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion" },
        { name: "Backend", description: "Node.js, Express, PostgreSQL, MongoDB, API REST" },
        { name: "DevOps", description: "Docker, Git, GitHub Actions, Vercel, AWS Basics" },
        { name: "Idiomas", description: "Español (Nativo), Inglés (Avanzado), Portugués (Intermedio)" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Mi CV</h1>
            <p className="text-lg text-muted-foreground">Descarga mi currículum vitae completo en PDF</p>
          </div>
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            <Download size={20} />
            Descargar CV
          </button>
        </div>

        <div className="space-y-12">
          {cvSections.map((section, idx) => {
            const Icon = section.icon
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-l-2 border-primary/30 pl-6 pb-6 last:pb-0">
                      <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-primary font-medium">{item.institution || item.year}</p>
                      {item.year && !item.institution && (
                        <p className="text-sm text-muted-foreground mt-1">{item.year}</p>
                      )}
                      {item.description && <p className="text-muted-foreground mt-2">{item.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
          <div className="flex gap-4">
            <FileText className="text-primary flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-foreground mb-2">¿Necesitas más información?</h3>
              <p className="text-muted-foreground">
                Descarga mi CV completo en PDF para obtener todos los detalles de mi experiencia, proyectos y
                certificaciones. Si tienes alguna pregunta, no dudes en contactarme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
