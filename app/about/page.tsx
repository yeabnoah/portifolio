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
            {/* <div className="flex justify-start"> */}
            {/* <AnimatedTestimonials testimonials={testimonials} /> */}
            {/* </div> */}

            <AnimatedTestimonials
                testimonials={testimonials}
            />

            <div className="mt-12">
                <InfiniteMovingCardsDemo />
            </div>

            {/* <div className=" mt-20 w-full">
                <StickyScroll content={content} />
            </div> */}


            {/* <StickyScroll /> */}

            {/* <div className="mt-12 flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                    <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="outline" size="icon">
                    <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="outline" size="icon">
                    <a href="mailto:jane@example.com" aria-label="Email">
                        <Mail className="h-5 w-5" />
                    </a>
                </Button>
            </div> */}
        </div>
    )
}
