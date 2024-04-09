import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Tienda oficial",
}

const TiendaLayout = ({ children }) => {
    return (
        <>
        <nav>
            <h3>Seccion Tienda</h3>

            <ul>
                <li>
                    <Link href='/tienda/categorias'>Categorias</Link>
                </li>
                <li>
                    <Link href='/tienda/categorias/computadora'>Computadora</Link>
                </li>
            </ul>
        </nav>
            {children}
        </>
    )
}

export default TiendaLayout