import {registerUser} from "../services/authService";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }
    
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();
        registerUser(userData)
        .then(response => {
            if(response.success){
                setErrorMessage("");
                alert("Registration successful! Please login to continue.");
                navigate("/login");
            } else {
                setErrorMessage(response.message);
            }
        }).catch(error => {
            setErrorMessage("An error occurred during registration. Please try again.");
        });
    };
    return (
        <div className="register-container">
            <h2>Register</h2>
            {errorMessage &&
                <p id="reg-error-message" className="reg-error-message">{errorMessage}</p>
            }
            <form onSubmit={handleRegister}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="reg-username" name="username" value={userData.username} onChange={handleChange} required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="reg-password" name="password" value={userData.password} onChange={handleChange} required/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register