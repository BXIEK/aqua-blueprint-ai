import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  image: string;
  inputs: string[];
  outputs: string[];
  process: string;
  moduleNumber: number;
}

const ModuleCard = ({ title, description, image, inputs, outputs, process, moduleNumber }: ModuleCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-water-blue text-white font-semibold px-3 py-1">
            Módulo {moduleNumber}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-tech-gray group-hover:text-water-blue transition-colors">
          {title}
        </CardTitle>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Process Description */}
        <div className="bg-water-blue/5 p-4 rounded-lg border-l-4 border-water-blue">
          <h4 className="font-semibold text-water-blue mb-2 flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Processo de IA
          </h4>
          <p className="text-sm text-muted-foreground">{process}</p>
        </div>
        
        {/* Inputs and Outputs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-tech-gray mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-eco-green rounded-full"></div>
              Entradas (Inputs)
            </h4>
            <ul className="space-y-2">
              {inputs.map((input, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-eco-green mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{input}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-tech-gray mb-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-water-blue rounded-full"></div>
              Saídas (Outputs)
            </h4>
            <ul className="space-y-2">
              {outputs.map((output, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-water-blue mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{output}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;