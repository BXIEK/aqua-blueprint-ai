import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Map, Zap } from "lucide-react";
import heroImage from "@/assets/hero-water-system.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sistema de Abastecimento de Água" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-water-blue-dark/90 via-water-blue/80 to-eco-green/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Droplets className="w-6 h-6 text-white" />
            <span className="text-white font-medium">Sistema de Apoio à Concepção</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          SAC: Inteligência para
          <span className="block bg-gradient-to-r from-white to-eco-green-light bg-clip-text text-transparent">
            Projetos Hídricos
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transforme dados fragmentados em projetos de concepção completos para 
          abastecimento de água e esgotamento sanitário com análise econômica integrada através de inteligência artificial avançada.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button size="lg" className="group bg-white text-water-blue hover:bg-white/90 shadow-hero text-lg px-8 py-4">
            Explorar o Sistema
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
            Ver Demonstração
          </Button>
        </div>
        
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Análise Geoespacial</h3>
            <p className="text-white/80">Processamento inteligente de dados topográficos e hidrográficos</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">IA Otimizada</h3>
            <p className="text-white/80">Algoritmos avançados para localização otimizada de infraestruturas</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Projeto Integrado</h3>
            <p className="text-white/80">Solução completa desde captação até tratamento de efluentes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;