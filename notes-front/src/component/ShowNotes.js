import { useContext } from 'react';
import { NotesContext } from './context/NotesContext';
import './ShowNotes.css';
import axiosConfig from '../axiosConfig';

function ShowNotes() {
    const { notes, setNotes } = useContext(NotesContext);

    async function deleteButton(email, id) {
        await axiosConfig.delete(`/notes/delete/${email}/${id}`);
        const getNotes = await axiosConfig.get(`/notes/getAll/${email}`)
        setNotes(getNotes.data);
        localStorage.setItem("notes", JSON.stringify(getNotes.data));
        window.location.reload();
    }

    return (
        <div>
            <h1>Notes</h1>
            <table className="table-01">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note, index) => (
                        <tr key={note.noteId}>
                            <td>{note.noteId}</td>
                            <td>{note.title}</td>
                            <td>{note.note}</td>
                            <td>
                                <button onClick={() => deleteButton(note.userEmail, note.noteId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowNotes;
