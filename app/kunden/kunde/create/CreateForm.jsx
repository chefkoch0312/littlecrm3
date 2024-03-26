"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [firma, setFirma] = useState('');
    const [anrede, setAnrede] = useState('');
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [strasse, setStrasse] = useState('');
    const [plz, setPLZ] = useState('');
    const [ort, setOrt] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const post = {
            firma, anrede, vorname, nachname, strasse, plz, ort, tel, email
        }

        const res = await fetch('http://localhost:4000/customer/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        });

        if (res.status === 201) {
            router.refresh();
            router.push("/kunden");
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="w-80">
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Firma:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setFirma(e.target.value)}
                        value={firma}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Anrede:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setAnrede(e.target.value)}
                        value={anrede}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Vorname:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setVorname(e.target.value)}
                        value={vorname}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Nachname:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setNachname(e.target.value)}
                        value={nachname}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Strasse:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setStrasse(e.target.value)}
                        value={strasse}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">PLZ:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setPLZ(e.target.value)}
                        value={plz}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Ort:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setOrt(e.target.value)}
                        value={ort}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Tel:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setTel(e.target.value)}
                        value={tel}
                    /></div>
                </div>
                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">Email:</div>
                    <div className="w-80"><input
                        className="input input-green"
                        required
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    /></div>
                </div>

                <div className="columns-4 p-1 w-80 inline-block">
                    <div className="w-56">
                        <button className="btn btn-blue" disabled={isLoading} >
                            {isLoading && <span>Speichern...</span>}
                            {!isLoading && <span>Hinzufügen</span>}
                        </button>
                    </div>
                </div>
            </div>
        </form >
    )
}
