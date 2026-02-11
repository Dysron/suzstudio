'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleReveal,
  StaggerContainer,
  StaggerItem,
  HeroText,
  ImageReveal,
  MagneticHover,
  ParallaxImage,
  Float,
} from '@/components/animated'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-end h-16 lg:h-20 gap-8">
            <Link
              href="/"
              className="text-sm tracking-wide link-underline hover:text-accent transition-colors duration-300 font-medium"
            >
              Suz&apos;s Studio - Home
            </Link>
            <Link
              href="/work"
              className="text-sm tracking-wide link-underline hover:text-accent transition-colors duration-300"
            >
              My Work
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wide link-underline hover:text-accent transition-colors duration-300"
            >
              My Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Split Layout */}
      <section className="relative px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <ScaleReveal>
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div className="relative aspect-[16/10] lg:aspect-[16/8]">
                <Image
                  src="/images/hero-main.jpg"
                  alt="Suzzy Ndiforchu"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-8 lg:px-16">
                  <div className="flex justify-between items-center">
                    <HeroText delay={0.2}>
                      <h1 className="heading-display text-5xl md:text-7xl lg:text-9xl text-background drop-shadow-lg">
                        SUZZY
                      </h1>
                    </HeroText>
                    <HeroText delay={0.4}>
                      <h1 className="heading-display text-5xl md:text-7xl lg:text-9xl text-background drop-shadow-lg">
                        NDIFORCHU
                      </h1>
                    </HeroText>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-16 text-right">
                <HeroText delay={0.6}>
                  <p className="text-white text-lg lg:text-xl tracking-wide uppercase font-medium" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
                    Videography and
                  </p>
                  <p className="text-white text-lg lg:text-xl tracking-wide uppercase font-medium" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
                    Live Content Capture
                  </p>
                </HeroText>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="section-card">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <FadeInLeft className="lg:w-1/2">
                <Float duration={6} distance={5}>
                  <h2 className="heading-display text-4xl lg:text-5xl text-gold italic mb-8">
                    THE CREATOR
                  </h2>
                </Float>
                <p className="text-card-foreground/90 text-lg leading-relaxed mb-8">
                  I&apos;m Suzzy! A Los Angeles native currently creating in Washington, DC.
                  I&apos;m a videographer specializing in live content capture, bringing moments
                  to life in real time. I help DJs, event producers, and creatives turn their
                  experiences into high-performing social content that feels authentic,
                  energetic, and Instagram story, Reel, and TikTok ready.
                </p>

                <h3 className="heading-display text-3xl lg:text-4xl text-gold italic mb-6">
                  WHAT I OFFER
                </h3>
                <StaggerContainer staggerDelay={0.1} className="space-y-3 mb-8">
                  {[
                    'Real time posting for Instagram stories',
                    'Clear, quality short form content to reuse for social media (Reels, TikTok, IG, YouTube shorts)',
                    'Crowd reactions, emotion and momentum shots',
                    'Quick turn around time for raw footage delivery (less than 24 hours)',
                    'Dropbox or iMessage delivery',
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <li className="flex items-start gap-3 text-card-foreground/80 text-lg list-none">
                        <span className="text-gold">•</span>
                        {item}
                      </li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <MagneticHover className="inline-block">
                  <Link
                    href="/work"
                    className="inline-block text-foreground text-xl tracking-wide font-medium border-b-2 border-foreground pb-1 hover:text-gold hover:border-gold transition-all duration-300"
                  >
                    CHECK OUT MY WORK
                  </Link>
                </MagneticHover>
              </FadeInLeft>

              {/* Image */}
              <FadeInRight className="lg:w-1/2" delay={0.2}>
                <ImageReveal direction="right">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/creator-portrait.jpg"
                      alt="Suzzy at an event"
                      width={600}
                      height={750}
                      className="object-cover w-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </ImageReveal>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="heading-display text-3xl lg:text-4xl text-center mb-12 text-foreground">
              BLAQ PAGES / AFRO HOUSE DJ SET / LOS ANGELES
            </h2>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/blaq-pages-1.jpg', alt: 'DJ Set Performance' },
              { src: '/images/blaq-pages-2.jpg', alt: 'Crowd Energy' },
              { src: '/images/blaq-pages-3.jpg', alt: 'Event Atmosphere' },
            ].map((image, i) => (
              <StaggerItem key={i}>
                <ImageReveal direction="up" delay={i * 0.1}>
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-muted group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                </ImageReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.3}>
            <h3 className="heading-display text-3xl lg:text-4xl text-center mt-16 mb-12 text-foreground">
              EVENTS / NIGHTLIFE IN DC
            </h3>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/dc-events-1.jpg', alt: 'Live Music' },
              { src: '/images/dc-events-2.jpg', alt: 'Event Coverage' },
              { src: '/images/dc-events-3.jpg', alt: 'Rooftop Event' },
            ].map((image, i) => (
              <StaggerItem key={i}>
                <ImageReveal direction="up" delay={i * 0.1}>
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-muted group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                </ImageReveal>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <FadeInUp delay={0.5}>
            <div className="text-center mt-16">
              <MagneticHover>
                <Link
                  href="/work"
                  className="inline-block px-8 py-4 bg-gold text-background font-medium tracking-wide rounded-lg hover:bg-accent-bright transition-colors duration-300"
                >
                  VIEW ALL WORK
                </Link>
              </MagneticHover>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Suz&apos;s Studio. All rights reserved.
            </p>
          </FadeInUp>
        </div>
      </footer>
    </main>
  )
}
