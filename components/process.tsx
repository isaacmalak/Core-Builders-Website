"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProcessProps {
  language: "en" | "ar";
}

export function Process({ language }: ProcessProps) {
  const isArabic = language === "ar";
  const stepsRef = useRef<HTMLDivElement[]>([]);

  const steps = isArabic
    ? [
        {
          title: "الاكتشاف",
          description: "نبدأ بفهم أهدافك وجمهورك ومنافسيك.",
        },
        {
          title: "الاستراتيجية",
          description: "نقوم بتطوير خطة عمل شاملة مصممة خصيصًا لاحتياجاتك.",
        },
        {
          title: "التنفيذ",
          description:
            "يقوم خبراؤنا ببناء الحل الخاص بك باستخدام أحدث التقنيات.",
        },
        {
          title: "النمو",
          description: "نحن نساعدك على التوسع والتحسين المستمر لنتائجك.",
        },
      ]
    : [
        {
          title: "Discovery",
          description:
            "We start by understanding your goals, audience, and competition.",
        },
        {
          title: "Strategy",
          description:
            "We develop a comprehensive roadmap tailored to your specific needs.",
        },
        {
          title: "Execution",
          description:
            "Our experts build your solution using cutting-edge technology.",
        },
        {
          title: "Growth",
          description:
            "We help you scale and continuously optimize your results.",
        },
      ];

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: isArabic ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [isArabic]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-5xl md:text-7xl font-black mb-8 tracking-tighter ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic ? "كيف نعمل" : "OUR PROCESS"}
            </h2>
            <p
              className={`text-xl text-muted-foreground max-w-md ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              {isArabic
                ? "منهجية مثبتة لتقديم نتائج استثنائية في كل مرة."
                : "A proven methodology for delivering exceptional results every single time."}
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el;
                }}
                className="flex gap-8 items-start group"
              >
                <div className="text-4xl font-black text-muted-foreground/20 group-hover:text-foreground transition-colors">
                  0{index + 1}
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isArabic ? "font-arabic" : ""
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-muted-foreground ${
                      isArabic ? "font-arabic" : ""
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
