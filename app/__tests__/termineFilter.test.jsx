// import termineFilter from './termineFilter';
import termineFilter from '@/public/assets/js/termineFilter';

test('Filter für Termine', () => {
    const data = [
        {
            "id": "1",
            "kunden_id": "b4d7",
            "mitarbeiter_id": "1",
            "termin": "2024-03-24T14:53:40.607Z",
            "bemerkung": "Komischer Kauz"
        },
        {
            "id": "2",
            "kunden_id": "efbd",
            "mitarbeiter_id": "1",
            "termin": "2024-03-24T14:53:40.607Z",
            "bemerkung": "ohne Worte"
        },
        {
            "id": "3",
            "kunden_id": "efbd",
            "mitarbeiter_id": "1",
            "termin": "2024-03-24T14:53:40.607Z",
            "bemerkung": "ohne Worte teil2"
        }
    ];
    const id = 'efbd';
    const erwartetesErgebnis = [
        {
            "id": "2",
            "kunden_id": "efbd",
            "mitarbeiter_id": "1",
            "termin": "2024-03-24T14:53:40.607Z",
            "bemerkung": "ohne Worte"
        },
        {
            "id": "3",
            "kunden_id": "efbd",
            "mitarbeiter_id": "1",
            "termin": "2024-03-24T14:53:40.607Z",
            "bemerkung": "ohne Worte teil2"
        }
    ];
    expect(termineFilter(data, id)).toEqual(erwartetesErgebnis);
});