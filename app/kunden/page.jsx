import React from 'react'
import Link from 'next/link'
// import styles from '/app/page.module.css'

let mySearch = "";

async function getData() {
    await new Promise(resolve => setTimeout(resolve, 5000));

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
                <div className="mb-2 ">
                    Suche: <input className="border-dotted border-2 border-green-400" type="text" />
                </div>
                <div>{
                    tmpData.map((tmpD) => (
                        <div key={tmpD.id} >
                            <Link href={`/kunden/kunde/${tmpD.id}`}>
                                <h3>
                                    {tmpD.firma}
                                </h3>
                                {tmpD.vorname}
                                {tmpD.nachname}
                                {tmpD.strasse}
                                {tmpD.plz}
                                {tmpD.ort}
                                {tmpD.tel}
                                {tmpD.email}
                            </Link>
                        </div>
                    ))
                }</div>
            </div >
        </>
    )
}
