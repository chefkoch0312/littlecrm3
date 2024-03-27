'use strict';

export default function termineFilter(data, id) {
    const neuesArray = data.filter(eintrag => eintrag.kunden_id === id);
    return neuesArray;
}