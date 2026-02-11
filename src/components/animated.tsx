'use client'

import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef, ReactNode } from 'react'

// Cinematic fade-in from below
export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Cinematic easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Cinematic fade-in from left
export const FadeInLeft = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -80 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Cinematic fade-in from right
export const FadeInRight = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Cinematic scale reveal
export const ScaleReveal = ({
  children,
  delay = 0,
  duration = 1,
  className = '',
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax image container - moves slower than scroll
export const ParallaxImage = ({
  children,
  speed = 0.5,
  className = '',
}: {
  children: ReactNode
  speed?: number
  className?: string
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}

// Text reveal line by line
export const TextReveal = ({
  children,
  delay = 0,
  className = '',
}: {
  children: string
  delay?: number
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const words = children.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// Stagger children animation
export const StaggerContainer = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
}: {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item
export const StaggerItem = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Magnetic hover effect
export const MagneticHover = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating animation (like the buypass passes)
export const Float = ({
  children,
  duration = 6,
  delay = 0,
  distance = 20,
  className = '',
}: {
  children: ReactNode
  duration?: number
  delay?: number
  distance?: number
  className?: string
}) => {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hero text animation with blur
export const HeroText = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Cinematic image reveal with mask
export const ImageReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getInitialClip = () => {
    switch (direction) {
      case 'up':
        return 'inset(100% 0 0 0)'
      case 'down':
        return 'inset(0 0 100% 0)'
      case 'left':
        return 'inset(0 100% 0 0)'
      case 'right':
        return 'inset(0 0 0 100%)'
      default:
        return 'inset(100% 0 0 0)'
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: getInitialClip() }}
      animate={isInView ? { clipPath: 'inset(0 0 0 0)' } : { clipPath: getInitialClip() }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Smooth scroll progress indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white/20 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

// Export motion for direct use
export { motion }
