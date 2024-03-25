import React from 'react'

async function getData(id) {
    const res = await fetch('http://localhost:4000/customer/' + id);
    if (!res.ok) {
        throw new Error('Failed to fetch data...')
    }
    return res.json()
}

export default async function Page({ params: { id } }) {
    const tmpData = await getData(id);
    return (
        <>
            <div>
                <h2>Kunde:</h2>
                <div>{

                    < div className="">
                        <h3>{tmpData.title}</h3>
                        <p>{tmpData.vorname}</p>
                        <p>{tmpData.nachname}</p>
                        <p>{tmpData.strasse}</p>
                        <p>{tmpData.plz}</p>
                        <p>{tmpData.ort}</p>
                        <p>{tmpData.tel}</p>
                        <p>{tmpData.email}</p>
                    </div>

                }</div>
            </div >
        </>
    )
}
