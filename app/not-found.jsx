import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function notFound() {
    return (
        <div>
            {/* <h1 className="text-red-600">Fehler</h1>
            <p>
                Hier ist leider ein Fehler aufgetreten.<br />
                Die aufgerufene Seite existiert nicht.
            </p>
            <p>

                <Link href="/" className="text-green-600">Zurück zur Startseite</Link>
            </p> */}
            <div className="">

                <h1 className="text-red-600">Fehler</h1>

                <Image
                    src="/assets/images/404_errors_56.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />

                <Link href="/" className="text-green-600 font-bold">Zurück zur Startseite</Link>
            </div>
        </div>
    )
}
