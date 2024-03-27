import React from 'react'

async function getData() {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // throw new Error('Simulierter Fehler beim Abrufen der Kunden-Daten');

    const res = await fetch('http://localhost:4000/appointments/', {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

// export default async function page({ params: { id } }) {
export default async function termine() {
    console.log("komponente termine");
    id = "efbd";

    const tmpData = await getData(id);
    console.log(tmpData);

    return (
        <div>
            <main>
                <h2>Termine für Kunde Nr.: {id}</h2>

            </main>
        </div>
    )
}
