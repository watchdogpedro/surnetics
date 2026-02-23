"use client";

import { motion } from "framer-motion";

export default function HeroAnimation() {
  const channelLeft = 60;
  const channelRight = 540;
  const channelWidth = channelRight - channelLeft;
  const channelTop = 90;
  const channelBottom = 150;
  const channelHeight = channelBottom - channelTop;

  // 3 fluid slugs with staggered positions
  const slugs = [
    { initialX: channelLeft, delay: 0 },
    { initialX: channelLeft + 130, delay: 0 },
    { initialX: channelLeft + 260, delay: 0 },
  ];

  return (
    <div className="w-full max-w-xl mx-auto select-none pointer-events-none">
      <svg
        viewBox="0 0 600 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Microfluidic channel animation showing passive fluid flow"
      >
        <defs>
          {/* Wall surface energy gradient */}
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#3399FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#B3D4FF" stopOpacity="0.3" />
          </linearGradient>

          {/* Fluid gradient */}
          <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3399FF" stopOpacity="0.75" />
          </linearGradient>

          {/* Channel fill */}
          <linearGradient id="channelBg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#112040" />
            <stop offset="100%" stopColor="#1a2e50" />
          </linearGradient>

          <clipPath id="channelClip">
            <rect
              x={channelLeft}
              y={channelTop}
              width={channelWidth}
              height={channelHeight}
            />
          </clipPath>
        </defs>

        {/* Channel background */}
        <rect
          x={channelLeft}
          y={channelTop}
          width={channelWidth}
          height={channelHeight}
          fill="url(#channelBg)"
          rx="2"
        />

        {/* Animated fluid slugs */}
        {slugs.map((slug, i) => (
          <motion.rect
            key={i}
            y={channelTop + 2}
            width={90}
            height={channelHeight - 4}
            fill="url(#fluidGrad)"
            rx="3"
            clipPath="url(#channelClip)"
            initial={{ x: slug.initialX }}
            animate={{ x: [slug.initialX, channelRight + 20, channelLeft - 110] }}
            transition={{
              duration: 4,
              delay: slug.delay,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.85, 0.86],
            }}
          />
        ))}

        {/* Top wall */}
        <rect
          x={channelLeft}
          y={channelTop - 12}
          width={channelWidth}
          height={12}
          fill="url(#wallGrad)"
          rx="2"
        />

        {/* Bottom wall */}
        <rect
          x={channelLeft}
          y={channelBottom}
          width={channelWidth}
          height={12}
          fill="url(#wallGrad)"
          rx="2"
        />

        {/* Channel end caps */}
        <rect x={channelLeft - 6} y={channelTop - 14} width={6} height={channelHeight + 28} fill="#0A1628" rx="1" />
        <rect x={channelRight} y={channelTop - 14} width={6} height={channelHeight + 28} fill="#0A1628" rx="1" />

        {/* Flow direction arrow */}
        <motion.g
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <line
            x1={channelLeft + 20}
            y1={channelTop + channelHeight / 2}
            x2={channelRight - 20}
            y2={channelTop + channelHeight / 2}
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="6 4"
          />
        </motion.g>

        {/* Labels */}
        <text
          x={channelLeft}
          y={channelTop - 22}
          fill="#0066FF"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          letterSpacing="0.05em"
        >
          HIGH SURFACE ENERGY
        </text>
        <text
          x={channelRight}
          y={channelTop - 22}
          fill="#8892A4"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          textAnchor="end"
          letterSpacing="0.05em"
        >
          LOW SURFACE ENERGY
        </text>

        {/* No pump label */}
        <g transform={`translate(${channelLeft + channelWidth / 2 - 70}, ${channelBottom + 28})`}>
          <rect width="140" height="26" rx="13" fill="#0066FF" fillOpacity="0.12" />
          <text
            x="70"
            y="17"
            fill="#60A5FA"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fontWeight="600"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            NO PUMP · NO VALVE · NO POWER
          </text>
        </g>

        {/* Gradient tick marks on top wall */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line
            key={i}
            x1={channelLeft + t * channelWidth}
            y1={channelTop - 14}
            x2={channelLeft + t * channelWidth}
            y2={channelTop - 20}
            stroke={`rgba(0,102,255,${1 - t * 0.7})`}
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}
