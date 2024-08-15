import Section from "./Section";
import { TABLE_DATA } from "../../data/data";
import { Response } from "../../data/data";
import { useState } from "react";

export default function Endpoints() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (data) => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <Section id="endpoints">
      <div className="py-8">
        <h2  className="text-[#a5b4fc] font-bold text-2xl">
          Endpoints
        </h2>
        <h4 className="text-[#a5b4fc] font-bold text-xl mt-6">Generate Book</h4>
        <div className="flex flex-row flex-wrap gap-4 items-center mt-2">
          <button className="bg-[#22d3ee] text-[#0f172a] text-base font-bold px-3 rounded-md h-fit">
            POST
          </button>
          <button className="bg-[#6366f1] text-[#e2e8f0] text-lg font-semibold px-6 py-2 rounded-md">
            /api/generate-book
          </button>
        </div>
        <h4 className="text-[#a5b4fc] font-bold text-xl mt-8">Request Body</h4>
        <table className="w-full rounded-lg overflow-hidden mt-2">
          <thead>
            <tr className="bg-[#6366f1] border border-solid border-[#334155] text-white md:text-base text-sm font-mono">
              <th className="p-3 text-start">PARAMETER</th>
              <th className="p-3  text-start">TYPE</th>
              <th className="p-3  text-start">DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((el, index) => (
              <tr
                key={index}
                className="border border-solid border-[#334155] md:text-base text-sm"
              >
                <td className="font-bold text-[#22d3ee] p-3">{el.parameter}</td>
                <td className="text-white p-3">{el.type}</td>
                <td className="text-white p-3">{el.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row justify-between items-center mt-8">
          <h4 className="text-[#a5b4fc] font-bold text-xl">Response</h4>
          <button
            onClick={() => handleCopy(Response)}
            className="text-black text-sm px-3 py-1 bg-[#22d3ee] rounded-md font-semibold"
          >
            {copied ? "Copied !" : "Copy"}
          </button>
        </div>
        <p className="w-full p-4 text-[#e2e8f0] border border-solid border-[#334155] rounded-md mt-2 md:text-base text-[0.7rem]">
          <pre>
            <code>{Response}</code>
          </pre>
        </p>
      </div>
    </Section>
  );
}
