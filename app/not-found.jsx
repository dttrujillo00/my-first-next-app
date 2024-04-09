import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <h3>Pagina no encontrada</h3>
        <Link href='/'>Home</Link>
    </div>
  )
}

export default NotFound