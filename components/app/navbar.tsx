'use client'

import { BookAIcon, FileIcon, Home, Info, InfoIcon, LayoutList, Monitor, ProjectorIcon, Send } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function NavComponent({ variant = 'desktop' }: { variant?: 'mobile' | 'desktop' }) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-foreground dark:text-foreground/80" />
            ),
            href: "/",
        },

        {
            title: "About",
            icon: (
                <InfoIcon className="h-full w-full text-foreground dark:text-foreground/80" />
            ),
            href: "/about",
        },
        {
            title: "Projects",
            icon: (
                <ProjectorIcon className="h-full w-full text-foreground dark:text-foreground/80" />
            ),
            href: "/projects",
        },
        {
            title: "Bolg",
            icon: (
                <BookAIcon className="h-full w-full text-foreground dark:text-foreground/80" />
            ),
            href: "/blog",
        },
        {
            title: "Resume",
            icon: (
                <FileIcon className="h-full w-full text-foreground dark:text-foreground/80" />
            ),
            href: "/resume",
        },
        {
            title: "Theme",
            icon: mounted ? <ThemeToggle /> : null,
            href: "#",
        }
    ];

    if (variant === 'mobile') {
        return (
            <nav className="w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-t border-foreground/10">
                <div className="flex justify-around items-center py-3 px-4">
                    {links.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="h-6 w-6 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <span className="text-xs text-foreground/80">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        );
    }

    return (
        <nav className="flex flex-col items-center gap-8 py-4 px-2 rounded-full backdrop-blur-sm">
            {links.map((item) => (
                <Link
                    key={item.title}
                    href={item.href}
                    className="flex flex-col items-center gap-1 text-foreground/60 hover:text-foreground transition-colors"
                >
                    <div className="h-6 w-6 flex items-center justify-center">
                        {item.icon}
                    </div>
                    <span className="text-[10px]">
                        {item.title}
                    </span>
                </Link>
            ))}
        </nav>
    )
}
