import './pages.css';
import { useContext, useEffect } from 'react';
import axiosConfig from '../../axiosConfig';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { NotesContext } from '../context/NotesContext';

function Login() {

    const { user, setUser } = useContext(UserContext);
    const { notes, setNotes } = useContext(NotesContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Notes:', notes);
    }, [notes]);

    const loginButton = async (loginEvent) => {
        loginEvent.preventDefault();

        const response = await axiosConfig.get(`/user/${user.email}/${user.password}`);
        //console.log(response);
        if (response.data === null) {
            alert("Username or password incorrect");
        } else {
            const { first_name, last_name, email, password } = response.data;
            const updatedUser = {...user, first_name, last_name, email, password};
            setUser({ ...user, first_name, last_name, email: response.data.email, password: response.data.password });
            const getNotes = await axiosConfig.get(`/notes/getAll/${user.email}`)
            if (getNotes !== null) {
                setNotes(getNotes.data);
                localStorage.setItem("notes", JSON.stringify(getNotes.data));
            }
            localStorage.setItem("user", JSON.stringify(updatedUser));
            navigate("/notes");
        }
    };

    return (
        <div className="default">
            <h1>Login</h1>
            <form onSubmit={loginButton}>
                <label>
                    Email:
                    <input
                        type='text'
                        name='email'
                        value={user.email}
                        onChange={(emailEvent) => setUser({...user, email: emailEvent.target.value})}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={(passwordEvent) => setUser({...user, password: passwordEvent.target.value})}
                        required
                    />
                </label>
                <br />
                <input type='submit' name='Login' value='Login' /><br />
                <Link to="/signup">Do not have an account? Sign up here!</Link>
            </form>
        </div>
    );
};

export default Login;