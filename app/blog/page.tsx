import ExpandableCardDemo from '@/components/app/blogMain'
import React from 'react'

const Blog = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto py-20 md:px-8 lg:px-10">
                <h2 className="text-5xl mb-4 text-black dark:text-white max-w-4xl">
                    Some of my thoughts and learnings
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    I write about my learnings and thoughts about the tech world.
                </p>
            </div>
            <div className="max-w-6xl mx-auto mb-20">
                <ExpandableCardDemo />
            </div>
        </div>
    )
}

export default Blog
