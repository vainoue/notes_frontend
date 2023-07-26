import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextData = ({ children }) => {
    const userData = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    };

    const [user, setUser] = useState(userData);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextData;