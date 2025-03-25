import React, { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import "./style.css"; // Import file CSS

const NoteApp = () => {
    const [notes, setNotes] = useState([
        {
            id: Date.now(),
            title: "Belajar React",
            body: "React merupakan library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) pada aplikasi web.",
            archived: false,
            createdAt: new Date().toISOString(),
        },
    ]);
    const [search, setSearch] = useState("");

    const addNote = (newNote) => {
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    const toggleArchive = (id) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, archived: !note.archived } : note
            )
        );
    };

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="title">📒 Aplikasi Catatan Pribadi</h1>

            <input
                type="text"
                className="search-input"
                placeholder="🔍 Cari catatan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <NoteForm addNote={addNote} />

            <div className="notes-section">
                <div>
                    <h2>📝 Catatan Aktif</h2>
                    <NoteList
                        notes={filteredNotes.filter((note) => !note.archived)}
                        deleteNote={deleteNote}
                        toggleArchive={toggleArchive}
                    />
                </div>

                <div>
                    <h2>📂 Arsip</h2>
                    <NoteList
                        notes={filteredNotes.filter((note) => note.archived)}
                        deleteNote={deleteNote}
                        toggleArchive={toggleArchive}
                        isArchiveList={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteApp;
