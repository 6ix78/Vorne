"use client"

import { useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Professional Trader",
    location: "Singapore",
    avatar: "MC",
    rating: 5,
    review:
      "VornexChain has completely transformed my trading experience. The Xchain AI consistently identifies profitable opportunities I would have missed. My portfolio has grown 340% in just 6 months.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Investment Analyst",
    location: "United Kingdom",
    avatar: "SW",
    rating: 5,
    review:
      "The passive income from the Premium plan exceeded my expectations. Daily returns are consistent, and withdrawals are truly instant. Best investment platform I have used.",
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Crypto Enthusiast",
    location: "United States",
    avatar: "DR",
    rating: 5,
    review:
      "Started with the Basic plan to test the waters. Within weeks, I upgraded to Classic. The 24/7 support team is incredibly responsive and helpful.",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Forex Trader",
    location: "Australia",
    avatar: "ET",
    rating: 5,
    review:
      "The virtual trading terminal is incredibly intuitive. I can execute trades seamlessly across forex and crypto futures. The 100x leverage is a game-changer.",
  },
  {
    id: 5,
    name: "James Nakamura",
    role: "Financial Advisor",
    location: "Japan",
    avatar: "JN",
    rating: 5,
    review:
      "I recommend VornexChain to all my clients seeking passive income. The regulatory compliance and transparent operations give me confidence in the platform.",
  },
  {
    id: 6,
    name: "Lisa Andersson",
    role: "Day Trader",
    location: "Sweden",
    avatar: "LA",
    rating: 5,
    review:
      "The investment calculator helped me plan my strategy perfectly. Now earning consistent daily returns with the Bronze plan. Truly life-changing!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - slidesPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-16 md:py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto max-w-7xl relative">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground text-balance">
              Trusted by Traders{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Worldwide
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-pretty">
              Join thousands of satisfied investors who are earning consistent returns with
              VornexChain
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 px-2 md:px-3"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base mb-6 flex-grow leading-relaxed">
                        {`"${testimonial.review}"`}
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm md:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground text-xs md:text-sm">
                            {testimonial.role} - {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-primary w-6 md:w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={600}>
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "50K+", label: "Active Users" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "$2B+", label: "Paid Out" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 md:p-6">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
