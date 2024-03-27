"use client";
import React from 'react'
import termineFilter from '@/public/assets/js/termineFilter';

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

export default async function page(props) {
    const tmpData = await getData(props.id);
    const tmpData2 = termineFilter(tmpData, props.id);
    console.log(tmpData2);

    return (
        <>
            <div>
                <h2>Termine für Kunde Nr.: {props.id}</h2>
                <div className="grid-container-termine w-8">
                    <div className="font-bold">ID</div>
                    <div className="font-bold">Kunden-Nr</div>
                    <div className="font-bold">Mitarbeiter-Nr</div>
                    <div className="font-bold">Termin</div>
                    <div className="font-bold">Bemerkung</div>

                    {
                        tmpData2.map((tmpData) => (
                            <React.Fragment key={tmpData.id}>
                                <div>{tmpData.id}</div>
                                <div>{tmpData.kunden_id}</div>
                                <div>{tmpData.mitarbeiter_id}</div>
                                <div>{tmpData.termin}</div>
                                <div>{tmpData.bemerkung}</div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
