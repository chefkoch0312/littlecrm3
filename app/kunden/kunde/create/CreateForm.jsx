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
            <div className="columns-2 border-solid border-2 border-blue-500 p-2 w-auto inline-block">
                <div className="border-solid border-2 border-green-500 w-80">test</div>
                <div className="border-solid border-2 border-green-500 w-80">test</div>
            </div>
            <label>
                <span>Firma:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setFirma(e.target.value)}
                    value={firma}
                />
            </label><br />
            <label>
                <span>Anrede:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setAnrede(e.target.value)}
                    value={anrede}
                />
            </label><br />
            <label>
                <span>Vorname:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setVorname(e.target.value)}
                    value={vorname}
                />
            </label><br />
            <label>
                <span>Nachname:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setNachname(e.target.value)}
                    value={nachname}
                />
            </label><br />
            <label>
                <span>Strasse:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setStrasse(e.target.value)}
                    value={strasse}
                />
            </label><br />
            <label>
                <span>PLZ:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setPLZ(e.target.value)}
                    value={plz}
                />
            </label><br />
            <label>
                <span>Ort:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setOrt(e.target.value)}
                    value={ort}
                />
            </label><br />
            <label>
                <span>Tel:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                />
            </label><br />
            <label>
                <span>Email:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label><br />
            <button className="btn btn-blue" disabled={isLoading} >
                {isLoading && <span>Speichern...</span>}
                {!isLoading && <span>Hinzufügen</span>}
            </button>
        </form>
    )
}
