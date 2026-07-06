"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const offset = directionOffset[direction];

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, x: offset.x, y: offset.y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, duration, offset.x, offset.y, once]);

  return <div ref={ref} className={className}>{children}</div>;
}
