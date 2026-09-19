"use client"

import { ReactNode, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { 
  Brain, Bot, Cpu, ScanEye, Sparkles, 
  Layers, Network, Database, Code, Sliders,
  Monitor, Server, TerminalSquare, Globe, LayoutTemplate,
  Cloud, CloudUpload, CloudCog, GitBranch, Settings,
  BarChart, PieChart, LineChart, ClipboardList, Filter,
  Shield, Lock, Key, Fingerprint, EyeOff,
  Code2, CpuIcon, DatabaseBackup, HardDrive, MemoryStick,
  NetworkIcon, Router, ServerCrash, Terminal, Wifi,
  Binary, CircuitBoard, FileCode2, FileSearch, FingerprintIcon,
  Gauge, Keyboard, MousePointerClick, QrCode, ScanBarcode,
  ShieldAlert, ShieldCheck, ShieldOff, Smartphone, Tablet,
  Webhook, Wrench, Zap, GitCommit, GitCompare,
  GitFork, GitMerge, GitPullRequest, Github, Gitlab
} from 'lucide-react'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

const COLORS = {
  background: "#0F172A", // Changed from white to dark slate
  cardBg: "#1E293B",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#EC4899",
  textLight: "#F1F5F9",
  textMuted: "#94A3B8",
  highlight: "#F59E0B"
}

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Particle system
    const particles = Array.from({ length: Math.min(80, window.innerWidth / 10) }, () => {
      const size = Math.random() * 3 + 1
      const color = [COLORS.primary, COLORS.secondary, COLORS.accent][Math.floor(Math.random() * 3)]
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        baseSize: size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color,
        update() {
          this.x += this.speedX
          this.y += this.speedY

          // Boundary check with bounce
          if (this.x > canvas.width || this.x < 0) this.speedX *= -1
          if (this.y > canvas.height || this.y < 0) this.speedY *= -1
        },
        draw() {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    })

    // Connection system
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = 1 - distance / 150
            ctx.strokeStyle = `${particles[i].color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Grid system
    const drawGrid = () => {
      ctx.strokeStyle = `${COLORS.primary}20`
      ctx.lineWidth = 0.5
      const gridSize = 50
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawGrid()
      drawConnections()
      particles.forEach(p => {
        p.update()
        p.draw()
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
      />
      <FloatingTechElements />
    </>
  )
}

const FloatingTechElements = () => {
  // Expanded tech icons with categories
  const techIcons = [
    // AI/ML
    { icon: <Brain size={24} />, color: COLORS.primary },
    { icon: <Bot size={24} />, color: COLORS.primary },
    { icon: <Cpu size={24} />, color: COLORS.primary },
    { icon: <ScanEye size={24} />, color: COLORS.primary },
    { icon: <Sparkles size={24} />, color: COLORS.primary },
    
    // Networking
    { icon: <Network size={24} />, color: COLORS.secondary },
    { icon: <Router size={24} />, color: COLORS.secondary },
    { icon: <Wifi size={24} />, color: COLORS.secondary },
    { icon: <Globe size={24} />, color: COLORS.secondary },
    { icon: <Webhook size={24} />, color: COLORS.secondary },
    
    // Operating Systems
    { icon: <TerminalSquare size={24} />, color: COLORS.accent },
    { icon: <Terminal size={24} />, color: COLORS.accent },
    { icon: <Monitor size={24} />, color: COLORS.accent },
    { icon: <Server size={24} />, color: COLORS.accent },
    { icon: <ServerCrash size={24} />, color: COLORS.accent },
    
    // IoT
    { icon: <CircuitBoard size={24} />, color: COLORS.primary },
    { icon: <MemoryStick size={24} />, color: COLORS.primary },
    { icon: <HardDrive size={24} />, color: COLORS.primary },
    { icon: <CpuIcon size={24} />, color: COLORS.primary },
    { icon: <DatabaseBackup size={24} />, color: COLORS.primary },
    
    // Programming
    { icon: <Code size={24} />, color: COLORS.secondary },
    { icon: <Code2 size={24} />, color: COLORS.secondary },
    { icon: <FileCode2 size={24} />, color: COLORS.secondary },
    { icon: <Binary size={24} />, color: COLORS.secondary },
    { icon: <GitBranch size={24} />, color: COLORS.secondary },
    
    // Cybersecurity
    { icon: <Shield size={24} />, color: COLORS.accent },
    { icon: <Lock size={24} />, color: COLORS.accent },
    { icon: <Key size={24} />, color: COLORS.accent },
    { icon: <Fingerprint size={24} />, color: COLORS.accent },
    { icon: <EyeOff size={24} />, color: COLORS.accent },
    
    // Cloud/DevOps
    { icon: <Cloud size={24} />, color: COLORS.primary },
    { icon: <CloudUpload size={24} />, color: COLORS.primary },
    { icon: <CloudCog size={24} />, color: COLORS.primary },
    { icon: <GitMerge size={24} />, color: COLORS.primary },
    { icon: <Settings size={24} />, color: COLORS.primary },
    
    // Data Science
    { icon: <BarChart size={24} />, color: COLORS.secondary },
    { icon: <PieChart size={24} />, color: COLORS.secondary },
    { icon: <LineChart size={24} />, color: COLORS.secondary },
    { icon: <ClipboardList size={24} />, color: COLORS.secondary },
    { icon: <Filter size={24} />, color: COLORS.secondary },
    
    // UI/UX
    { icon: <LayoutTemplate size={24} />, color: COLORS.accent },
    { icon: <Sliders size={24} />, color: COLORS.accent },
    { icon: <MousePointerClick size={24} />, color: COLORS.accent },
    { icon: <Keyboard size={24} />, color: COLORS.accent },
    { icon: <Gauge size={24} />, color: COLORS.accent }
  ]

  return (
    <>
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 Q 10 10 20 20 T 40 20" stroke={COLORS.primary} fill="none" strokeWidth="0.5" />
              <path d="M 20 0 Q 10 10 20 20 T 20 40" stroke={COLORS.secondary} fill="none" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="1" fill={COLORS.accent} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Binary code rain */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-indigo-400 whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
            }}
            initial={{ top: '-10%', opacity: 0 }}
            animate={{ top: '110%', opacity: [0, 0.8, 0] }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            {Array.from({ length: 30 }).map(() => Math.round(Math.random())).join(' ')}
          </motion.div>
        ))}
      </div>

      {/* Floating tech icons - now larger and more numerous */}
      {[...techIcons, ...techIcons].map((techIcon, i) => {
        const size = Math.random() * 30 + 24 // Larger size range (24-54px)
        return (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              color: techIcon.color,
              opacity: 0.6,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 60],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          >
            {techIcon.icon}
          </motion.div>
        )
      })}

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(12)].map((_, i) => {
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          const endX = Math.random() * 100
          const endY = Math.random() * 100
          const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 20
          const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 20

          return (
            <motion.path
              key={i}
              d={`M${startX}% ${startY}% Q${midX}% ${midY}% ${endX}% ${endY}%`}
              stroke={i % 2 === 0 ? COLORS.primary : COLORS.secondary}
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 3,
              }}
            />
          )
        })}
      </svg>
    </>
  )
}

const TechWave = () => {
  const techIcons = [
    '🧑‍💻', '💻', '🖥️', '⌨️', '🖱️', 
    '📱', '🔌', '💾', '📊', '📈',
    '🔋', '🔍', '📡', '🖨️', '🖲️',
    '💽', '💿', '📀', '🔬', '🔭'
  ]

  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="absolute bottom-0 left-0 right-0 h-full w-full"
      >
        <path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          opacity=".25" 
          fill={COLORS.background}
        />
        <path 
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          opacity=".5" 
          fill={COLORS.cardBg}
        />
        <path 
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          fill={COLORS.background}
        />
      </svg>
      
      {techIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl"
          style={{
            bottom: '10%',
            left: `${Math.random() * 100}%`,
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [20, -15, 20],
            opacity: [0, 0.9, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        >
          {icon}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn("flex flex-col min-h-screen relative overflow-hidden bg-gray-900 text-white", className)}>
      <Navbar />
      <TechBackground />
      <main className="relative z-10 flex-grow pt-24">
        {children}
      </main>
      <TechWave />
      <Footer />
    </div>
  )
}