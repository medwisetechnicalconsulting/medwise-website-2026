'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What does Medwise Technical Consulting do?',
    answer:
      'Medwise provides independent pre-purchase technical advisory, medical equipment sourcing, mechanical and electrical installation, clinical staff training, precision metrological calibration, and ongoing biomedical preventive maintenance for healthcare facilities across Kenya.',
  },
  {
    question: 'Why choose an independent medical equipment consultant in Kenya?',
    answer:
      'Single-brand distributors are incentivized to push models from their own inventory with high sales quotas. Medwise operates as your independent technical advocate: we evaluate clinical throughput, facility power stability, and budget without brand bias, ensuring you invest in reliable machinery without hidden ownership traps.',
  },
  {
    question: 'Do you repair laboratory analyzers like the Zybio Z3 and Mindray BC series?',
    answer:
      'Yes, our qualified biomedical engineers perform motor PCB drive board diagnosis, microfluidic maintenance, optical calibration, and Quality Control (QC) verification on Zybio Z3, Mindray BC-10/BC-5000, Dymind, and other clinical laboratory instruments.',
  },
  {
    question: 'Do you provide certified metrology calibration reports?',
    answer:
      'Yes. Every calibration service is performed using certified simulator standards and comes with a traceable metrological certificate detailing test parameters, tolerances, and calibration status suitable for KMPDC, KNRA, and ISO hospital accreditation audits.',
  },
  {
    question: 'How quickly can your engineers dispatch to our facility?',
    answer:
      'For scheduled inspections, calibration, and sourcing consults, we coordinate site visits across Kenya within 24–48 hours. For critical equipment breakdowns affecting clinical operations, our field engineers dispatch rapidly from our Kisumu HQ and Nairobi Field Hub with a 4-hour average response target.',
  },
  {
    question: 'Can you supply laboratory consumables and reagents as well?',
    answer:
      'Yes. We supply over 38+ verified clinical consumables and reagents including blood collection vacutainers, staining kits, rapid diagnostic test kits, and analyzer consumables with guaranteed cold-chain integrity and nationwide delivery.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 sm:py-24 px-4 sm:px-8 md:px-[72px]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-[hsl(var(--primary))] block mb-3">
            FAQ
          </span>
          <h2 className="font-extrabold text-[clamp(2rem,3.2vw,2.8rem)] tracking-[-0.025em] text-[hsl(var(--foreground))]">
            Straight answers for healthcare managers.
          </h2>
        </div>

        {/* 6 Accordion Items */}
        <div className="divide-y divide-[hsl(var(--border))] border-t border-[hsl(var(--border))]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center text-left gap-4 cursor-pointer group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[hsl(var(--primary))] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
