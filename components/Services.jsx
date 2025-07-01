// components/AreasOfFocus.jsx
import Image from "next/image";

const areas = [
  {
    src: "/picture1.jpg", // replace with your image
    alt: "Anxiety and Stress Management",
    title: "Anxiety & Stress Management",
    text: `Modern life can be overwhelming. Therapy can help you identify the sources of your anxiety and stress, develop practical coping skills, and build resilience. Together, we’ll work toward finding calm, clarity, and a greater sense of balance in your daily life.`,
  },
  {
    src: "/picture2.jpg",
    alt: "Relationship Counseling",
    title: "Relationship Counseling",
    text: `Healthy relationships are essential to our well-being. Whether you’re facing conflict with a partner, family member, or friend, therapy provides a safe space to improve communication, rebuild trust, and strengthen your emotional connection.`,
  },
  {
    src: "/picture3.jpg",
    alt: "Trauma Recovery",
    title: "Trauma Recovery",
    text: `Recovering from trauma can feel isolating, but you don’t have to navigate it alone. Therapy offers compassionate support to process painful experiences, understand their impact, and move forward with a renewed sense of safety and self-compassion.`,
  },
];

export default function AreasOfFocus() {
  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl text-[#41413F] md:text-4xl font-serif text-center mb-36">
          Areas of Focus
        </h2>

        {/* Grid of focus items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {areas.map((area, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Circular Image */}
              <div className="w-84 h-84 rounded-full overflow-hidden mb-6 relative">
                <Image
                  src={area.src}
                  alt={area.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl text-[#41413F] font-semibold mb-4">
                {area.title}
              </h3>

              {/* Paragraph */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {area.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
