"use client"

import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import ProjectCard from '../reuseble/projectCard';
import { ExternalLink, Mail } from 'lucide-react';
import ArticleCard from '../reuseble/articleCard';
import { Card, CardContent } from '../ui/card';
import GitHubCalendar from 'react-github-calendar';
import { ThreeDCardDemo } from './cardAnimated';
import { Cover } from '../ui/cover';
import { useTheme } from 'next-themes'
import { Suspense } from "react";
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import { InfiniteMovingCardsDemo } from './horizontalScroll';


const HomeComponent = () => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen text-foreground">
            <main className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="min-h-[85vh]">
                    <section className="pt-6 sm:pt-10">

                        {mounted && (
                            <GitHubCalendar
                                username="yeabnoah"
                                theme={{
                                    light: ['#f0f0f0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                }}
                                colorScheme={theme as 'light' | 'dark'}
                            />
                        )}

                    </section>

                    <hr className="my-6 border-dashed border-foreground/40 dark:border-foreground/20" />


                    <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-between mr-[5rem] py-8 gap-6 md:gap-8">
                        <div className="w-full md:w-1/2 space-y-4 shrink-0">
                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                                    Hi, I'm Yeabsra Ashebir a <br /><Cover className='text-teal-500'>Full-Stack</Cover> Developer
                                </h1>
                                <p className="text-sm sm:text-base text-foreground dark:text-foreground/80 mt-3">
                                    I create full-stack products that people love, with a focus on user experience and scalable architecture.
                                </p>
                            </div>

                            <div className="flex gap-4 sm:gap-6">
                                <Link href="#" className="text-foreground dark:text-foreground/80 hover:text-teal-500 hover:scale-125 hover:rotate-6 transition-colors">
                                    <IconBrandGithub className="h-10 w-10" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link href="#" className="text-foreground dark:text-foreground/80 hover:text-teal-500 hover:scale-125 hover:rotate-6 transition-colors">
                                    <IconBrandTwitter className="h-10 w-10" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="#" className="text-foreground dark:text-foreground/80 hover:text-teal-500 hover:scale-125 hover:rotate-6 transition-colors">
                                    <IconBrandLinkedin className="h-10 w-10" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link href="#" className="text-foreground dark:text-foreground/80 hover:text-teal-500 hover:scale-125 hover:rotate-6 transition-colors">
                                    <IconMail className="h-10 w-10" />
                                    <span className="sr-only">Email</span>
                                </Link>
                            </div>
                        </div>
                        <DirectionAwareHover className=' w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72' imageUrl={'/telegram.jpg?height=400&width=700'}>
                            <p className="font-bold text-xl">Click for Details</p>
                        </DirectionAwareHover>
                    </section>

                    <InfiniteMovingCardsDemo />

                    <hr className="my-6 border-dashed border-foreground/40 dark:border-foreground/20" />

                    <section id="projects" className="py-2">
                        <h2 className="text-xl font-semibold -mb-10">Recent Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ThreeDCardDemo />
                            <ThreeDCardDemo />
                            <ThreeDCardDemo />
                        </div>
                        <div className=" -mt-10">
                            <Button variant="outline" className="dark:bg-background rounded-md bg-foreground/90 hover:bg-foreground/85 border-none text-white transition-colors">
                                View All Projects
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </section>

                    <hr className="my-6 border-dashed border-foreground/40 dark:border-foreground/20" />

                    <section id="articles" className=" py-3">
                        <h2 className="text-2xl font-semibold -mb-12">Recent Articles</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                        </div>
                        <div className=" -mt-10">
                            <Button variant="outline" className=" dark:bg-background rounded-md bg-foreground/90 hover:bg-foreground/85 border-none text-white transition-colors">
                                View All Articles
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </section>

                    <hr className="my-6 border-dashed border-foreground/40 dark:border-foreground/20" />

                    <section id="contact" className="py-12">
                        <Card className="bg-background/5 hover:bg-background/10 shadow-sm shadow-foreground/20 dark:shadow-foreground/5  text-foreground transition-colors">
                            <CardContent className="p-6 sm:p-8">
                                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                                <p className="mb-6 text-foreground dark:text-foreground/80">
                                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                                </p>
                                <Button className="bg-foreground/90 dark:bg-background hover:bg-foreground/85 text-white transition-colors">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Contact Me
                                </Button>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </main>

            <footer className="border-t py-6">
                <div className="container px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground text-center sm:text-left dark:text-foreground/80">
                        Built by Yeabsra Ashebir. The source code is available on{" "}
                        <Link href="#" className="font-medium underline underline-offset-4 hover:text-foreground">GitHub</Link>.
                    </p>
                    <p className="text-sm text-muted-foreground text-center sm:text-left dark:text-foreground/80">
                        © {new Date().getFullYear()} Yeabsra Ashebir. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default HomeComponent;
