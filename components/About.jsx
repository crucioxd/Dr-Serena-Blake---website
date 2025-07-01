"use client";

import Image from "next/image";
import headshot from "@/public/image.webp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto mt-32 md:mt-60">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="md:hidden w-full max-w-sm mx-auto"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-xl">
            <Image
              src={headshot}
              alt="Dr. Serena Blake"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:mr-8 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-[#7E7E6B]">
            About Dr. Serena Blake
          </h2>

          <div className="space-y-4 text-[#7E7E6B] text-base md:text-[1.05rem] leading-relaxed">
            <p>
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma.
            </p>

            <p>
              My approach blends psychodynamic and humanistic therapy with
              positive psychology, family systems, acceptance and commitment
              concepts, and mindfulness. I specialize in helping individuals
              manage anxiety and stress, heal from trauma, and build healthier
              relationships.
            </p>
          </div>
        </motion.div>

        {/* Headshot - Hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="hidden md:block relative w-full max-w-md"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-xl">
            <Image
              src={headshot}
              alt="Dr. Serena Blake"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
