import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

const NotesContextData = ({children}) => {
    const notesData = [];

    const [notes, setNotes] = useState(notesData);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes"));
        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesContextData;