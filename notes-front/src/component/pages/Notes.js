import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NotesContext } from "../context/NotesContext";
import CreateNote from "../CreateNote";
import ShowNotes from "../ShowNotes";

function Notes() {

    const { user } = useContext(UserContext);
    const { notes } = useContext(NotesContext);

    console.log(user);
    console.log(notes);

    return (
        <div>
            <h1>Hello {user.first_name} {user.last_name},</h1>
            <h1>Welcome to your notes!</h1>
            <CreateNote />
            <ShowNotes />
        </div>
    );
};

export default Notes;