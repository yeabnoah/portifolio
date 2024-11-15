import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"
import { AnimatedModalDemo } from "@/components/app/modal"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { LinkPreview } from "@/components/ui/link-preview"
import { TimelineDemo } from "@/components/app/scroll"
import { InfiniteMovingCardsDemo } from "@/components/app/horizontalScroll"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import AboutInfo from "@/components/app/userInfo"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function About() {
    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];



    return (
        <div className=" py-12">
            <div className="max-w-5xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-5xl mb-4 text-black dark:text-white max-w-4xl">
                    Little about my self
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    I&apos;ve been working with computers eversince my childhood. Here&apos;s
                    a timeline of my journey.
                </p>
            </div>

            <div className=" mx-auto w-full flex">
                <AboutInfo />
            </div>

            <hr className="my-6 border-dashed border-foreground/40 dark:border-foreground/20" />

            <div className="mt-12">
                <InfiniteMovingCardsDemo />
            </div>

            <hr className="my-6 border-dashed border-foreground/40 dark:border-foreground/20" />

            <AnimatedTestimonials
                testimonials={testimonials}
            />

        </div>
    )
}
