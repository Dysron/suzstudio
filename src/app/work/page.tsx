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
  ImageReveal,
  HeroText,
  MagneticHover,
} from '@/components/animated'

const workCategories = [
  {
    title: 'BLAQ PAGES / AFRO HOUSE DJ SET / LOS ANGELES',
    images: [
      { src: '/images/blaq-pages-1.jpg', alt: 'DJ Performance' },
      { src: '/images/blaq-pages-2.jpg', alt: 'Crowd Moment' },
      { src: '/images/blaq-pages-3.jpg', alt: 'Event Atmosphere' },
    ],
  },
  {
    title: 'EVENTS / NIGHTLIFE IN DC',
    images: [
      { src: '/images/dc-events-1.jpg', alt: 'Live Band' },
      { src: '/images/dc-events-2.jpg', alt: 'Dance Floor' },
      { src: '/images/dc-events-3.jpg', alt: 'Rooftop Session' },
    ],
  },
  {
    title: 'YOGA BY JULES / YOGA AND BRUNCH / WASHINGTON DC',
    images: [
      { src: '/images/blaq-pages-1.jpg', alt: 'Yoga Session' },
      { src: '/images/dc-events-1.jpg', alt: 'Brunch Event' },
      { src: '/images/creator-portrait.jpg', alt: 'Wellness Gathering' },
    ],
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen">
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
              className="text-sm tracking-wide link-underline hover:text-accent transition-colors duration-300 font-medium"
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

      {/* Work Sections */}
      {workCategories.map((category, categoryIndex) => (
        <section key={category.title} className="py-12 lg:py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <FadeInUp delay={categoryIndex * 0.1}>
              <HeroText delay={0.1}>
                <h2 className="heading-display text-2xl lg:text-4xl text-center mb-12 text-foreground">
                  {category.title}
                </h2>
              </HeroText>
            </FadeInUp>

            <StaggerContainer
              staggerDelay={0.15}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {category.images.map((image, i) => (
                <StaggerItem key={i}>
                  <ImageReveal direction="up" delay={i * 0.1}>
                    <div
                      className="aspect-[3/4] relative rounded-xl overflow-hidden bg-muted group cursor-pointer"
                      role="img"
                      aria-label={image.alt}
                      style={{
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-sm uppercase tracking-widest text-center">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </ImageReveal>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <HeroText delay={0.1}>
              <h2 className="heading-display text-4xl lg:text-6xl text-gold italic mb-6">
                LET&apos;S CREATE TOGETHER
              </h2>
            </HeroText>
            <p className="text-lg text-foreground/80 mb-8">
              Ready to capture your next event? Let&apos;s connect and bring your vision to life.
            </p>
            <MagneticHover>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gold text-background font-medium tracking-wide rounded-lg hover:bg-accent-bright transition-colors duration-300"
              >
                GET IN TOUCH
              </Link>
            </MagneticHover>
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
