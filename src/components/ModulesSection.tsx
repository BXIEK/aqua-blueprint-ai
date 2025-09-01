import ModuleCard from "./ModuleCard";
import populationStudyImage from "@/assets/population-study.jpg";
import waterSupplyImage from "@/assets/water-supply-system.jpg";
import sewageSystemImage from "@/assets/sewage-system.jpg";
import financialAnalysisImage from "@/assets/financial-analysis.jpg";

const ModulesSection = () => {
  const modules = [
    {
      moduleNumber: 1,
      title: "Estudo Populacional e Previsão de Vazão",
      description: "O coração do sistema que define a demanda que todo o projeto precisará atender através de análise demográfica e projeções futuras.",
      image: populationStudyImage,
      inputs: [
        "Dados de população existentes (IBGE, censo municipal)",
        "Dados históricos de consumo de água",
        "Mapas de uso e ocupação do solo",
        "Plano diretor do município"
      ],
      outputs: [
        "Relatório de estudo populacional completo",
        "Mapas interativos de evolução da demanda",
        "Vazões de dimensionamento (média, K1, K2)",
        "Mapa de demanda futuro georreferenciado"
      ],
      process: "O sistema aloca a população atual no mapa criando densidade demográfica, projeta crescimento populacional usando modelos de previsão e calcula vazões de projeto baseadas no consumo per capita e população projetada."
    },
    {
      moduleNumber: 2,
      title: "Sistema de Abastecimento de Água",
      description: "Otimização completa desde captação até distribuição, considerando topografia, qualidade da água e eficiência energética.",
      image: waterSupplyImage,
      inputs: [
        "Mapa de topografia detalhado",
        "Mapa hidrográfico (rios, lagos, represas)",
        "Dados de qualidade da água dos mananciais",
        "Mapas de restrições ambientais (APPs)",
        "Mapa de demanda do Módulo 1"
      ],
      outputs: [
        "Sugestão de 2-3 alternativas para captação",
        "Localização otimizada da ETA",
        "Posicionamento estratégico de reservatórios",
        "Relatório comparativo de custos preliminares"
      ],
      process: "A IA analisa mananciais classificando por vazão, qualidade e distância. Otimiza localização da ETA considerando proximidade, acesso e energia. Identifica pontos altos estratégicos para reservatórios garantindo abastecimento por gravidade."
    },
    {
      moduleNumber: 3,
      title: "Sistema de Esgotamento Sanitário",
      description: "Projeto integrado de coleta, tratamento e disposição final de efluentes respeitando topografia e normas ambientais.",
      image: sewageSystemImage,
      inputs: [
        "Mapa de topografia (crítico para o projeto)",
        "Mapa hidrográfico para lançamento",
        "Dados de sondagem para fundações",
        "Mapa de uso do solo e plano diretor",
        "Mapa de geração de esgoto do Módulo 1"
      ],
      outputs: [
        "Delimitação de bacias de esgotamento",
        "Localização otimizada da ETE e emissário",
        "Posicionamento de elevatórias necessárias",
        "Mapa conceitual do sistema completo"
      ],
      process: "Usa topografia para delimitar bacias de coleta por gravidade. Busca pontos baixos seguros para ETE considerando solo, distância urbana e corpo receptor. Indica elevatórias onde gravidade não é viável."
    },
    {
      moduleNumber: 4,
      title: "Estudo de Viabilidade Econômica e Orçamento",
      description: "Análise financeira completa do projeto incluindo viabilidade econômica, orçamento detalhado e cronograma financeiro para execução das obras.",
      image: financialAnalysisImage,
      inputs: [
        "Dados das alternativas técnicas dos Módulos 1, 2 e 3",
        "Tabelas de preços unitários (SINAPI, SICRO)",
        "Dados de mercado local de materiais e mão de obra",
        "Fontes de financiamento disponíveis",
        "Tarifas praticadas na região"
      ],
      outputs: [
        "Orçamento detalhado por módulo e alternativa",
        "Análise de viabilidade econômica-financeira",
        "Cronograma físico-financeiro da obra",
        "Estudo tarifário e sustentabilidade financeira",
        "Relatório de comparação custo-benefício"
      ],
      process: "A IA calcula custos detalhados usando bases de preços atualizadas, analisa viabilidade através de indicadores como VPL e TIR, simula cenários de financiamento e projeta sustentabilidade tarifária do sistema ao longo de sua vida útil."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
            Os Quatro Módulos do SAC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada módulo trabalha de forma integrada para criar um projeto de concepção completo, técnico e economicamente viável
          </p>
        </div>
        
        <div className="space-y-12">
          {modules.map((module, index) => (
            <div key={index} className="relative">
              <ModuleCard {...module} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;