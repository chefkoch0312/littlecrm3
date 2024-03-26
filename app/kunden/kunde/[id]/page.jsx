import React from 'react'
import EditForm from './EditForm'

export default function page({ params: { id } }) {
    return (
        <div>
            <main>
                <h2>Kunde (Nr. {id}) bearbeiten</h2>
                <EditForm id={id} />
            </main>
        </div>
    )
}
