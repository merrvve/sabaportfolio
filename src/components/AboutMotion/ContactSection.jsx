import { motion } from "framer-motion";
import { useState } from "react";

const viewport = { once: true, amount: 0.2 };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport,
});

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={copy}
      className="ml-3 text-[#3d4f8a] hover:text-[#1a2a6c] transition-colors"
      title="Copy"
    >
      {copied ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

const GitHubIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const FigmaIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
  </svg>
);

export const ContactSection = () => {
  return (
    <section className="contact-section relative flex flex-col items-center justify-center min-h-screen px-4 py-20">
      {/* Card */}
      <motion.div
        className="contact-card relative w-full max-w-xl rounded-3xl px-10 py-14 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={viewport}
      >
        {/* Badge */}
        <motion.span
          className="bg-[#1a1a2e] text-white text-sm font-medium px-5 py-2 rounded-full"
          {...fadeUp(0.15)}
        >
          Get in touch
        </motion.span>

        {/* Subtitle */}
        <motion.p
          className="text-center text-[#3d4f8a] text-base leading-relaxed"
          {...fadeUp(0.25)}
        >
          What's next? Feel free to reach out to me
          <br />
          if you're looking for a designer.
        </motion.p>

        {/* Email row */}
        <motion.div
          className="flex items-center gap-3 mt-2"
          {...fadeUp(0.35)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a2a6c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="text-[#1a2a6c] font-bold text-xl md:text-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
            sabanursen1@gmail.com
          </span>
          <CopyButton text="sabanursen1@gmail.com" />
        </motion.div>

        {/* Phone row */}
        <motion.div
          className="flex items-center gap-3"
          {...fadeUp(0.45)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a2a6c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11 19.79 19.79 0 0 1 1.61 2.38 2 2 0 0 1 3.58 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15z" transform="translate(1 1)" />
          </svg>
          <span className="text-[#1a2a6c] font-bold text-xl md:text-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
            +90 506 693 8393
          </span>
          <CopyButton text="+905066938393" />
        </motion.div>

        {/* Platforms */}
        <motion.p
          className="text-[#6b7abd] text-sm mt-4"
          {...fadeUp(0.55)}
        >
          You may also find me on these platforms!
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex items-center gap-7 text-[#3d4f8a]"
          {...fadeUp(0.65)}
        >
          <a href="#" className="hover:text-[#1a2a6c] transition-colors" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="#" className="hover:text-[#1a2a6c] transition-colors" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="#" className="hover:text-[#1a2a6c] transition-colors" aria-label="Figma">
            <FigmaIcon />
          </a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="absolute bottom-6 text-sm text-[#3d4f8a]/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={viewport}
      >
        © 2024 | Designed by Saba Şen and coded by Merve Keskin
      </motion.p>
    </section>
  );
};
