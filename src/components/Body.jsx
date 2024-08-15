import Authentication from "./Authentication";
import Overview from "./Overview";
import Endpoints from "./Endpoints";
import Tutorial from "./Tutorial";
import CodeExamples from "./CodeExamples";
import APIPricing from "./APIPricing";

export default function Body() {
  return (
    <main className="bg-[#0f172a] py-[1%] md:px-[10%] lg:px-[17%] px-[1%] relative">
      <Overview />
      <Authentication />
      <Endpoints />
      <Tutorial />
      <CodeExamples />
      <APIPricing />
    </main>
  );
}
