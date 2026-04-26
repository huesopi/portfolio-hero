import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function App() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // blobs
  const blob1X = useTransform(x, [0, 1], [-180, 180]);
  const blob1Y = useTransform(y, [0, 1], [-140, 140]);

  const blob2X = useTransform(x, [0, 1], [220, -220]);
  const blob2Y = useTransform(y, [0, 1], [160, -160]);

  const blob3X = useTransform(x, [0, 1], [140, -140]);
  const blob3Y = useTransform(y, [0, 1], [180, -180]);

  const blob4X = useTransform(x, [0, 1], [-160, 160]);
  const blob4Y = useTransform(y, [0, 1], [140, -140]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const resetMouse = () => {
    setIsHovering(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={resetMouse}
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* soft glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.08), transparent 60%)",
        }}
      />
      {/* HEAVY GRAIN OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.18,
          mixBlendMode: "overlay",

          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`,

          backgroundSize: "180px 180px",
        }}
      />
      {/* BLOBS */}
      <motion.div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #ffe4f1 0%, #fbcfe8 35%, transparent 80%)",
          filter: "blur(90px)",
          left: "-200px",
          top: "-180px",
          x: isHovering ? blob1X : 0,
          y: isHovering ? blob1Y : 0,
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.75) 0%, transparent 65%)",
          filter: "blur(110px)",
          right: "-220px",
          top: "-150px",
          x: isHovering ? blob2X : 0,
          y: isHovering ? blob2Y : 0,
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.65) 0%, transparent 65%)",
          filter: "blur(100px)",
          left: "10%",
          bottom: "-250px",
          x: isHovering ? blob3X : 0,
          y: isHovering ? blob3Y : 0,
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.65) 0%, transparent 65%)",
          filter: "blur(95px)",
          right: "10%",
          bottom: "-200px",
          x: isHovering ? blob4X : 0,
          y: isHovering ? blob4Y : 0,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 820,
          paddingLeft: "80px",
          textAlign: "left",
        }}
      >
        {/* intro */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            opacity: 0.6,
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          Hi, I'm
        </p>

        {/* name */}
        <h1
          style={{
            fontSize: 84,
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            margin: 0,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Alexandra Navas
        </h1>

        {/* title */}
        <h2
          style={{
            fontSize: 34,
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            marginTop: 12,
            opacity: 0.8,
          }}
        >
          Senior UI/UX Designer
        </h2>

        {/* description */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "rgba(0,0,0,0.75)",
            maxWidth: 700,
            fontFamily: "var(--font-body)",
            marginTop: 18,
          }}
        >
          I design{" "}
          <span style={{ color: "#6366f1", fontWeight: 600 }}>
            user-centered websites
          </span>
          ,{" "}
          <span style={{ color: "#6366f1", fontWeight: 600 }}>
            web applications
          </span>{" "}
          and digital products from concept to high fidelity. My focus is on
          clarity, usability, and building{" "}
          <span style={{ color: "#6366f1", fontWeight: 600 }}>
            interfaces that translate cleanly into development
          </span>
          .
        </p>

        {/* EDITORIAL TAGS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 26,
          }}
        >
          {[
            "Product Design",
            "UI Systems",
            "Interaction Design",
            "Prototyping",
            "HTML/CSS",
            "Figma",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                fontSize: 14,
                fontFamily: "var(--font-body)",

                background: "rgba(99,102,241,0.10)", // slightly stronger
                color: "#4338ca", // darker for readability

                border: "1px solid rgba(99,102,241,0.25)",

                fontWeight: 500,
                letterSpacing: "0.2px",

                boxShadow: "0 1px 2px rgba(0,0,0,0.04)", // subtle lift
                backdropFilter: "blur(6px)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* buttons */}
        <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
          <a
            href="#projects"
            style={{
              padding: "14px 24px",
              background: "#6366f1",
              color: "white",
              borderRadius: 999,
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontWeight: 500,

              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            View Projects
            <span style={{ display: "inline-flex" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="mailto:alexandranavas10@gmail.com"
            style={{
              padding: "14px 24px",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 999,
              textDecoration: "none",
              color: "#0a0a0a",
              background: "rgba(255, 255, 255, 0.44)",
              fontFamily: "var(--font-body)",
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
