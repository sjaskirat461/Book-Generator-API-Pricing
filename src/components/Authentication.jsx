import Section from "./Section";
import { useState } from "react";

export default function Authentication() {
  const [api, setApi] = useState("");

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

  function generateRandomString(length = 32) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  function handleApiGenerate() {
    setApi(generateRandomString());
  }

  return (
    <Section id="authentication">
      <div className="py-8">
        <h2 className="text-[#a5b4fc] font-bold text-2xl">Authentication</h2>
        <p className="md:text-base text-sm  text-[#e2e8f0] mt-2">
          To use the API, you need to include your API key in the header of each
          request:
        </p>
        <div className="border-[#334155] border border-solid rounded-md p-2">
          <p className="border-[#334155] border border-solid rounded-md text-sm text-[#e2e8f0] p-3 w-fit">
            X-API-Key: YOUR_API_KEY
          </p>
        </div>
        <p className="md:text-base text-sm text-[#e2e8f0] mt-4">
          To generate an API key, use the button below:
        </p>
        <button
          onClick={handleApiGenerate}
          className="text-[#0f172a] bg-[#22d3ee] font-bold text-base px-8 py-3 rounded-md mt-4 hover:bg-[#3984cf] hover:-translate-y-1 transition-transform duration-300"
        >
          Generate API Key
        </button>
        <div className="border-[#334155] border border-solid rounded-md p-3 mt-4 text-[#e2e8f0] md:text-base text-sm flex flex-row flex-wrap min-h-12">
          {api !== "" && <p className="w-fit">Your API Key : &nbsp;&nbsp;</p>}
          <p className="font-semibold">{api}</p>
          {api !== "" && (
            <button
              onClick={() => handleCopy(api)}
              className="text-black text-sm px-3 py-1 bg-[#22d3ee] rounded-md font-semibold flex items-center justify-center ml-auto"
            >
              {copied ? "Copied !" : "Copy"}
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
