"use client"

export default function Hero() {
  const handleViewProjects = () => {
    const experienceSection = document.getElementById("experience")
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 text-primary animate-slide-in-up-bounce"
              style={{ animationDelay: "0s" }}
            >
              JOSÉ <span className="text-accent">RODRÍGUEZ</span>
            </h1>
            <p className="text-lg text-accent font-semibold mb-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Full Stack Developer
            </p>
            <p
              className="text-muted-foreground leading-relaxed mb-6 animate-fade-in-up max-w-lg"
              style={{ animationDelay: "0.2s" }}
            >
              Soy un desarrollador apasionado por crear soluciones web innovadoras. Me especializo en tecnologías
              modernas y en construir aplicaciones escalables que resuelven problemas reales.
            </p>
            <button
              onClick={handleViewProjects}
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Ver Proyectos
            </button>
          </div>

          <div className="flex justify-center perspective">
            <div
              className="w-80 h-80 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center text-6xl font-bold text-primary-foreground animate-float hover:animate-shadow-shift transition-all duration-300 cursor-pointer group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-white/5 rounded-3xl group-hover:bg-white/10 transition-all duration-300"></div>
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">Photo</span>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div
            className="bg-card border border-border rounded-lg p-6 hover:shadow-2xl hover:scale-105 hover:border-accent/50 transition-all duration-300 animate-fade-in-up hover-glow-effect"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="font-bold text-lg mb-2 text-primary">Información Personal</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Nombre:</strong> José Rodríguez
              </p>
              <p>
                <strong>Email:</strong> jose.rodriguez@ejemplo.com
              </p>
              <p>
                <strong>Ubicación:</strong> Madrid, España
              </p>
              <p>
                <strong>Teléfono:</strong> +34 600 123 456
              </p>
            </div>
          </div>

          <div
            className="bg-card border border-border rounded-lg p-6 hover:shadow-2xl hover:scale-105 hover:border-accent/50 transition-all duration-300 animate-fade-in-up hover-glow-effect"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="font-bold text-lg mb-4 text-primary">Habilidades Técnicas</h3>
            <div className="space-y-2 text-sm">
              {["JavaScript / TypeScript", "React / Next.js", "Tailwind CSS", "Node.js / Express"].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300 group cursor-default"
                >
                  <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 group-hover:shadow-lg transition-all duration-300"></span>
                  <span className="group-hover:text-accent transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-card border border-border rounded-lg p-6 hover:shadow-2xl hover:scale-105 hover:border-accent/50 transition-all duration-300 animate-fade-in-up hover-glow-effect"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="font-bold text-lg mb-4 text-primary">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Node.js", "Docker", "Git"].map(
                (tech, i) => (
                  <span
                    key={tech}
                    className="bg-primary/15 text-primary text-xs px-3 py-1 rounded-full font-medium hover:bg-accent/25 hover:text-accent hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${0.05 * i}s` }}
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Education and Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-card border border-border rounded-lg p-6 hover:shadow-2xl hover:scale-105 hover:border-accent/50 transition-all duration-300 animate-fade-in-up hover-glow-effect"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="font-bold text-lg mb-4 text-primary">Formación</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4 hover:pl-6 hover:border-accent/70 transition-all duration-300">
                <p className="font-semibold hover:text-accent transition-colors">Grado en Ingeniería Informática</p>
                <p className="text-sm text-muted-foreground">Universidad Autónoma de Madrid</p>
                <p className="text-sm text-muted-foreground">2018 - 2022</p>
              </div>
              <div className="border-l-4 border-secondary pl-4 hover:pl-6 hover:border-secondary/70 transition-all duration-300">
                <p className="font-semibold hover:text-accent transition-colors">Bootcamp Full Stack</p>
                <p className="text-sm text-muted-foreground">Coding Bootcamp Spain</p>
                <p className="text-sm text-muted-foreground">2022 - 2023</p>
              </div>
            </div>
          </div>

          <div
            className="bg-card border border-border rounded-lg p-6 hover:shadow-2xl hover:scale-105 hover:border-accent/50 transition-all duration-300 animate-fade-in-up hover-glow-effect"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="font-bold text-lg mb-4 text-primary">Experiencia Profesional</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4 hover:pl-6 hover:border-accent/70 transition-all duration-300">
                <p className="font-semibold hover:text-accent transition-colors">Senior Developer</p>
                <p className="text-sm text-muted-foreground">Tech Company Inc.</p>
                <p className="text-sm text-muted-foreground">2023 - Presente</p>
              </div>
              <div className="border-l-4 border-accent pl-4 hover:pl-6 hover:border-accent/70 transition-all duration-300">
                <p className="font-semibold hover:text-accent transition-colors">Junior Developer</p>
                <p className="text-sm text-muted-foreground">StartUp XYZ</p>
                <p className="text-sm text-muted-foreground">2022 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
