"use client"
import Post from './Post'
import { useSearchParams } from 'next/navigation'

export default function PostsContainer() {
    const searchParams = useSearchParams()

    function handleClick(id) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('id', id)
        window.location.href = `/posts/${id}?${params.toString()}`
    }


    const posts = [
        {
            id: 1,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 2,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 3,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 3,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 5,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 6,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 7,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 8,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 9,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 10,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 11,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 12,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
        {
            id: 13,
            title: "My first post",
            content: "This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post This is my first post",
            date: "2022-01-01"
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 px-10">
            {
                posts.map((post) => (
                    <Post key={post.id} {...post} navigateToPost={() => handleClick(post.id)} />
                ))
            }
        </div>
    )
}