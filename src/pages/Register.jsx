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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Join us and get started
                    </p>
                </div>
                {errorMessage && (
                    <div className="bg-red-100 border border-red-300 text-red-600 rounded-xl p-3 mb-6 text-center">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label
                            htmlFor="reg-username"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="reg-username"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                            required
                            placeholder="Choose a username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="reg-password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="reg-password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                            placeholder="Create a password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-sm text-gray-400">
                        OR
                    </span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">
                        Already have an account?
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="mt-3 text-blue-600 hover:text-blue-700 font-semibold transition"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register