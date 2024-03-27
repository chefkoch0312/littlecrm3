import React from 'react'

import Termine from '../termine/page';

export default function page() {
    console.log("test triggered");
    const id = "efbd";

    return (
        <>
            <h1>Test Seite</h1>
            <Termine id={id} />

        </>
    )
}
