import { useEffect, useRef, useState } from "react";

/** Reveal children on scroll with a soft fade + lift. */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error generic ref
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};
