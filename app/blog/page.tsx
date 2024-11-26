import ExpandableCardDemo from '@/components/app/blogMain'
import React from 'react'
import ArticleCard from "../../components/reuseble/articleCard";

const Blog = () => {
    return (
        <div className=' px-14'>
            <div className="max-w-6xl mx-auto pt-20">
                <h2 className="text-4xl  mb-4 text-black dark:text-white justify-start">
                    Some of my thoughts and learnings
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    I write about my learnings and thoughts about the tech world.
                </p>
            </div>
            <div className=" max-w-6xl mx-auto flex flex-wrap gap-5">
                {/* <ExpandableCardDemo /> */}
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    )
}

export default Blog
