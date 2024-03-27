"use client";

import { useState } from 'react'
import dynamic from 'next/dynamic'

const ToDoListe = dynamic(() => import('../components/ToDoListe'), { ssr: false })

export default function page() {

    return (
        <ToDoListe />
    )

}
