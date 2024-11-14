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

export default function NavComponent() {

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



    return (
        <nav className="flex items-center justify-center flex-1  h-screen w-16 py-4 border-r border-dashed border-foreground/40 dark:border-foreground/20 ">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </nav>
    )
}
