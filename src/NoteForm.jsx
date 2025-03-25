import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) return;
        if (title.length > 50) return;
        addNote({
            id: Date.now(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
        });
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label>Judul Catatan:</label>
                <input
                    type="text"
                    placeholder="Masukkan judul..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <span className="char-counter">{50 - title.length} karakter tersisa</span>
            </div>

            <div className="input-group">
                <label>Isi Catatan:</label>
                <textarea
                    placeholder="Tulis catatan kamu di sini..."
                    rows="4"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>

            <button type="submit">➕ Tambah Catatan</button>
        </form>
    );
};

export default NoteForm;
