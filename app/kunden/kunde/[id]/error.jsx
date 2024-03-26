'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Ein Fehler ist aufgetreten!</h2>
            <p className="mb-5">Leider können die Daten des Kunden nicht angezeigt werden.</p>
            <button className="btn btn-blue" onClick={() => reset()}>
                Reload...
            </button>
        </div>
    )
}