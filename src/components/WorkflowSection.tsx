import { ArrowRight, Database, Cpu, FileText } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      icon: Database,
      title: "Dados Fragmentados",
      description: "População, topografia, hidrografia, sondagens, planos diretores",
      color: "eco-green"
    },
    {
      icon: Cpu,
      title: "Processamento IA",
      description: "Análise geoespacial, otimização de localização, cálculos de vazão",
      color: "water-blue"
    },
    {
      icon: FileText,
      title: "Projeto Integrado",
      description: "Concepção completa com alternativas, custos e especificações técnicas",
      color: "eco-green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
            O Fluxo de Trabalho do SAC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como o sistema transforma seus dados existentes em um projeto de concepção completo
          </p>
        </div>
        
        <div className="relative">
          {/* Workflow Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 ${step.color === 'eco-green' ? 'bg-eco-green' : 'bg-water-blue'}`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-tech-gray mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Connecting Arrows */}
          <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="flex items-center space-x-32">
              <ArrowRight className="w-8 h-8 text-water-blue/40" />
              <ArrowRight className="w-8 h-8 text-water-blue/40" />
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-water text-white px-8 py-4 rounded-2xl shadow-hero">
            <h3 className="text-xl font-semibold mb-2">Resultado Final</h3>
            <p className="text-white/90">Projeto de Concepção Dinâmico e Integrado com análise de alternativas e estimativas de custo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;