'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Ein Fehler ist aufgetreten!</h2>
            <button
                onClick={
                    () => reset()
                }
            >
                Erneut probieren...
            </button>
        </div>
    )
}