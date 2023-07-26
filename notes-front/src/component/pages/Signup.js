import axiosConfig from "../../axiosConfig";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const signUpButton = async (signUpEvent) => {
        signUpEvent.preventDefault();

        const userData = {
            first_name: fName,
            last_name: lName,
            email: email,
            password: password
        }

        await axiosConfig.post("/user/newUser", userData);
        alert("New user created succesfully!");
        navigate("/");

    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={signUpButton}>
                <label>
                    First name:
                    <input
                        type='text'
                        name='first_name'
                        onChange={(fNameEvent) => setFName(fNameEvent.target.value)}
                        required
                        />
                </label>
                <br />
                <label>
                    Last name:
                    <input
                        type='text'
                        name='last_name'
                        onChange={(lNameEvent) => setLName(lNameEvent.target.value)}
                        required
                        />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type='text'
                        name='email'
                        onChange={(emailEvent) => setEmail(emailEvent.target.value)}
                        required
                        />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type='password'
                        name='password'
                        onChange={(passwordEvent) => setPassword(passwordEvent.target.value)}
                        required
                        />
                </label>
                <br />
                <input type='submit' name="SignUp" value='Sign Up' /><br />
                <Link to="/">Already have an account? Back to the login page!</Link>
            </form>
        </div>
    );
};

export default Signup;