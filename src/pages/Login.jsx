import { Link } from "react-router-dom";
import { useState } from "react";
import {loginUser} from "../services/authService";
import { useNavigate } from "react-router-dom";
import {setTokens} from "../services/tokenService";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        // Add your login logic here
        try {
            const response = await loginUser(formData);
            console.log(response.data);
            // Save JWT Token
            const { accessToken, refreshToken } = response.data;
            setTokens(accessToken, refreshToken);
            alert("Login Successful");
            if( response.data.role === "ADMIN"){
                navigate("/admin");
            }
            else{
                navigate("/user?username=" + formData.username);
            }
        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.message ||
                "Invalid credentials"
            );
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <p id="error-message" className="error-message"></p>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required 
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required 
                />
                <button type="submit">Login</button>
            </form>
            <Link to="/register" className="register-link">Register</Link>
        </div>
    );
}

export default Login