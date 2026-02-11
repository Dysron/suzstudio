'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  HeroText,
  ScaleReveal,
  MagneticHover,
  Float,
} from '@/components/animated'

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-end h-16 lg:h-20 gap-8">
            <Link
              href="/"
              className="text-sm tracking-wide link-underline hover:text-accent transition-colors duration-300"
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
              className="text-sm tracking-wide link-underline hover:text-accent transition-colors duration-300 font-medium"
            >
              My Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Contact Section - Full Height Split */}
      <section className="flex-1 flex items-center py-8 lg:py-0">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-stretch min-h-[70vh]">
              {/* Image */}
              <FadeInLeft className="lg:w-1/2">
                <ScaleReveal>
                  <div className="relative rounded-xl overflow-hidden h-full min-h-[400px] lg:min-h-[600px]">
                    <Image
                      src="/images/dc-events-2.jpg"
                      alt="Suzzy at an event"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                  </div>
                </ScaleReveal>
              </FadeInLeft>

              {/* Contact Info */}
              <FadeInRight className="lg:w-1/2 flex flex-col justify-center lg:pl-16" delay={0.2}>
                <div className="text-center lg:text-left py-8 lg:py-0">
                  <Float duration={8} distance={3}>
                    <HeroText delay={0.1}>
                      <h1 className="heading-display text-5xl md:text-6xl lg:text-8xl text-gold italic mb-2">
                        LET&apos;S
                      </h1>
                    </HeroText>
                  </Float>
                  <Float duration={6} distance={4}>
                    <HeroText delay={0.2}>
                      <h1 className="heading-display text-5xl md:text-6xl lg:text-8xl text-gold italic mb-12">
                        CONNECT!
                      </h1>
                    </HeroText>
                  </Float>

                  <FadeInUp delay={0.4}>
                    <div className="section-card inline-block text-left">
                      <div className="space-y-8">
                        <MagneticHover className="block">
                          <div className="group">
                            <h3 className="text-lg tracking-wide mb-2 text-card-foreground/70 group-hover:text-card-foreground transition-colors duration-300">
                              Email
                            </h3>
                            <a
                              href="mailto:sndiforchu1@gmail.com"
                              className="text-xl lg:text-2xl text-gold hover:text-accent-bright transition-colors duration-300 font-medium"
                            >
                              sndiforchu1@gmail.com
                            </a>
                          </div>
                        </MagneticHover>

                        <MagneticHover className="block">
                          <div className="group">
                            <h3 className="text-lg tracking-wide mb-2 text-card-foreground/70 group-hover:text-card-foreground transition-colors duration-300">
                              Instagram
                            </h3>
                            <a
                              href="https://instagram.com/sndiforchu"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xl lg:text-2xl text-gold hover:text-accent-bright transition-colors duration-300 font-medium"
                            >
                              @sndiforchu
                            </a>
                          </div>
                        </MagneticHover>
                      </div>
                    </div>
                  </FadeInUp>

                  <FadeInUp delay={0.6}>
                    <div className="mt-12">
                      <p className="text-foreground/70 text-lg max-w-md mx-auto lg:mx-0">
                        Ready to capture your next event? Let&apos;s create something amazing together.
                      </p>
                    </div>
                  </FadeInUp>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-border mt-auto">
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
