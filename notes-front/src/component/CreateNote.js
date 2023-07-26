import { useContext, useState } from "react";
import axiosConfig from "../axiosConfig";
import { UserContext } from "./context/UserContext";
import { NotesContext } from "./context/NotesContext";
import './CreateNote.css';

function CreateNote() {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const { user } = useContext(UserContext);
    const { setNotes } = useContext(NotesContext);

    const createButton = async (newNoteEvent) => {
        newNoteEvent.preventDefault();

        const sendData = {
            userEmail: user.email,
            title: title,
            note: content
        }

        await axiosConfig.post("/notes/newNote", sendData);
        alert("New note created");
        const getNotes = await axiosConfig.get(`/notes/getAll/${user.email}`)
        setNotes(getNotes.data);
        localStorage.setItem("notes", JSON.stringify(getNotes.data));
        window.location.reload();
    }
    return (
        <div>
            <form onSubmit={createButton}>
                <div className="input-group">
                    <label>
                        Title:
                        <br />
                        <input
                            type="text"
                            name="title"
                            onChange={(titleEvent) => setTitle(titleEvent.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Content:
                        <br />
                        <textarea
                            name="content"
                            rows="10"
                            cols="40"
                            onChange={(contentEvent) => setContent(contentEvent.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <input type='submit' name='New note' value='New note' />
                </div>
            </form>
        </div>
    );
};

export default CreateNote;