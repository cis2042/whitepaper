"use client";

import { useRef, useEffect } from "react";

interface Cell {
  val: number;
  speed: number;
  timer: number;
  bright: boolean;
  phase: number;
  jumping: boolean;
  jumpTimer: number;
}

export default function HexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellW = 34;
    const cellH = 20;
    let cols = 0;
    let rows = 0;
    let grid: Cell[][] = [];
    let frame = 0;
    let raf = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      cols = Math.ceil(canvas!.width / cellW) + 1;
      rows = Math.ceil(canvas!.height / cellH) + 1;
    }

    function init() {
      grid = [];
      for (let y = 0; y < rows; y++) {
        const row: Cell[] = [];
        for (let x = 0; x < cols; x++) {
          row.push({
            val: Math.floor(Math.random() * 256),
            speed: 0.5 + Math.random() * 3,
            timer: Math.random() * 80,
            bright: Math.random() < 0.08,
            phase: Math.random() * Math.PI * 2,
            jumping: false,
            jumpTimer: 0,
          });
        }
        grid.push(row);
      }
    }

    function tick() {
      if (!ctx || !canvas) return;
      const isDark =
        document.documentElement.getAttribute("data-theme") !== "cream";

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '10px "JetBrains Mono", "Courier New", monospace';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cell = grid[y]?.[x];
          if (!cell) continue;
          cell.timer += cell.speed;

          if (cell.timer > 40 + Math.random() * 100) {
            cell.val = Math.floor(Math.random() * 256);
            cell.timer = 0;
            cell.bright = Math.random() < 0.1;
            cell.jumping = true;
            cell.jumpTimer = 8;
          }

          if (cell.jumpTimer > 0) cell.jumpTimer--;
          if (cell.jumpTimer === 0) cell.jumping = false;

          const hex = cell.val.toString(16).toUpperCase().padStart(2, "0");
          const px = x * cellW + cellW / 2;
          const py = y * cellH + cellH / 2;

          const pulse = Math.sin(frame * 0.025 + cell.phase) * 0.12;

          let alpha: number;
          if (cell.jumping) {
            alpha = 0.5 + pulse;
            ctx.fillStyle = isDark
              ? `rgba(212, 200, 154, ${alpha})`
              : `rgba(111, 219, 143, ${alpha})`;
          } else if (cell.bright) {
            alpha = 0.35 + pulse;
            ctx.fillStyle = isDark
              ? `rgba(168, 184, 122, ${alpha})`
              : `rgba(74, 124, 89, ${alpha})`;
          } else {
            alpha = 0.14 + pulse * 0.5;
            ctx.fillStyle = isDark
              ? `rgba(138, 132, 104, ${alpha})`
              : `rgba(141, 174, 154, ${alpha})`;
          }

          ctx.fillText(hex, px, py);
        }
      }
    }

    function loop() {
      frame++;
      if (frame % 2 === 0) tick();
      raf = requestAnimationFrame(loop);
    }

    resize();
    init();
    loop();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.35,
      }}
    />
  );
}
