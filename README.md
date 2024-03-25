# littlecrm3

## CRM - Customer Relationship Management
Ein Customer Relationship Management System, kurz CRM, basierend auf techn. Grundlage v. Next.JS 

## Voraussetzungen
Javascript, Next.JS, React, Node.JS, JSON-Server

### Die Wahl der Mittel
JSON-Server als Datenspeicher, der einfachen Reproduzierbarkeit während des Kurses und der Prüfung. Next.JS, da es alle Aspekte von React (was der eigentliche Kurs-Inhalt ist) abbildet.

## Installation

### Herunterladen
git clone xyz

### Initialisieren
npm i

### Verzeichnis-Wechsel
cd xyz

### Installation des JSON-Server
npm install json-server -g

### Starten des JSON-Server
npx json-server --watch --port 4000 ./_data/db.json

### Starten des Projekts
npm run dev