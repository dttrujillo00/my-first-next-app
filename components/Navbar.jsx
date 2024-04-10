import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <h1>Navegacion</h1>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/tienda">Tienda</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar