import Link from 'next/link'
import React from 'react'

export default function notFound() {
    return (
        <div>
            <h1 className="text-red-600">Fehler</h1>
            <p>
                Hier ist leider ein Fehler aufgetreten.<br />
                Die aufgerufene Seite existiert nicht.
            </p>
            <p>

                <Link href="/" className="text-green-600">Zurück zur Startseite</Link>
            </p>
        </div>
    )
}
