import React from 'react'
import EditForm from './EditForm'
import Termine from '@/app/termine/page'

export default function page({ params: { id } }) {
    return (
        <>
            <main>
                <div className="flex">
                    <div>
                        <h2>Kunde (Nr. {id}) bearbeiten</h2>
                        <EditForm id={id} />
                    </div>
                    <div className="">
                        <h2 className="ml-5">Termine für Kunde Nr. {id}</h2>
                        <Termine id={id} />
                    </div>
                </div>
            </main>
        </>
    )
}
