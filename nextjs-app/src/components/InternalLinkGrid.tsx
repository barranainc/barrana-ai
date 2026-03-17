"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerChildren, cardEntranceVariants } from "@/lib/animations";

interface InternalLink {
  href: string;
  title: string;
  description: string;
}

interface InternalLinkGridProps {
  links: InternalLink[];
  heading?: string;
}

export default function InternalLinkGrid({
  links,
  heading = "Related Content",
}: InternalLinkGridProps) {
  return (
    <section className="py-16 bg-[#F7F9FC] border-t border-[#E8ECF1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-[#1F2937] mb-8">{heading}</h2>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {links.map((link) => (
            <motion.div key={link.href} variants={cardEntranceVariants}>
              <Link
                href={link.href}
                className="group flex flex-col justify-between h-full bg-white rounded-xl border border-[#E8ECF1] p-6 hover:border-[#00B4D8] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <p className="font-semibold text-[#1F2937] group-hover:text-[#1A5276] transition-colors">
                    {link.title}
                  </p>
                  <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00B4D8]">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
