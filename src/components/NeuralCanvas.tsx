import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
}

interface Pulse {
  startIndex: number;
  endIndex: number;
  progress: number;
  speed: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Color palette matching the theme: electric blue, violet, cyan, soft white
    const colors = ['#38bdf8', '#818cf8', '#a78bfa', '#22d3ee', '#60a5fa'];
    let particles: Particle[] = [];
    let pulses: Pulse[] = [];

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 18000), 70);

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2 + 1.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseAlpha: Math.random() * 0.4 + 0.3
        });
      }

      // Initialize data flow pulses
      pulses = [];
      for (let i = 0; i < 8; i++) {
        const p1 = Math.floor(Math.random() * particles.length);
        const p2 = Math.floor(Math.random() * particles.length);
        if (p1 !== p2) {
          pulses.push({
            startIndex: p1,
            endIndex: p2,
            progress: Math.random(),
            speed: 0.005 + Math.random() * 0.008
          });
        }
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction / interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.08;
          p.x += dx * force;
          p.y += dy * force;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseAlpha;
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 135;

          if (distBetween < maxDist) {
            const alpha = (1 - distBetween / maxDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#818cf8';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw data flow pulses along active synapses
      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i];
        const p1 = particles[pulse.startIndex];
        const p2 = particles[pulse.endIndex];

        if (p1 && p2) {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 150) {
            pulse.progress += pulse.speed;
            if (pulse.progress > 1) {
              pulse.progress = 0;
              pulse.startIndex = Math.floor(Math.random() * particles.length);
              pulse.endIndex = Math.floor(Math.random() * particles.length);
            }

            const currentX = p1.x + (p2.x - p1.x) * pulse.progress;
            const currentY = p1.y + (p2.y - p1.y) * pulse.progress;

            ctx.beginPath();
            ctx.arc(currentX, currentY, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#38bdf8';
            ctx.globalAlpha = 0.85;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#38bdf8';
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            pulse.startIndex = Math.floor(Math.random() * particles.length);
            pulse.endIndex = Math.floor(Math.random() * particles.length);
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
