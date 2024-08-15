import Section from "./Section";

export default function Overview() {
  return (
    <Section id="overview">
      <div className="py-8">
        <h2 id="overview" className="text-[#a5b4fc] font-bold text-2xl">
          Overview
        </h2>
        <p className="md:text-base text-sm text-[#e2e8f0] mt-2">
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
      </div>
    </Section>
  );
}
