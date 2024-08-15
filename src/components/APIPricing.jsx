import Section from "./Section";
import { API_PRICING_DATA } from "../../data/data";

export default function APIPricing() {
  return (
    <Section id="pricing">
      <div className="py-8">
        <h2 className="text-[#a5b4fc] font-bold text-2xl">API Pricing</h2>
        <p className="md:text-base text-sm  text-[#e2e8f0] mt-2">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <table className="w-full rounded-lg overflow-hidden mt-2">
          <thead>
            <tr className="bg-[#6366f1] border border-solid border-[#334155] text-white md:text-base text-sm font-mono">
              <th className="p-3 text-start">API</th>
              <th className="p-3  text-start">MODEL</th>
              <th className="p-3  text-start">PRICE PER 1K TOKENS</th>
            </tr>
          </thead>
          <tbody>
            {API_PRICING_DATA.map((el, index) => (
              <tr
                key={index}
                className="border border-solid border-[#334155] md:text-base text-sm"
              >
                <td className="text-white p-3">{el.api}</td>
                <td className="text-white p-3">{el.model}</td>
                <td className="text-white p-3">{el.pricePer1kToken}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 className="text-[#a5b4fc] font-bold text-xl mt-8">
          Token Endpoints
        </h4>
        <p className="md:text-base text-sm  text-[#e2e8f0] mt-2">
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
        <h4 className="text-[#a5b4fc] font-bold text-xl mt-8">Billing</h4>
        <p className="md:text-base text-sm  text-[#e2e8f0] mt-2">
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </div>
    </Section>
  );
}
