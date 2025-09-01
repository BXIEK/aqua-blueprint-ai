import Hero from "@/components/Hero";
import ModulesSection from "@/components/ModulesSection";
import WorkflowSection from "@/components/WorkflowSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WorkflowSection />
      <ModulesSection />
    </main>
  );
};

export default Index;
