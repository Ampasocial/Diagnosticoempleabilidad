/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, CheckCircle2, Search, BrainCircuit, Target, Star, Quote } from 'lucide-react';

export default function App() {
  const calendlyLink = "https://calendly.com/estrategiavitalcoaching/sesiondeclaridad";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Identifica por qué <span className="text-brand-blue">no te llaman</span> cuando te inscribes a ofertas
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Cuando entiendes cómo piensa un entrevistador y lo que realmente necesita el mercado laboral, tu forma de buscar trabajo cambia por completo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-green transition-colors duration-300 rounded-lg shadow-lg"
                >
                  Reserva tu diagnóstico estratégico
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Right Image Placeholder */}
            <div className="relative lg:ml-auto w-full max-w-lg">
              <div className="aspect-square rounded-2xl bg-slate-800 overflow-hidden relative shadow-2xl border border-white/10">
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpg`} 
                  alt="Coach y Estratega de Carrera" 
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="bg-brand-green/20 p-3 rounded-full text-brand-green">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-brand-dark">Foco y Claridad</p>
                  <p className="text-sm text-slate-500">Resultados reales</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Highlights below Hero */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
              <p className="font-medium text-slate-200">Descubre qué está bloqueando tus oportunidades laborales</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
              <p className="font-medium text-slate-200">Entiende cómo piensan realmente los entrevistadores</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
              <p className="font-medium text-slate-200">Sal con claridad sobre dónde poner el foco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              ¿Qué conseguirás en este diagnóstico?
            </h2>
            <p className="text-lg text-slate-600">
              Una sesión diseñada para darte respuestas concretas y un plan de acción claro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Benefit 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Descubre qué te bloquea</h3>
              <p className="text-slate-600 leading-relaxed">
                Analizaremos tu situación para identificar los errores o puntos ciegos que pueden estar frenando tus procesos de selección.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Entiende al entrevistador</h3>
              <p className="text-slate-600 leading-relaxed">
                Te explicaré qué están evaluando las empresas y por qué muchos candidatos con talento no consiguen avanzar.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Claridad y foco</h3>
              <p className="text-slate-600 leading-relaxed">
                Terminarás el diagnóstico con una visión clara de qué debes mejorar, ajustar o cambiar para aumentar tus oportunidades.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-dark transition-colors duration-300 rounded-lg shadow-lg hover:shadow-xl"
            >
              Reserva tu diagnóstico estratégico
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-4">
              <p className="text-4xl font-bold text-brand-dark mb-2">+500</p>
              <p className="text-white font-medium">Profesionales asesorados</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-brand-dark mb-2">95%</p>
              <p className="text-white font-medium">Ganan claridad en su primera sesión</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <div className="flex gap-1 text-brand-dark mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="text-white font-medium">Valoración excelente de clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Lo que dicen quienes ya han dado el paso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue/10" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Cliente 1" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-green/20"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">María G.</h4>
                  <p className="text-sm text-slate-500">Directora de Marketing</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "Llevaba meses enviando CVs sin respuesta. En solo una sesión entendí qué estaba comunicando mal. Cambié mi enfoque y a las dos semanas tuve mis primeras entrevistas. La claridad que te da es brutal."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue/10" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Cliente 2" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-green/20"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">Carlos R.</h4>
                  <p className="text-sm text-slate-500">Project Manager</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "Pensaba que el problema era mi edad o mi sector, pero el diagnóstico me hizo ver que mi perfil no estaba alineado con lo que buscan los reclutadores hoy. Salí con un plan de acción súper concreto."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Deja de perder oportunidades por errores que puedes corregir hoy
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Da el primer paso para tomar el control de tu carrera profesional. Reserva tu diagnóstico y descubre tu verdadero potencial en el mercado.
          </p>
          <a 
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-dark bg-brand-green hover:bg-white transition-colors duration-300 rounded-lg shadow-[0_0_20px_rgba(42,132,0,0.4)] hover:shadow-[0_0_30px_rgba(42,132,0,0.6)]"
          >
            Reserva tu diagnóstico estratégico
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
          <p className="mt-6 text-sm text-slate-400">Plazas limitadas cada semana para asegurar atención personalizada.</p>
        </div>
      </section>
    </div>
  );
}
