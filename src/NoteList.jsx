import React from "react";

const NoteList = ({ notes, deleteNote, toggleArchive, isArchiveList }) => {
    return (
        <div>
            {notes.length === 0 ? (
                <p className="empty-message">🚫 Tidak ada catatan.</p>
            ) : (
                notes.map((note) => (
                    <div key={note.id} className="note-card">
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                        <p>
                            <small>🕒 {new Date(note.createdAt).toLocaleDateString()}</small>
                        </p>
                        <button onClick={() => toggleArchive(note.id)}>
                            {isArchiveList ? "📤 Pindahkan" : "📥 Arsipkan"}
                        </button>
                        <button onClick={() => deleteNote(note.id)} style={{ background: "red" }}>
                            ❌ Hapus
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default NoteList;
