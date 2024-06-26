'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Ein Fehler ist aufgetreten!</h2>
            <p className="mb-5">Zur Zeit steht die Übersicht aller Kunden leider nicht zur Verfügung.</p>
            <button className="btn btn-blue" onClick={() => reset()}>
                Reload...
            </button>
        </div>
    )
}