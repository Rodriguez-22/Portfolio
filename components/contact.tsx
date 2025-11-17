"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    asunto: "",
    mensaje: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validar campos
    if (!formData.nombre || !formData.apellidos || !formData.asunto || !formData.mensaje) {
      setError("Por favor completa todos los campos")
      return
    }

    try {
      console.log("Formulario enviado:", formData)
      setSubmitted(true)
      setFormData({ nombre: "", apellidos: "", asunto: "", mensaje: "" })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.")
      console.error(err)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-primary animate-slide-in-up-bounce">Contacto</h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Envíame un mensaje y te responderé lo antes
          posible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="bg-card border border-border rounded-lg p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in-up hover:border-accent/50 hover-glow-effect"
            style={{ animationDelay: "0.1s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2 group">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:scale-105 focus:shadow-lg transition-all duration-300 hover:border-primary/50"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <label htmlFor="apellidos" className="block text-sm font-medium mb-2">
                  Apellidos
                </label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:scale-105 focus:shadow-lg transition-all duration-300 hover:border-primary/50"
                  placeholder="Tus apellidos"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <label htmlFor="asunto" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:scale-105 focus:shadow-lg transition-all duration-300 hover:border-primary/50"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:scale-105 focus:shadow-lg transition-all duration-300 hover:border-primary/50 resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              {error && <p className="text-red-500 text-sm animate-fade-in-up">{error}</p>}
              {submitted && (
                <p className="text-green-500 text-sm animate-slide-in-up-bounce">
                  Mensaje enviado exitosamente. Te contactaré pronto.
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up active:scale-95"
                style={{ animationDelay: "0.6s" }}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto y mapa */}
          <div className="space-y-8">
            {/* Información de contacto */}
            <div className="space-y-6">
              <div
                className="flex gap-4 hover:translate-x-2 transition-all duration-300 animate-fade-in-up cursor-pointer group"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 hover:scale-110 hover:shadow-lg transition-all duration-300 group-hover:bg-accent/30">
                    <Mail className="text-primary group-hover:text-accent transition-colors" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">Email</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    jose.rodriguez@ejemplo.com
                  </p>
                </div>
              </div>

              <div
                className="flex gap-4 hover:translate-x-2 transition-all duration-300 animate-fade-in-up cursor-pointer group"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 hover:scale-110 hover:shadow-lg transition-all duration-300 group-hover:bg-accent/30">
                    <Phone className="text-primary group-hover:text-accent transition-colors" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">Teléfono</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">+34 600 123 456</p>
                </div>
              </div>

              <div
                className="flex gap-4 hover:translate-x-2 transition-all duration-300 animate-fade-in-up cursor-pointer group"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 hover:scale-110 hover:shadow-lg transition-all duration-300 group-hover:bg-accent/30">
                    <MapPin className="text-primary group-hover:text-accent transition-colors" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">Ubicación</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Madrid, España</p>
                </div>
              </div>
            </div>

            <div
              className="bg-card border border-border rounded-lg overflow-hidden h-80 hover:shadow-2xl transition-all duration-300 animate-fade-in-up hover:border-accent/50 hover-glow-effect"
              style={{ animationDelay: "0.5s" }}
            >
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-3.8,40.3,-3.6,40.5&layer=mapnik"
                style={{ border: 0 }}
                title="Ubicación en Madrid"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
