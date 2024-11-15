"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function AboutInfo() {
    return (
        <div className="px-6 w-full">
            <div className="mb-10">
                <div className="text-sm  prose prose-sm dark:prose-invert flex flex-row gap-10 justify-center">

                    <Image
                        src={'/telegram.jpg?height=40;width=40'}
                        alt="blog thumbnail"
                        height={250}
                        width={255}
                        className=" mb-10 object-cover rounded-3xl border-[.03px] border-dashed border-foreground/50 p-3"
                    />

                    <div>
                        <p className=" text-sm">
                            Sit duis est minim proident non nisi velit non consectetur. Esse
                            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                            commodo et labore dolore commodo pariatur.
                        </p>
                        <p className=" text-sm mt-5">
                            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                            veniam in commodo id reprehenderit adipisicing. Proident duis
                            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                        </p>
                        <p className=" text-sm mt-5">
                            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                            reprehenderit deserunt amet laborum consequat adipisicing officia qui
                            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                            Amet culpa officia aliquip deserunt veniam deserunt officia
                            adipisicing aliquip proident officia sunt.
                        </p>

                    </div>


                </div>
            </div>
        </div>
    );
}

const dummyContent = [
    {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: (
            <>
                <p className=" text-base">
                    Sit duis est minim proident non nisi velit non consectetur. Esse
                    adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                    Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                    incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                    fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                    nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                    occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                    officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                    commodo et labore dolore commodo pariatur.
                </p>
                <p className=" text-base">
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                    veniam in commodo id reprehenderit adipisicing. Proident duis
                    exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                </p>
                <p className=" text-base">
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
        badge: "React",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];
