import Section from "./Section";
import { PythonCode } from "../../data/data";
import { JavaScriptCode } from "../../data/data";
import { useState } from "react";

export default function CodeExamples() {
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
    <Section id="codeExamples">
      <div className="py-8">
        <h2 className="text-[#a5b4fc] font-bold text-2xl">Code Examples</h2>
        <div className="flex flex-row justify-between items-center mt-8">
          <h4 className="text-[#a5b4fc] font-bold text-xl">Python</h4>
          <button
            onClick={() => handleCopy(PythonCode)}
            className="text-black text-sm px-3 py-1 bg-[#22d3ee] rounded-md font-semibold"
          >
            {copied ? "Copied !" : "Copy"}
          </button>
        </div>
        <p className="w-full p-4 text-[#e2e8f0] border border-solid border-[#334155] rounded-md mt-2 md:text-base text-[0.7rem]">
          <pre>
            <code>{PythonCode}</code>
          </pre>
        </p>
        <div className="flex flex-row justify-between items-center mt-8">
          <h4 className="text-[#a5b4fc] font-bold text-xl">
            JavaScript (Node.js)
          </h4>
          <button
            onClick={() => handleCopy(JavaScriptCode)}
            className="text-black text-sm px-3 py-1 bg-[#22d3ee] rounded-md font-semibold"
          >
            {copied ? "Copied !" : "Copy"}
          </button>
        </div>
        <p className="w-full p-4 text-[#e2e8f0] border border-solid border-[#334155] rounded-md mt-2 md:text-base text-[0.7rem]">
          <pre>
            <code>{JavaScriptCode}</code>
          </pre>
        </p>
      </div>
    </Section>
  );
}
