"use client";

import React from "react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import DisplayCards from "@/components/ui/display-cards";
import { Card } from "@/components/ui/card";
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  MapPin, 
  Flame, 
  Users, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";

export default function PortfolioDaniel() {
  // Tus certificaciones y aptitudes del CV mapeadas al componente DisplayCards
  const destacableCards = [
    {
      icon: <Award className="size-4 text-orange-400" />,
      title: "Deportista de Alto Rendimiento",
      description: "Reconocido como Deportista de Nivel Internacional, Nacional y con Talento.",[cite: 1]
      date: "Certificación Activa",[cite: 1]
      iconClassName: "text-orange-400",
      className: "[grid-area:stack] hover:-translate-y-12 before:absolute before:w-[100%] before:rounded-xl before:h-[100%] before:content-[''] grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-30",
    },
    {
      icon: <ShieldCheck className="size-4 text-blue-400" />,
      title: "Protección Civil y Cruz Roja",
      description: "Compromiso social activo como voluntario de primera línea en salvamento.",[cite: 1]
      date: "Voluntariado",[cite: 1]
      iconClassName: "text-blue-400",
      className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-2 before:absolute before:w-[100%] before:rounded-xl before:h-[100%] before:content-[''] grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-20",
    },
    {
      icon: <Flame className="size-4 text-purple-400" />,
      title: "Asociación Soul Wheel",
      description: "Socio oficial, especialista técnico y colaborador activo en cultura urbana.",[cite: 1]
      date: "Socio Oficial",[cite: 1]
      iconClassName: "text-purple-400",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 z-10",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-orange-500 selection:text-black overflow-x-hidden">
      
      {/* SECCIÓN 1: HERO (Fondo de Shaders Animado) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <ShaderAnimation />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider animate-pulse">
            <Flame className="size-3.5" /> Disponible para Proyectos
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white uppercase">
            Daniel Durán
          </h1>
          <p className="text-lg sm:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Técnico Superior en Enseñanza y Animación Sociodeportiva & Estudiante de Ciencias de la Actividad Física y del Deporte.[cite: 1]
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:dani.duran.garcia@gmail.com" className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5">
              Contactar[cite: 1]
            </a>
            <a href="https://www.linkedin.com/in/daniel-durán-garcía-61736127a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-zinc-300 font-semibold rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all">
              LinkedIn <ExternalLink className="size-4" />[cite: 1]
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: PERFIL & ENFOQUE (Spline 3D + Spotlight de fondo) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative">
        <Card className="w-full bg-zinc-950/50 border-zinc-800 relative overflow-hidden p-1 md:p-2 rounded-3xl">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#f97316" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[550px]">
            <div className="lg:col-span-7 p-8 relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Pasión por el <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Scooter Freestyle</span> y la Gestión
              </h2>
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                Mi expertise se centra en el diseño e impartición de actividades de <strong className="text-zinc-200">Team Building</strong>, coordinación de eventos urbanos y deportivos masivos, aplicando conocimientos avanzados en psicología del deporte e inclusión.[cite: 1]
              </p>
              <blockquote className="border-l-2 border-orange-500 pl-4 italic text-zinc-400 text-sm md:text-base">
                "Una disciplina que ha forjado en mí la resiliencia, la disciplina y el compromiso necesarios para la alta competición y la gestión de proyectos exigentes."[cite: 1]
              </blockquote>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/50">
                  <Users className="size-5 text-orange-400" />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase">Liderazgo</p>
                    <p className="text-sm font-bold text-zinc-300">+3 años liderando grupos</p>[cite: 1]
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/50">
                  <MapPin className="size-5 text-red-400" />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase">Ubicación</p>
                    <p className="text-sm font-bold text-zinc-300">Madrid, España</p>[cite: 1]
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-[350px] lg:h-full w-full relative min-h-[350px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* SECCIÓN 3: FORMACIÓN ACADÉMICA (Efecto Container Scroll) */}
      <section className="bg-zinc-950/20 border-y border-zinc-900">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-400 sm:text-5xl">
                Formación Integral Avanzada[cite: 1]
              </h2>
              <p className="text-zinc-500 max-w-md mx-auto text-sm sm:text-base">
                Evolución académica enfocada en el alto rendimiento, la salud deportiva y la dirección técnica.[cite: 1]
              </p>
            </div>
          }
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center bg-zinc-900 text-left overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="p-3 bg-orange-500/10 text-orange-400 rounded-xl border border-orange-500/20 mt-1">
                  <GraduationCap className="size-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Ciencias de la Actividad Física y del Deporte (CAFYD)</h3>[cite: 1]
                  <p className="text-sm text-orange-400 font-medium">Universidad Europea • En curso (2025)</p>[cite: 1]
                  <p className="text-xs text-zinc-400 mt-1">Formación universitaria de primer año enfocada en la gestión deportiva y la actividad física.</p>[cite: 1]
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 mt-1">
                  <Layers className="size-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">TSEAS + TECO</h3>[cite: 1]
                  <p className="text-sm text-purple-400 font-medium">MEDAC / IES Pintor Antonio López</p>[cite: 1]
                  <p className="text-xs text-zinc-400 mt-1">Técnico Superior en Enseñanza y Animación Sociodeportiva combinado con Actividades en el Medio Natural.</p>[cite: 1]
                </div>
              </div>
            </div>
            
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-6">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Másteres Profesionales (MEDAC)</h4>[cite: 1]
              <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800">
                <p className="text-sm font-bold text-white">Entrenamiento Personal</p>[cite: 1]
                <p className="text-xs text-zinc-500 mt-0.5">Ciencias del Deporte</p>[cite: 1]
              </div>
              <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800">
                <p className="text-sm font-bold text-white">Nutrición Deportiva y Clínica</p>[cite: 1]
                <p className="text-xs text-zinc-500 mt-0.5">Especialización Avanzada</p>[cite: 1]
              </div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      {/* SECCIÓN 4: RECONOCIMIENTOS (Display Cards Stack) */}
      <section className="py-32 px-4 max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Aptitudes y Distinciones
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Estatus competitivos y colaboraciones institucionales que avalan mi nivel de implicación en el tejido del deporte nacional.[cite: 1]
          </p>
        </div>

        <div className="w-full flex justify-center items-center py-10">
          <DisplayCards cards={destacableCards} />
        </div>
      </section>

      {/* SECCIÓN 5: LOGÍSTICA Y EVENTOS */}
      <section className="py-24 px-4 max-w-5xl mx-auto space-y-12">
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
          <Briefcase className="size-6 text-orange-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Logística de Eventos Urbanos</h2>[cite: 1]
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-900 space-y-3">
            <span className="text-xs text-zinc-500 font-mono font-bold block">ASOCIACIÓN SOUL WHEEL</span>[cite: 1]
            <h3 className="text-lg font-bold text-white">Especialista Técnico Deportivo</h3>[cite: 1]
            <p className="text-sm text-zinc-400">
              Coordinación y control en la <strong className="text-zinc-300">Madrid Friday Night Skate</strong>, exhibiciones masivas y eventos de deportes alternativos en San Sebastián de los Reyes.[cite: 1]
            </p>
          </div>

          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-900 space-y-3">
            <span className="text-xs text-zinc-500 font-mono font-bold block">KAIZEN COACHING & TEAM BUILDING</span>[cite: 1]
            <h3 className="text-lg font-bold text-white">Monitor de Dinámicas Sociodeportivas</h3>[cite: 1]
            <p className="text-sm text-zinc-400">
              Despliegue de actividades de Team Building por múltiples provincias de España (Zaragoza, Toledo, Segovia, Burgos), liderando la animación de grandes corporativos.[cite: 1]
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-12 text-center text-xs text-zinc-600 font-mono">
        <p>© 2026 Daniel Durán García • Integrado de manera premium con shadcn/ui</p>[cite: 1]
      </footer>
    </div>
  );
}
