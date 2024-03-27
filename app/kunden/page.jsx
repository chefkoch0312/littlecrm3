import React from 'react'
import Link from 'next/link'

let mySearch = "";

async function getData() {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // throw new Error('Simulierter Fehler beim Abrufen der Kunden-Daten');

    const res = await fetch('http://localhost:4000/customer/', {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

// let filtered = "";
// if (data.length != 0) {
//     filtered = data.entries.filter((entry) => {
//         return entry.Description.toLowerCase().includes(mySearch.toLowerCase()) || entry.API.toLowerCase().includes(mySearch.toLowerCase());
//     });
// } else {
//     filtered = data.entries;
// }

export default async function Page() {
    const tmpData = await getData();
    return (
        <>
            <div>
                <h2>Kunden-Übersicht:</h2>
                <div className="flex">
                    <div className="mb-2 ">
                        Suche: <input className="input input-green" type="text" />
                    </div>
                    <div className="ml-5">
                        <Link className="btn btn-blue" href="/kunden/kunde/create">Neu</Link>
                    </div>
                    <hr />
                </div>

                <div className="grid-container">
                    <div className="font-bold">ID</div>
                    <div className="font-bold">Firma</div>
                    <div className="font-bold">Anrede</div>
                    <div className="font-bold">Vorname</div>
                    <div className="font-bold">Nachname</div>
                    <div className="font-bold">Strasse</div>
                    <div className="font-bold">PLZ</div>
                    <div className="font-bold">Ort</div>
                    <div className="font-bold">Tel.</div>
                    <div className="font-bold">Email</div>

                    {
                        tmpData.map((tmpD) => (
                            <React.Fragment key={tmpD.id}>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.id}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.firma}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.anrede}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.vorname}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.nachname}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.strasse}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.plz}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.ort}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.tel}</div></Link>
                                <Link href={`/kunden/kunde/${tmpD.id}`}><div>{tmpD.email}</div></Link>
                            </React.Fragment>
                        ))
                    }
                </div>

            </div >
        </>
    )
}
