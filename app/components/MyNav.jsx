import React from 'react'
import Link from 'next/link'

export default function MyNav() {
    return (
        <nav>
            <div className="flex flex-row space-x-2 pl-3 pt-2 ">
                <ul className="flex flex-row space-x-1">
                    <li className=""><Link href="/">Home</Link></li>
                    <li className=""><Link href="/kunden">Kunden</Link></li>
                    <li className=""><Link href="/info">Info</Link></li>
                    <li className=""><Link href="/">Login/Register</Link></li>
                </ul>
            </div>
        </nav>
    )
}
