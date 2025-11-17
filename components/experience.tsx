"use client"

export default function Experience() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito, pagos y panel de administración.",
      technologies: ["Next.js", "React", "Stripe", "PostgreSQL"],
      image: "Project 1",
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "Project 2",
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard de análisis con gráficos interactivos y reportes personalizables.",
      technologies: ["Next.js", "Chart.js", "TypeScript"],
      image: "Project 3",
    },
    {
      title: "Social Network",
      description: "Red social con posts, comentarios, mensajería directa y notificaciones.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "Project 4",
    },
    {
      title: "Weather App",
      description: "Aplicación meteorológica con predicciones, mapas interactivos y alertas.",
      technologies: ["React Native", "API Weather"],
      image: "Project 5",
    },
    {
      title: "Blog Platform",
      description: "Plataforma de blogs con editor de contenido, comentarios y SEO optimizado.",
      technologies: ["Next.js", "Markdown", "Vercel"],
      image: "Project 6",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate-slide-in-up-bounce">
          Experiencias y Proyectos
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up max-w-2xl" style={{ animationDelay: "0.1s" }}>
          Aquí puedes ver algunos de mis proyectos más destacados donde he aplicado mis habilidades y tecnologías.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 hover:border-accent/50 transition-all duration-300 animate-expand-card group"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <div className="h-40 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-lg group-hover:shadow-2xl group-hover:brightness-125 transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/15 transition-all duration-300"></div>
                <div className="absolute inset-0 group-hover:animate-moving-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded hover:bg-accent/20 hover:text-accent hover:scale-110 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
