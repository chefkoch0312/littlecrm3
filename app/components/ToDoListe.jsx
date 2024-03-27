import React from 'react'
import Link from 'next/link'

export default function ToDoListe() {
    return (
        <div>
            <h1 >LittleCRM v3.0</h1>

            <h2>Allgemeine Info</h2>
            <p className="pb-2">
                Next.js-basiertes Customer Relationship Management System.<br />
            </p>

            <h2>Setup und Voraussetzungen</h2>
            <p className="pb-2">
                Node.JS, Next.JS, JSON-Server
            </p>

            <h2>Notizen:</h2>
            <p className="pb-2">
                <Link href="https://nextjs.org/docs/app/building-your-application/testing/jest" target="_blank">Infos bei nextjs.org zum Thema: "Testing"</Link><br />
                Cypress als E2E test-runner funktioniert nur bis Next.JS 13. <br />
                Jest hat eine saubere Unterstützung seit Next.JS 12, wird aber meinerseits wegen Zeitmangel in der Prüfungsphase ignoriert.
            </p>

            <h2>ToDo & Aktueller Stand:</h2>
            <p className="pb-2">
                <ul>
                    <li className="green">Next.JS: setup</li>
                    <li className="green">Installieren: JSON-Server</li>
                    <li className="green">Erstellen eines Basis-Layouts zur Darstellung</li>
                    <li className="green">Datengrundlage im JSON-Server Erstellen</li>
                    <li className="green">App-Layout erstellen / anpassen</li>
                    <li className="green">Navigation erstellen</li>
                    <li className="red">Navigation: Active-Marker einfügen</li>
                    <li className="green">Anzeigen aller Kunden</li>
                    <li className="green">Erstellen eines neuen Kunden (initial: nur Kunden-Datensatz)</li>
                    <li className="green">Editieren eines Kunden (initial: nur Kunden-Datensatz)</li>
                    <li className="blue">Löschen eines Kunden (initial: nur Kunden-Datensatz)</li>
                    <li className="red">Suchfeld in Übersicht aller Kunden</li>
                    <li className="green">loading-Site erstellen</li>
                    <li className="green">personalisierte Fehlerseiten erstellen</li>
                    <li className="red">Erstellen (kundenbezogener) Termin</li>
                    <li className="red">Editieren (Kundenbezogener) Termin</li>
                    <li className="red">Löschen (kundenbezogener) Termin</li>
                    <li className="red">User-Handling: Benutzer registrieren (Create)</li>
                    <li className="red">User-Handling: Benutzer login (Read)</li>
                    <li className="red">User-Handling: Benutzer Edit (Update) - ...bedingt Admin-Panel</li>
                    <li className="red">User-Handling: Benutzer Löschen (Delete) - ...bedingt Admin-Panel</li>
                    <li className="green">Hydration-Fehler beim Schachteln von HTML-Tags korrigieren <br />(
                        <Link href="https://nextjs.org/docs/messages/react-hydration-error" target="_blank">react-hydration-error</Link> und <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr" target="_blank">lazy-loading#skipping-ssr</Link>
                        )</li>
                    <li className="red">Next.JS: Grundsystem auf Support für Typescript umstellen, jedoch bisherige Funktionen explizit in nicht-TS belassen; auch dahingehend anpassen</li>
                    <li className="red">Info Komponente für die Startseite erstellen, in der die Anzahl der Einträge für Kunden, User und Termine angezeigt werde</li>
                    <li className="red">Pagination</li>
                </ul>
            </p>

        </div>
    )
}
