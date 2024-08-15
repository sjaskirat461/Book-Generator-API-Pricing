import { TUTORIAL_DATA } from "../../data/data";
import Section from "./Section";

export default function Tutorial() {
  return (
    <Section id="tutorial">
      <div className="py-8">
        <h2 className="text-[#a5b4fc] font-bold text-2xl">Tutorial</h2>
        <ul className="mt-8">
          {TUTORIAL_DATA.map((el, index) => (
            <li key={index} className="mt-6">
              <p className="text-[#a5b4fc] text-xl font-bold">
                Step {el.step}: {el.title}
              </p>
              <p className="text-[white] mt-1 text-sm md:text-base">
                {el.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
