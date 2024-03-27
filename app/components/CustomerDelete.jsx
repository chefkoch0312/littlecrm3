import React from 'react'

export default function CustomerDelete(props) {
    console.log(`Löschen ${props.id}`);
    return (
        <>
            <h1>Kunde Löschen</h1>
            <p>Es wird der Kunde mit der ID {props.id} gelöscht.</p>
            alert(`Es wird der Kunde mit der ID {props.id} gelöscht.`);
        </>
    )
}
