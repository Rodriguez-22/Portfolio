"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuáles son tus principales habilidades técnicas?",
      answer:
        "Me especializo en desarrollo full-stack con React, Next.js, TypeScript y Node.js. También tengo experiencia con bases de datos (PostgreSQL, MongoDB), herramientas de DevOps (Docker, Git) y soluciones cloud. Soy experto en crear aplicaciones escalables, performantes y mantenibles.",
    },
    {
      question: "¿Cómo gestionas el trabajo en equipo?",
      answer:
        "Creo firmemente en la comunicación clara y el trabajo colaborativo. Utilizo metodologías Agile/Scrum, participo activamente en daily standups, y mantengo una documentación exhaustiva del código. Valoro el feedback constructivo y estoy siempre abierto a aprender de mis compañeros.",
    },
    {
      question: "¿Dónde puedo encontrar más información sobre ti?",
      answer:
        "Puedes encontrarme en LinkedIn (linkedin.com/in/joserodriguez), GitHub (github.com/joserodriguez) donde comparto mis proyectos, mi blog personal (blog.joserodriguez.com) y por supuesto, esta web. También puedes contactarme directamente a través del formulario de contacto.",
    },
    {
      question: "¿Cuál es tu experiencia con proyectos grandes?",
      answer:
        "He trabajado en varios proyectos de gran escala, incluyendo plataformas de e-commerce con miles de usuarios simultáneos, sistemas de análisis de datos complejos y aplicaciones SaaS. Tengo experiencia optimizando performance, escalabilidad y seguridad en producción.",
    },
    {
      question: "¿Cuáles son tus tecnologías favoritas?",
      answer:
        "Disfruto particularmente trabajando con Next.js por su versatilidad en desarrollo full-stack, React por su ecosistema y flexibilidad, y TypeScript por la seguridad de tipos. También me encanta experimentar con nuevas tecnologías y mantengo me actualizado con las tendencias de la industria.",
    },
    {
      question: "¿Tienes experiencia con diseño UI/UX?",
      answer:
        "Aunque mi especialidad es el desarrollo, tengo conocimientos sólidos de UI/UX principles. Trabajo frecuentemente con diseñadores usando Figma, implemento diseños responsive y accesibles, y siempre enfoco en la experiencia del usuario final.",
    },
    {
      question: "¿Cómo te mantienes actualizado con la tecnología?",
      answer:
        "Participo en comunidades de desarrollo, sigo blogs técnicos, asisto a conferencias cuando es posible, contribuyo en proyectos open-source, y dedico tiempo regularmente a aprender nuevas tecnologías. Creo que la educación continua es fundamental en este campo.",
    },
    {
      question: "¿Trabajas como freelancer o solo en empresas?",
      answer:
        "Actualmente estoy empleado a tiempo completo, pero estoy abierto a proyectos freelance selectos que sean interesantes. Si tienes una propuesta de proyecto que te encantaría que colaborara, no dudes en contactarme.",
    },
    {
      question: "¿Cuál es tu metodología de desarrollo?",
      answer:
        "Sigo principios de clean code, TDD cuando es aplicable, y buenas prácticas de arquitectura de software. Uso control de versiones con Git, hago code reviews rigurosos, escribo tests automáticos, y mantengo la documentación actualizada.",
    },
    {
      question: "¿Cuál es tu tarifa o disponibilidad?",
      answer:
        "Las tarifas varían según el proyecto y su complejidad. Para proyectos empresariales, realizo un análisis personalizado. Te invito a contactarme para discutir los detalles específicos de tu proyecto y encontrar una solución que funcione para ambos.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-primary animate-slide-in-up-bounce">Preguntas Frecuentes</h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Respuestas a las preguntas que más me hacen.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-expand-card"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 hover:shadow-md transition-all duration-300 text-left group"
              >
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-all duration-300 text-primary text-xl group-hover:scale-125 group-hover:text-accent ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/20 animate-slide-in-up-bounce">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
