"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function getData(id) {
    // throw new Error('Simulierter Fehler beim Abrufen der Kunden-Daten');
    const res = await fetch('http://localhost:4000/customer/' + id);
    if (!res.ok) {
        throw new Error('Failed to fetch data...')
    }
    return res.json()
}

export default async function EditForm(props) {
    const router = useRouter();
    const tmpData = await getData(props.id);

    // const [isLoading, setIsLoading] = useState(false);
    // const [vorname, setVorname] = useState('');

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
