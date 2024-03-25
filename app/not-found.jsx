import Link from 'next/link'
import React from 'react'

export default function notFound() {
    return (
        <div>
            <h1>Fehler</h1>
            <p>
                Hier ist leider ein Fehler aufgetreten.<br />
                Die aufgerufene Seite existiert nicht.
            </p>
            <p>

                <Link href="/">Zurück zur Startseite</Link>
            </p>
        </div>
    )
}
