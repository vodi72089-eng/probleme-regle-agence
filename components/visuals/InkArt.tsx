const swirls = [
  "M60 520 C 150 430, 250 470, 288 350 C 326 230, 430 250, 540 120",
  "M40 480 C 140 390, 230 430, 268 310 C 306 190, 410 210, 520 80",
  "M90 545 C 190 450, 280 500, 318 380 C 356 260, 460 280, 570 150",
  "M110 570 C 210 480, 300 520, 338 400 C 376 280, 480 300, 590 170",
  "M20 400 C 120 320, 210 360, 250 250 C 290 140, 390 160, 500 40",
  "M140 320 C 220 260, 300 300, 330 210 C 360 120, 440 130, 520 60",
  "M180 250 C 250 210, 310 240, 340 170 C 370 100, 430 100, 480 50",
  "M300 320 C 370 260, 450 300, 410 380 C 370 460, 270 420, 290 350 C 310 280, 390 320, 360 370",
  "M280 360 C 350 300, 430 340, 390 420 C 350 500, 250 460, 270 390 C 290 320, 370 360, 340 410",
  "M260 400 C 330 340, 410 380, 370 460 C 330 540, 230 500, 250 430 C 270 360, 350 400, 320 450",
  "M380 200 C 440 170, 490 210, 460 270 C 430 330, 360 300, 380 240 C 400 180, 460 220, 435 260",
  "M400 140 C 460 110, 510 150, 480 210 C 450 270, 380 240, 400 180 C 420 120, 480 160, 455 200",
  "M200 470 C 260 420, 330 460, 300 530 C 270 600, 190 570, 210 500 C 230 430, 300 470, 275 520",
  "M120 350 C 180 300, 250 340, 220 410 C 190 480, 110 450, 130 380 C 150 310, 220 350, 195 400",
];

export default function InkArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="Illustration abstraite d'encre noire en mouvement"
    >
      <defs>
        <filter id="ink-displace" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="9"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="34"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g filter="url(#ink-displace)" fill="none" stroke="#0B0B0B" strokeLinecap="round">
        {/* masses d'encre */}
        <g opacity="0.9" stroke="none" fill="#0B0B0B">
          <path d="M120 460 C160 380 240 430 280 330 C320 230 400 260 460 170 C500 110 560 140 540 210 C510 310 430 290 390 390 C350 490 250 470 200 540 C170 580 100 540 120 460 Z" />
          <path d="M260 300 C300 220 380 250 400 180 C420 110 480 120 470 190 C460 260 390 250 370 320 C350 390 280 370 260 300 Z" opacity="0.8" />
          <path d="M150 500 C190 450 240 480 250 420 C260 360 320 380 330 440 C340 500 280 520 250 560 C225 590 120 560 150 500 Z" opacity="0.7" />
        </g>
        {swirls.map((d, i) => (
          <path
            key={d}
            d={d}
            strokeWidth={i % 3 === 0 ? 4.2 : i % 3 === 1 ? 1.6 : 0.8}
            opacity={i % 4 === 0 ? 0.95 : 0.65}
          />
        ))}
        {Array.from({ length: 26 }).map((_, i) => (
          <circle
            key={i}
            cx={70 + ((i * 97) % 470)}
            cy={60 + ((i * 149) % 480)}
            r={i % 5 === 0 ? 3.4 : 1.4}
            fill="#0B0B0B"
            stroke="none"
            opacity={0.75}
          />
        ))}
      </g>
    </svg>
  );
}
