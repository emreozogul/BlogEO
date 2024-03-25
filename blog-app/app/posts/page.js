"use client"

import PostsContainer from "@/components/preview/PostsContainer"
export default function Page({ params }) {
    return (
        <div className="flex min-h-screen flex-col items-center">
            <PostsContainer></PostsContainer>

        </div>
    )
}