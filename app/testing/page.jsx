import React from 'react'

export default function page() {
    return (
        <>
            <h1>Test Seite</h1>
            <p>Test-Areal,... wird natürlich später wieder gelöscht...</p>

            <div className="pt-2 pb-2">
                <button className="btn bg-fuchsia-500">test</button>
            </div>

            <div>
                <div className="columns-2 border-solid border-2 border-blue-500 p-2 w-auto inline-block">
                    <div className="border-solid border-2 border-green-500 w-80">test1</div>
                    <div className="border-solid border-2 border-green-500 w-80">test2</div>
                </div>
                <div className="columns-2 border-solid border-2 border-blue-500 p-2 w-auto inline-block">
                    <div className="border-solid border-2 border-green-500 w-80">test3</div>
                    <div className="border-solid border-2 border-green-500 w-80">test4</div>
                </div>
            </div>

        </>
    )
}
