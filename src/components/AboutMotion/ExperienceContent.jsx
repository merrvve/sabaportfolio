import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const lineExpand = (delay = 0) => ({
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

const viewport = { once: true, amount: 0.15 };

const experiences = [
  {
    company: "Womo Design",
    location: "Istanbul, Türkiye  •  June 2023 – August 2023",
    role: "Industrial Designer Intern",
    description:
      "Completed a 30-day internship at Womo Design, where I gained hands-on experience in lighting design and production. Worked with concrete and wood, learning techniques like casting, sanding, and varnishing. I also designed and produced my own lighting model, enhancing my skills in both creative and technical aspects of industrial design.",
  },
  {
    company: "Arveg Design",
    location: "Istanbul, Türkiye  •  June 2023 – August 2023",
    role: "Industrial Designer Intern",
    description:
      "During my internship at Arveg Design, I gained valuable experience in 3D modeling, 3D printing, product design, and assembly. I honed my skills in creating detailed models, bringing designs to life through 3D printing, and overseeing the complete assembly process, which deepened my understanding of the product development cycle.",
  },
];

const awards = [
  {
    text: "20th National Student Packaging Design Competition Finalist",
    year: "2024",
  },
  {
    text: "13th Bazaart Exhibition, Polisan 'From Past to Future' Award for the oil painting \"Kedi Düşkünü\" (Cat Passioned)",
    year: "2024",
  },
  {
    text: "Goya Art Gallery 'ANBEAN' Exhibition",
    year: "2023",
  },
  {
    text: "Luna Art Gallery 'Touch The Sky' Exhibition",
    year: "2022",
  },
  {
    text: "Galerie D'art La Visione 'Four Seasons' & 'Passion' Exhibitions",
    year: "2021-2022",
  },
];

export const ExperienceContent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 md:px-24 py-6 w-full">
      {/* Left — Experience */}
      <div className="flex-1 flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="flex gap-4"
            variants={fadeLeft(i * 0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Logo placeholder */}
            <div className="w-14 h-14 bg-gray-200 rounded-md shrink-0 mt-1" />

            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm leading-tight">{exp.company}</span>
              <span className="text-[12px] text-gray-500 leading-tight">{exp.location}</span>
              <span className="text-[12px] text-gray-500 leading-tight mb-2">{exp.role}</span>
              <p className="text-[16px] leading-relaxed max-w-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right — Awards & Exhibitions */}
      <div className="flex-1 flex flex-col gap-0">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            variants={fadeRight(i * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="py-3">
              <p className="text-[16px] text-gray-800 leading-snug">
                {award.text}{" "}
                <span className="font-bold">{award.year}</span>
              </p>
            </div>
            {i < awards.length - 1 && (
              <motion.div
                className="h-px bg-gray-300"
                variants={lineExpand(i * 0.15 + 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
